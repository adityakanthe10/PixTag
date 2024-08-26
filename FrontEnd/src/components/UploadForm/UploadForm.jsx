import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './UploadForm'; // Add styling here

const UploadImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('tags', tags);

    try {
      const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="upload-image-page">
      <Navbar />
      <div className="upload-section">
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <input
          type="text"
          placeholder="Enter tags..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
    </div>
  );
};

export default UploadImage;
