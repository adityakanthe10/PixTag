import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './HomePage.css'; // Create this file for styling

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/images?tag=${searchTerm}`);
      setImages(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="homepage">
      <Navbar onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image._id} className="image-item">
              <img src={image.url} alt={image.tags.join(', ')} />
              <p>{image.tags.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
