// import { useRef } from 'react';
// import './App.css';

// function App() {
//   const fileInputRef = useRef(null); // Create a ref for the file input

//   const handleButtonClick = () => {
//     fileInputRef.current.click(); // Trigger the hidden file input click
//   };


//   const handleFileChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       console.log('Selected file:', file.name); // You can handle the file here
//     }
//   };

//   return (
//     <div className="App">
//       <h1>LegalEase</h1>
//       <header className="App-header">
//         <h1>Upload and Share your Documents</h1>
//         <p>Drag and drop and start uploading your documents now.</p>
        
//         {/* Button to trigger file input */}
//         <button className="my-button" onClick={handleButtonClick}>
//           START UPLOADING
//         </button>
        
//         {/* Hidden file input */}
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           style={{ display: 'none' }} // Hide the file input
//         />
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import UploadSuccess from './UploadSuccess';
import Processing from './Processing'; // Import the Processing page
import './App.css';

function App() {
  const fileInputRef = useRef(null); // Create a ref for the file input
  const navigate = useNavigate(); // React Router's hook to navigate

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
      navigate('/processing', { state: { fileName: file.name } }); // Navigate to the Processing page
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">LegalEase</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Routing */}
      <Routes>
        <Route 
          path="/" 
          element={
            <header className="App-header">
              <h1>Upload and Share your Documents</h1>
              <p>Drag and drop and start uploading your documents now.</p>
              {/* Button to trigger file input */}
              <button className="my-button" onClick={handleButtonClick}>
                START UPLOADING
              </button>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the file input
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

export default App;
