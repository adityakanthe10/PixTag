import  { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [tag, setTag] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        params: { tag },
      });

      setImages(response.data);
    } catch (error) {
      console.error('Error searching images:', error);
      setError('Failed to retrieve images. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Search by tag"
            required
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image._id}>
              <img src={image.url} alt="Search result" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              <p>Tags: {image.tags.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
