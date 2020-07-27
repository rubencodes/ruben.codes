import home from "./home";
import photography from "./photography";

export const IS_DEV = process.env.NODE_ENV === "development";

export const COLORS = [
  "blue",
  "red",
  "yellow",
  "forestgreen",
  "orange",
  "pink",
  "rebeccapurple",
];

export const CYCLE_TIMEOUT = 300;

export const AWS_CREDENTIALS = {
  bucketName: "static.ruben.codes",
  bucketRegion: "us-east-2",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_SECRET,
  },
};

export const PHOTO_FOLDERS = {
  Landscape: "landscapes",
  Portrait: "portraits",
};

export const FULL_IMAGE_SIZE = 2000;
export const THUMBNAIL_IMAGE_SIZE = 1000;

export const state = {
  /* Common */
  name: "Ruben Martinez Jr.",
  metaTitle: "Ruben Martinez Jr - Artist, Developer, Technologist",
  metaFavicon: "https://ruben.codes/static/favicon.png",
  metaThemeColor: "#000000",
  metaTwitter: "@rubencodes",

  /* Pages */
  home,
  photography,
};

export const STATIC_MAPS_API_KEY = process.env.NEXT_PUBLIC_STATIC_MAPS_API_KEY;
