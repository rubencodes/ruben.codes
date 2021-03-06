import { state } from "./constants";

const {
  metaConfigPath: path,
  metaConfigFileName: fileName,
} = state.photography;

const createConfigUpload = ({ json, uploader }) => {
  // Create a JSON file.
  const configFile = new File([JSON.stringify(json)], fileName, {
    type: "application/json",
  });

  // Upload it, then reload.
  return uploader(path, configFile);
};

export default createConfigUpload;
