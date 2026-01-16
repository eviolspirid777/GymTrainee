using Google.Protobuf;
using GymTraineeServer.DbContext;
using GymTraineeServer.Shared.Protos;
using GymTraineeServer.Utils.Mappers.ProgramMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GymTraineeServer.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class GymTraineeController(
        PostgreSQLDbContext postgreDbContext,
        ImageStorage.ImageStorageClient imageStorageClient) : ControllerBase
    {
        private readonly PostgreSQLDbContext _postgreDbContext = postgreDbContext;
        private readonly ImageStorage.ImageStorageClient _imageStorageClient = imageStorageClient;

        [HttpGet("programs")]
        public async Task<IActionResult> GetPrograms()
        {
            var programs = await _postgreDbContext
                .Programs
                .AsNoTracking()
                .Include(p => p.TrainigDays)
                .ThenInclude(td => td.Exercises)
                .ThenInclude(tde => tde.Exercise)
                .Select(p => ProgramMapper.MapProgramToProgramDTO(p))
                .ToListAsync();

            return Ok(programs);
        }

        [HttpPost("programs/add")]
        public async Task<IActionResult> AddProgram()
        {
            await _postgreDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("exercises/add")]
        public async Task<IActionResult> AddExercise([FromBody] Models.Database.Exercise exercise)
        {
            await _postgreDbContext.Exercises.AddAsync(exercise);
            await _postgreDbContext.SaveChangesAsync();
            return Ok();
        }

        #region ImageAdd
        [HttpPost("exercises/{exerciseId}/image")]
        public async Task<IActionResult> AddImage(
            [FromRoute] string exerciseId,
            [FromForm] string fileName,
            [FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("File is required");

            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            var fileBytes = memoryStream.ToArray();

            var response = await _imageStorageClient.UploadFileAsync(new ()
            {
                FileName = fileName,
                Stream = ByteString.CopyFrom(fileBytes)
            });

            var exercise = await _postgreDbContext.Exercises.FindAsync(exerciseId);
            if (exercise != null)
            {
                exercise.ImageUrl = response.ImageUrl;
                await _postgreDbContext.SaveChangesAsync();
            }

            return Ok(new { imageUrl = response.ImageUrl });
        }
        [HttpDelete("exercises/{exerciseId}/{fileName}")]
        public async Task<IActionResult> DeleteImage(
            [FromRoute] Guid exerciseId,
            [FromRoute] string fileName
        )
        {
            await _imageStorageClient.DeleteFileAsync(new () { FileName = fileName });
            var exercise = await _postgreDbContext.Exercises.FindAsync(exerciseId);
            if(exercise != null)
            {
                exercise.ImageUrl = null;
                await _postgreDbContext.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }
        #endregion
    }
}