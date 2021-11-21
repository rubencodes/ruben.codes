import { state } from "./constants";
import { GalleryConfig } from "../types/Gallery";

const { metaConfigPath: path, metaConfigFileName: fileName } =
  state.photography;

const createConfigUpload = ({
  json,
  uploader,
}: {
  json: GalleryConfig;
  uploader: (path: string, file: File) => Promise<any>;
}) => {
  // Create a JSON file.
  const configFile = new File([JSON.stringify(json)], fileName, {
    type: "application/json",
  });

  // Upload it, then reload.
  return uploader(path, configFile);
};

export default createConfigUpload;
