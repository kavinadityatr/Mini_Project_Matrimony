import React, { useState } from 'react';

const PhotoUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file); // Pass the selected file to the parent component
  };

  return (
    <div className="photo-upload">
      {/* <label htmlFor="upload" color='white'></label> */}
      <input
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Selected"
          className="selected-image"
        />
      )}
    </div>
  );
};

export default PhotoUpload;
