// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import UploadForm from './components/UploadForm/UploadForm';
import About from './components/About/About'; 
import SearchImage from './components/SearchImage/SearchImage'; 
import Navbar from './components/Navbar/Navbar';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Search" element={<SearchImage />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
