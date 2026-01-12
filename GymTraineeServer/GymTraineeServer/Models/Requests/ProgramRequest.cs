namespace GymTraineeServer.Models.Requests
{
  public class ProgramAddRequest
  {
    public string Name { get; set; }
    public string Description { get; set; }
    public List<TrainingDay> TrainigDays { get; set; } = new();
  }

  public class TrainingDay
  {
    public int TrainingNumber { get; set; }
    public List<Exercise> Exercises { get; set; }
  }

  public class Exercise
  {
    public Guid ExerciseId { get; set; }
    public double? MaxWeightCoef { get; set; }
    public int? Count { get; set; }
    public int? Reps { get; set; }
    public bool Passed { get; set; } = false;
  }
}