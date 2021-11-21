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

export interface PreviewImage extends GalleryImage {
  caption: string;
}

export interface Gallery {
  fullPath: string;
  thumbnailPath: string;
  previewImage: PreviewImage;
  images: GalleryImage[];
  isPublished: boolean;
}

export interface GalleryConfig {
  baseUrl: string;
  galleryOrder: string[];
  galleries: Record<string, Gallery>;
}
