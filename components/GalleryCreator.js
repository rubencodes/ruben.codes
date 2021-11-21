/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";

import ModalBackdrop from "./ModalBackdrop";
import useInputState from "../hooks/useInputState";
import useKeydownEvent from "../hooks/useKeydownEvent";
import { PHOTO_FOLDERS } from "../utilities/constants";

import style from "./GalleryCreator.module.css";

const GalleryCreator = ({ onCreateGallery, onExit }) => {
  const formRef = useRef();
  const [galleryType, onGalleryTypeChange] = useInputState(
    PHOTO_FOLDERS.Landscape,
  );
  const [folderName, onFolderNameChange] = useInputState("");
  const [caption, onCaptionChange] = useInputState("");
  const [filePath, onFilePathChange, fileList] = useInputState(null);
  const [fileAsDataUrl, setFileAsDataUrl] = useState(null);
  useEffect(() => {
    if (!fileList.length) return;

    const [file] = fileList;
    const reader = new FileReader();
    reader.onload = (event) => setFileAsDataUrl(event.target.result);
    reader.readAsDataURL(file);
  }, [fileList]);
  const onClickCreate = (event) => {
    event.preventDefault();
    if (!formRef.current.checkValidity()) {
      return;
    }

    onCreateGallery(galleryType, folderName, caption, fileList[0]);
  };

  // Exit on escape.
  useKeydownEvent(
    (event) => {
      switch (event.key) {
        case "Escape": {
          onExit();
          break;
        }
        default: {
          break;
        }
      }
    },
    [onExit],
  );

  return (
    <ModalBackdrop>
      <form ref={formRef} className={style.galleryCreatorForm}>
        <p className={style.galleryCreatorForm__Title}>New Gallery</p>
        <label className={style.galleryCreatorForm__Label}>
          Type
          <select
            className={style.galleryCreatorForm__Input}
            value={galleryType}
            onChange={onGalleryTypeChange}
            required
          >
            {Object.keys(PHOTO_FOLDERS).map((name) => (
              <option key={PHOTO_FOLDERS[name]} value={PHOTO_FOLDERS[name]}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className={style.galleryCreatorForm__Label}>
          UniqueId
          <input
            className={style.galleryCreatorForm__Input}
            type="text"
            value={folderName}
            onChange={onFolderNameChange}
            required
          />
        </label>
        <label className={style.galleryCreatorForm__Label}>
          Name
          <input
            className={style.galleryCreatorForm__Input}
            type="text"
            value={caption}
            onChange={onCaptionChange}
            required
          />
        </label>
        <label className={style.galleryCreatorForm__Label}>
          Image
          <input
            className={classnames(
              style.galleryCreatorForm__Input,
              style.galleryCreatorForm__InputFile,
            )}
            type="file"
            value={filePath}
            onChange={onFilePathChange}
            accept=".jpg,.jpeg"
            required
          />
        </label>
        <img className={style.galleryCreatorForm__Image} src={fileAsDataUrl} />
        <div className={style.galleryCreatorForm__ButtonContainer}>
          <button
            type="submit"
            className={style.galleryCreatorForm__Button}
            onClick={onClickCreate}
          >
            Create
          </button>
          <button className={style.galleryCreatorForm__Button} onClick={onExit}>
            Cancel
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
};

export default GalleryCreator;
