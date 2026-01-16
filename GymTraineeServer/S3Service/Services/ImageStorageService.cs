using Grpc.Core;
using GymTraineeServer.Shared.Protos;

namespace S3Service.Services
{
    public class ImageStorageService : ImageStorage.ImageStorageBase
    {
        private readonly S3Service _s3Service;

        public ImageStorageService(S3Service s3Service)
        {
            _s3Service = s3Service;
        }

        public override async Task<UploadFileResponse> UploadFile(UploadFileRequest request, ServerCallContext context)
        {
            using var stream = new MemoryStream(request.Stream.ToByteArray());
            var imageUrl = await _s3Service.UploadFileAsync(stream, request.FileName);
            return new UploadFileResponse { ImageUrl = imageUrl };
        }

        public override async Task<GetFileResponse> GetFile(GetFileRequest request, ServerCallContext context)
        {
            var stream = await _s3Service.GetFileAsync(request.FileName);
            var bytes = new byte[stream.Length];
            await stream.ReadAsync(bytes, 0, (int)stream.Length);
            return new GetFileResponse { Data = Google.Protobuf.ByteString.CopyFrom(bytes) };
        }

        public override async Task<DeleteFileResponse> DeleteFile(DeleteFileRequest request, ServerCallContext context)
        {
            var success = await _s3Service.DeleteFileAsync(request.FileName);
            return new DeleteFileResponse { Success = success };
        }
    }
}