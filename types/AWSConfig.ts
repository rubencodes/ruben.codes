export interface AWSConfig {
  bucketName: string;
  bucketRegion: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
}
