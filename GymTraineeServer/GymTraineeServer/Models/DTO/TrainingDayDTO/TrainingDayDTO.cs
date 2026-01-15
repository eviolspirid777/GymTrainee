namespace GymTraineeServer.Models.DTO
{
    public class TrainingDayDTO
    {
        public int TrainingNumber { get; set; }
        public List<ExerciseDTO> Exercises { get; set; }
    }
}
