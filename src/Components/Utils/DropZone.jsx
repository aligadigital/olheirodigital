import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const dropzoneStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  marginTop: "2rem",
  borderWidth: "2px",
  borderRadius: "50%",
  height: "200px",
  width: "200px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border 0.24s ease-in-out",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden", // added overflow hidden
};

const activeDropzoneStyle = {
  borderColor: "#00adb5",
};

const DropzoneText = {
  margin: "0",
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "center",
};

const ImagePreview = {
  top: 0,
  left: 0,
  display: "block",
  height: "100%", // changed to 100%
  width: "100%", // changed to 100%
  borderRadius: "50%",
  objectFit: "cover",
  position: "absolute", // added position absolute
};

const FileName = {
  display: "flex",
  fontSize: "14px",
  marginTop: "8px",
};

const DropzoneComponent = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 1024 * 1024 * 5,
    maxFiles: 1,
  });

  const fileList = files.map((file) => (
    <li key={file.name} style={{ listStyle: "none" }}>
      <img style={ImagePreview} src={file.preview} alt={file.name} />
      {/* <span style={FileName}>{file.name}</span> */}
    </li>
  ));

  return (
    <div
      style={
        isDragActive
          ? { ...dropzoneStyle, ...activeDropzoneStyle }
          : dropzoneStyle
      }
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {!files.length && <p style={DropzoneText}>Foto</p>}
      <ul style={{ padding: 0 }}>{fileList}</ul>
    </div>
  );
};

export default DropzoneComponent;
