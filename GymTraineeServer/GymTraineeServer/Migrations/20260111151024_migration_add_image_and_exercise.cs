using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTraineeServer.Migrations
{
    /// <inheritdoc />
    public partial class migration_add_image_and_exercise : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Exercises",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Exercises",
                type: "bytea",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Exercises");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Exercises");
        }
    }
}
