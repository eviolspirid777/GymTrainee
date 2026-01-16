using GymTraineeServer.DbContext;
using GymTraineeServer.Shared.Protos;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<PostgreSQLDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("default"));
});
builder.Services.AddGrpcClient<ImageStorage.ImageStorageClient>(o =>
{
    o.Address = new Uri("http://localhost:5001");
}).ConfigureChannel(options =>
{
    options.HttpHandler = new System.Net.Http.HttpClientHandler
    {
        ServerCertificateCustomValidationCallback =
            System.Net.Http.HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
    };
}); ;

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// app.Run("http://*:5000");
app.Run();
