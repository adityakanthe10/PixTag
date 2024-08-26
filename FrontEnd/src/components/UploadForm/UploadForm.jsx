import  { useState } from 'react';
import axios from 'axios';
import './UploadForm.css'; // Add styling here

const UploadImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState('');
  // const [message,setMessage] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('tags', tags);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', 
        formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      window.alert(`Image Uploaded Successfully`)
      // setMessage(`Image uploaded successfully : ${response.data.url}`);
      console.log('Image uploaded successfully:', response);
    } catch (error) {
      window.alert(`Error uploading image: `)
      // setMessage(`Error uploading image:${error .response ? error.response.data.messaege:error.message}`)
      console.error('Error uploading image:', error);
    }
  };

  return (
      <div className="upload-section">
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <input
          type="text"
          placeholder="Enter tags..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button className="btn" onClick={handleUpload}>Upload Image</button>
      </div>
  );
};

export default UploadImage;
