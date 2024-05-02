import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import fileupload from "../assets/icons/file-upload.svg";

//import { Button } from "@/components/ui";
import { convertFileToUrl } from "../libs/utils.ts";

const FileUploader = ({ fieldChange, mediaUrl }) => {
  const fieldChangePropType = PropTypes.func; // Basic function type

  fieldChangePropType.propTypes = {
    files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  };

  FileUploader.propTypes = {
    mediaUrl: PropTypes.string, // Required string prop
  };
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="image" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label">Click or drag photo to replace</p>
        </>
      ) : (
        <div className="file_uploader-box ">
          <img src={fileupload} width={96} height={77} alt="file upload" />

          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

          <Button type="button" className="shad-button_dark_4">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
