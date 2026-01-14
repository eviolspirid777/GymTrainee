using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTraineeServer.Migrations
{
    /// <inheritdoc />
    public partial class migration_new_reps_type : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                @"ALTER TABLE ""TrainingDayToExercise"" 
                      ALTER COLUMN ""Reps"" TYPE integer[] 
                      USING ARRAY[""Reps""]::integer[];"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Reps",
                table: "TrainingDayToExercise",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int[]),
                oldType: "integer[]",
                oldNullable: true);
        }
    }
}
