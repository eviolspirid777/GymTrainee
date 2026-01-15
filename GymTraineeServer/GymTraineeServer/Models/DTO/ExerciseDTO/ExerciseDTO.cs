using GymTraineeServer.Models.Database;

namespace GymTraineeServer.Models.DTO
{
    public class ExerciseDTO
    {
        public string Name { get; set; }
        public double? MaxWeightCoef { get; set; }
        public int Count { get; set; }
        public int[] Reps { get; set; }
        public bool Passed { get; set; }
        public string Type { get; set; }
    }
}
