import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";

import Icon from "./Icon";
import useInputState from "../hooks/useInputState";
import { PHOTO_FOLDERS } from "../utilities/constants";

import style from "./GalleryCreator.module.css";

const GalleryCreator = ({ onCreateGallery }) => {
  const [isCreatorMode, setIsCreatorMode] = useState(false);
  const onToggleShowModal = () => setIsCreatorMode(!isCreatorMode);

  const formRef = useRef();
  const [galleryType, onGalleryTypeChange] = useInputState(
    PHOTO_FOLDERS.Landscape,
  );
  const [uniqueId, onUniqueIdChange] = useInputState("");
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
  const onClickCreate = () => {
    if (!formRef.current.checkValidity()) {
      return;
    }

    onCreateGallery(galleryType, uniqueId, caption, fileList[0]);
  };

  return (
    <>
      {!isCreatorMode && (
        <button className={style.galleryCreator} onClick={onToggleShowModal}>
          <Icon className={style.galleryCreator__Icon} type="plus" />
          <p className={style.galleryCreator__Title}>New Gallery</p>
        </button>
      )}
      {isCreatorMode && (
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
              value={uniqueId}
              onChange={onUniqueIdChange}
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
          <img
            className={style.galleryCreatorForm__Image}
            src={fileAsDataUrl}
          />
          <div className={style.galleryCreatorForm__ButtonContainer}>
            <button
              type="submit"
              className={style.galleryCreatorForm__Button}
              onClick={onClickCreate}
            >
              Create
            </button>
            <button
              className={style.galleryCreatorForm__Button}
              onClick={onToggleShowModal}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default GalleryCreator;
