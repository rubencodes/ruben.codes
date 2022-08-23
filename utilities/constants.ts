import home from "./home";

export const state = {
  /* Common */
  name: "Ruben Martinez Jr.",
  metaTitle: "Ruben Martinez Jr - Artist, Developer, Technologist",
  metaFavicon: "https://ruben.codes/static/favicon.png",
  metaThemeColor: "#000000",
  metaTwitter: "@rubencodes",

  /* Pages */
  home,
} as const;

export const STATIC_MAPS_API_KEY = process.env.NEXT_PUBLIC_STATIC_MAPS_API_KEY;
