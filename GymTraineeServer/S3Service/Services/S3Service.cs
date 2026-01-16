using Amazon.S3;
using Amazon.S3.Transfer;

namespace S3Service.Services
{
    public class S3Service
    {
        private readonly AmazonS3Client _s3Client;
        private readonly string _bucketName = "gym-trainee-exercises-images";

        private readonly string secret_key = "hXZCKbE1J5SwAYS9ayDnoqfkuya49rE5Vd73CgqRLmHj";
        private readonly string access_key = "dmWxxm4NRXBuAVrURg75sX";

        private readonly AmazonS3Config config = new ()
        {
            ServiceURL = "https://hb.ru-msk.vkcloud-storage.ru",
            ForcePathStyle = true,
        };

        public S3Service()
        {
            _s3Client = new AmazonS3Client(access_key, secret_key, config);
        }

        public async Task<string> UploadFileAsync(Stream stream, string fileName)
        {
            var uploadRequest = new TransferUtilityUploadRequest
            {
                InputStream = stream,
                Key = fileName,
                BucketName = _bucketName,
                CannedACL = S3CannedACL.PublicRead
            };

            var fileTransferUtility = new TransferUtility(_s3Client);
            await fileTransferUtility.UploadAsync(uploadRequest);

            return $"https://hb.ru-msk.vkcloud-storage.ru/{_bucketName}/{fileName}";
        }

        public async Task<Stream> GetFileAsync(string fileName)
        {
            using var response = await _s3Client.GetObjectAsync(_bucketName, fileName);

            var memoryStream = new MemoryStream();
            await response.ResponseStream.CopyToAsync(memoryStream);
            memoryStream.Position = 0;
            return memoryStream;
        }

        public async Task<bool> DeleteFileAsync(string fileName)
        {
            try
            {
                var response = await _s3Client.DeleteObjectAsync(_bucketName, fileName);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
