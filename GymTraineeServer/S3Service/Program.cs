using S3Service.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddGrpc();
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenLocalhost(5001, listenOptions =>
    {
        listenOptions.Protocols = Microsoft.AspNetCore.Server.Kestrel.Core.HttpProtocols.Http2;
    });
});

builder.Services.AddSingleton<S3Service.Services.S3Service>(); 

var app = builder.Build();

app.MapGrpcService<ImageStorageService>();

app.Run("http://localhost:5001");
