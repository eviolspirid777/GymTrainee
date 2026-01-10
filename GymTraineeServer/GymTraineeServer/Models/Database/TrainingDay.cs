namespace GymTraineeServer.Models.Database
{
    public class TrainingDay
    {
        public Guid Id { get; set; }
        public int TrainingNumber { get; set; }
        public Guid ProgramId { get; set; }
        public Program? Program { get; set; }
        public List<TrainingDayToExercise> Exercises { get; set; } = new();
    }
}
