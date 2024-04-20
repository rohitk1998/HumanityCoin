import React, { useEffect, useState } from "react";
import style from "../Pages/Setting/style.module.scss";
import "./ImageUpload.scss";
import UploadIcon from "../Assets/Images/uploadIcon.svg";
import { Spin, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { capitalize } from "../../helpers";

const ImageUpload = ({
  type,
  setUploadedFile,
  uploadedFile,
  error,
  label,
  uploadText,
}) => {
  const filesSelected = uploadedFile;
  const [image, setImage] = useState({
    preview: "",
    error: error,
    loading: false,
  });

  useEffect(() => {
    setImage((prev) => ({ ...prev, error }));
  }, [error]);

  const getCurrentFileType = () => {
    let selected = filesSelected.files.find((obj) => obj.type === type);
    return selected;
  };

  useEffect(() => {
    if (getCurrentFileType()?.file) {
      const objectURL = URL.createObjectURL(getCurrentFileType().file);

      setImage({ preview: objectURL, error: "", loading: false });
    }
  }, []);

  const handleDelete = (e) => {
    e.stopPropagation();
    setImage({ preview: "", error: "", loading: false });
    let currentType = getCurrentFileType();
    filesSelected.files.forEach((obj) => {
      if (obj.type === type) {
        obj.file = "";
        obj.error = "";
      }
    });

    setImage((prev) => ({ ...prev, error: `Please select ${type}` }));

    setUploadedFile({ ...filesSelected });
  };

  const handleChange = (e) => {
    let error = "";
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const { isImage, isImageSizeValid } = validateFile(selectedFile);
      if (!isImage) {
        error = "Please select image";
        setImage({ preview: "", error, loading: false });
        // message.error(error);
        return false;
      } else if (!isImageSizeValid) {
        error = "Please select image of size less than 2 mb";
        setImage({
          preview: "",
          error,
          loading: false,
        });
        // message.error(error);
        return false;
      }
      const objectURL = URL.createObjectURL(selectedFile);

      setImage({ preview: objectURL, error, loading: false });

      uploadedFile.files.forEach((obj) => {
        if (type === obj.type) {
          obj.file = selectedFile;
          obj.error = "";
        }
      });

      setUploadedFile({ ...uploadedFile });
    }
  };

  const validateFile = (file) => {
    const maxSize = 2 * 1024 * 1024;
    const isImage = file.type.startsWith("image/");
    const isImageSizeValid = file.size <= maxSize;
    return { isImage, isImageSizeValid };
  };
  return (
    <div className="uploadCmnSec">
      <label>{label}</label>
      <div className={`upload-container ${image.preview ? "uploaded" : ""}`}>
        {!image.preview && (
          <input
            type="file"
            name=""
            id=""
            multiple="false"
            accept=".jpg,.jpeg,.png"
            onChange={handleChange}
          />
        )}
        <p className="ant-upload-drag-icon">
          <img
            className={`${image.preview ? "upload-prev" : ""}`}
            src={image.preview || UploadIcon}
          />
          {image.preview && (
            <span className="pos-delete" onClick={handleDelete}>
              <DeleteOutlined />
            </span>
          )}
        </p>

        {!image.preview && <p className="ant-upload-text">{uploadText}</p>}
      </div>

      <span className={style.uploadSec__acceptContact} style={{ color: "red" }}>
        {image.loading && <Spin size="large" style={{ marginLeft: "10px" }} />}
        {image.error}
      </span>
    </div>
  );
};

export default ImageUpload;
