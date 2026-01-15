namespace GymTraineeServer.Models.DTO
{
    public class ProgramDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<TrainingDayDTO> TrainingDays { get; set; }
    }
}
