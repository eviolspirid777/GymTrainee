using GymTraineeServer.DbContext;
using GymTraineeServer.Models.Database;
using GymTraineeServer.Models.Programs;
using GymTraineeServer.Models.Requests;
using GymTraineeServer.Programs.Muravev;
using GymTraineeServer.Programs.UncleMisha;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GymTraineeServer.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class GymTraineeController(
        PostgreSQLDbContext postgreDbContext) : ControllerBase
    {
        private readonly PostgreSQLDbContext _postgreDbContext = postgreDbContext;

        [HttpGet("programs")]
        public async Task<IActionResult> GetPrograms()
        {
            var programs = await _postgreDbContext
                .Programs
                .AsNoTracking()
                .Include(p => p.TrainigDays)
                .ThenInclude(td => td.Exercises)
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    TrainingDays = p.TrainigDays.Select(td => new
                    {
                        td.TrainingNumber,
                        Exercises = td.Exercises.Select(e => new
                        {
                            e.MaxWeightCoef,
                            e.Count,
                            e.Reps,
                            e.Exercise.Name,
                            e.Exercise.Tag
                        })
                    })
                })
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
    }
}