import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './SearchForm.css'; 

const SearchImage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/images?tag=${searchTerm}`);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
      setImages([]);
    }
  };

  return (
    <div className="search-image-page">
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
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

export default SearchImage;
