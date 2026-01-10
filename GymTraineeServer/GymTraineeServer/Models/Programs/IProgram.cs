using GymTraineeServer.Models.Database;

namespace GymTraineeServer.Models.Programs
{
    public interface IProgram
    {
        public Guid Id{ get; set; }
        public string Name{ get; set; }
        public string Description { get; set; }
        public ITrainingDay[] TrainigDays { get; set; }
    }

    public interface ITrainingDay
    {
        public int TrainingNumber { get; set; }
        public IExercise[] Exercises { get; set; }
    }

    public interface IExercise
    {
        public string Name{ get; set; }
        public double? MaxWeightCoef { get; set; }
        public int? Count { get; set; }
        public int? Reps{ get; set; }
        public bool Passed { get; set; }
        public ExerciseTypeEnum? Type { get; set; }
    }
}
