import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './DropZone.css';




const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

};

const thumb = {
  display: 'inline-flex',
  borderRadius: 200,
  background: '#ffffff',
  // border: '1px dashed #eaeaea',
  width: 200,
  height: 200,

  // boxSizing: 'border-box',

};



const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  width: '200px',
  height: '200px',
  borderRadius: '200',


};

const img = {
  display: 'block',
  width: '200px',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '200px',

};




function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="Atleta"
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]); // Add 'files' to the dependency array

  return (
    <div className="container" style={{ backgroundColor: files.length > 0 ? 'transparent' : 'white' }}>

      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {files.length === 0 && <p>Foto</p>}
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </div>
  );
}
export default Previews
