declare module "image-blob-reduce" {
  class ImageBlobReduce {
    new(): ImageBlobReduce;
    toBlob: (file: File, options: { max: number }) => Blob;
  }

  export = ImageBlobReduce;
}
