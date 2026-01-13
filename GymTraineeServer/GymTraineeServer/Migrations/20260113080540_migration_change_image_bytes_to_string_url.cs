using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTraineeServer.Migrations
{
    /// <inheritdoc />
    public partial class migration_change_image_bytes_to_string_url : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Exercises");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Exercises",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Exercises");

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Exercises",
                type: "bytea",
                nullable: true);
        }
    }
}
