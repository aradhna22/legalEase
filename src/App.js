import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import UploadSuccess from './UploadSuccess';
import Processing from './Processing';
import './App.css';

function App() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [uploadError, setUploadError] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      try {
        // Create FormData to send file
        const formData = new FormData();
        formData.append('file', file);

        // Navigate to processing page immediately
        navigate('/processing', { state: { fileName: file.name } });

        // Send PDF to backend
        const response = await axios.post('http://0.0.0.0:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // If successful, navigate to output page with summary
        navigate('/upload-success', { 
          state: { 
            fileName: file.name, 
            summary: response.data.summary 
          } 
        });

      } catch (error) {
        console.error('Upload error:', error);
        setUploadError('Failed to upload PDF. Please try again.');
        navigate('/');
      }
    } else {
      alert('Please upload a PDF file');
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">LegalEase</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {uploadError && <div className="error-message">{uploadError}</div>}

      <Routes>
        <Route 
          path="/" 
          element={
            <header className="App-header">
              <h1>Upload and Share your Documents</h1>
              <p>Drag and drop and start uploading your documents now.</p>
              <button className="my-button" onClick={handleButtonClick}>
                START UPLOADING
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf"
                style={{ display: 'none' }}
              />
            </header>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/upload-success" element={<UploadSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
