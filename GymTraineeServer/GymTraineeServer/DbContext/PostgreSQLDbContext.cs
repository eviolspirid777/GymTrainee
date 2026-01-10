using GymTraineeServer.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace GymTraineeServer.DbContext
{
    public class PostgreSQLDbContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public PostgreSQLDbContext(DbContextOptions options) : base(options) { }
        //TODO: Создать миграцию

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.Database.Program>()
                .HasMany(p => p.TrainigDays)
                .WithOne(td => td.Program)
                .HasForeignKey(td => td.ProgramId);

            modelBuilder.Entity<TrainingDayToExercise>(b =>
            {
                b.HasKey(t => t.Id);

                b.HasOne(t => t.TrainingDay)
                 .WithMany(td => td.Exercises)
                 .HasForeignKey(t => t.TrainingDayId)
                 .OnDelete(DeleteBehavior.Cascade);

                b.HasOne(t => t.Exercise)
                 .WithMany(e => e.TrainingDayToExercise)
                 .HasForeignKey(t => t.ExerciseId)
                 .OnDelete(DeleteBehavior.Cascade);

                b.HasIndex(t => new { t.TrainingDayId, t.ExerciseId }).IsUnique();
            });
        }

        public DbSet<Models.Database.TrainingDay> TrainingDays { get; set; } = null!;
        public DbSet<Models.Database.Program> Programs { get; set; } = null!;
        public DbSet<Models.Database.Exercise> Exercises { get; set; } = null!;
    }
}
