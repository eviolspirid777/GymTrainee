using GymTraineeServer.DbContext;
using GymTraineeServer.Models.Database;
using GymTraineeServer.Models.Programs;
using GymTraineeServer.Programs.Muravev;
using GymTraineeServer.Programs.UncleMisha;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GymTraineeServer.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class GymTraineeController(
        PostgreSQLDbContext postgreDbContext) : ControllerBase
    {
        private readonly PostgreSQLDbContext _postgreDbContext = postgreDbContext;

        [HttpGet("programs")]
        public List<IProgram> GetPrograms()
        {
            var programs = new List<IProgram>([new UncleMisha(), new MuravevProgram()]);
            return programs;
        }

        [HttpPost("programs/add")]
        public async Task<IActionResult> AddProgram([FromBody] Models.Database.Program program)
        {
            await _postgreDbContext.Programs.AddAsync(program);
            return Ok();
        }

        [HttpPost("exercises/add")]
        public async Task<IActionResult> AddExercise([FromBody] Exercise exercise)
        {
            await _postgreDbContext.Exercises.AddAsync(exercise);
            return Ok();
        }
    }
}