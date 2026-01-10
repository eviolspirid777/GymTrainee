using GymTraineeServer.Models.Database;

namespace GymTraineeServer.Models.Programs
{
    public class TrainingDayModel : ITrainingDay
    {
        public int TrainingNumber { get; set; }
        public IExercise[] Exercises { get; set; }
    }

    public class ExerciseModel : IExercise
    {
        public string Name { get; set; }
        public double? MaxWeightCoef { get; set; }
        public int? Count { get; set; }
        public int? Reps { get; set; }
        public bool Passed { get; set; }
        public ExerciseTypeEnum? Type { get; set; }
    }
}
