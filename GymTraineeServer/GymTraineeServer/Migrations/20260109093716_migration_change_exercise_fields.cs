using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTraineeServer.Migrations
{
    /// <inheritdoc />
    public partial class migration_change_exercise_fields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "Exercises");

            migrationBuilder.DropColumn(
                name: "MaxWeightCoef",
                table: "Exercises");

            migrationBuilder.DropColumn(
                name: "Passed",
                table: "Exercises");

            migrationBuilder.DropColumn(
                name: "Reps",
                table: "Exercises");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "TrainingDayToExercise",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "MaxWeightCoef",
                table: "TrainingDayToExercise",
                type: "double precision",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Passed",
                table: "TrainingDayToExercise",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Reps",
                table: "TrainingDayToExercise",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Tag",
                table: "Exercises",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "TrainingDayToExercise");

            migrationBuilder.DropColumn(
                name: "MaxWeightCoef",
                table: "TrainingDayToExercise");

            migrationBuilder.DropColumn(
                name: "Passed",
                table: "TrainingDayToExercise");

            migrationBuilder.DropColumn(
                name: "Reps",
                table: "TrainingDayToExercise");

            migrationBuilder.DropColumn(
                name: "Tag",
                table: "Exercises");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Exercises",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "MaxWeightCoef",
                table: "Exercises",
                type: "double precision",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Passed",
                table: "Exercises",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Reps",
                table: "Exercises",
                type: "integer",
                nullable: true);
        }
    }
}
