export interface GalleryImage {
  imageUrl?: string;
  fileName: string;
  customStyles: {
    backgroundPositionX?: string;
    backgroundPositionY?: string;
  };
  spanWidth: 1 | 2 | 3;
  spanHeight: 1 | 2 | 3;
}

export interface Gallery {
  fullPath: string;
  thumbnailPath: string;
  previewImage: GalleryImage;
  images: GalleryImage[];
  isPublished: boolean;
}
