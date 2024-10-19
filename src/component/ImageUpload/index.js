import React from 'react'
import { useDropzone } from "react-dropzone";
import "./style.css"; // Import custom styles
import { Upload } from "../../asset/svg";

const ImageUpload = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: "image/*", // Accept only image files
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles); // Handle file upload here
      },
    });
  
    return (
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
           <div className="file-drag-main">
          <p>Drop the files here ...</p>
          </div>
        ) : (
          <div className="file-drag-main">
            <img src={Upload} />
            <p className="upload-button-title">
              Drag and drop or <span>choose file</span> to upload
            </p>
            <p className="upload-button-format">
            Format Supports: jpeg, jpg, png
            </p>
          </div>
        )}
      </div>
    );
  };

export default ImageUpload