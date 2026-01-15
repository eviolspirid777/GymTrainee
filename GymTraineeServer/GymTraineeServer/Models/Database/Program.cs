using System.ComponentModel.DataAnnotations;

namespace GymTraineeServer.Models.Database
{
    public class Program
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<TrainingDay> TrainigDays { get; set; } = new();
    }
}
