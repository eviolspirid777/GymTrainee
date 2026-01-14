using System.ComponentModel.DataAnnotations;

namespace GymTraineeServer.Models.Database
{
    public class TrainingDayToExercise
    {
        [Key]
        public Guid Id { get; set; }
        public double? MaxWeightCoef { get; set; }
        public int? Count { get; set; }
        public int[]? Reps { get; set; }
        public bool Passed { get; set; } = false;
        public Guid TrainingDayId { get; set; }
        public TrainingDay TrainingDay { get; set; } = null!;
        public Guid ExerciseId { get; set; }
        public Exercise Exercise { get; set; } = null!;
    }
}
