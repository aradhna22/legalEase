import React from 'react';
import { useLocation } from 'react-router-dom';
import './UploadSuccess.css';
function UploadSuccess() {
  const location = useLocation(); // To access the passed file name from App component
  const { fileName } = location.state || {}; // Get file name from navigation state

  return (
    <div className="Appp">
      <h1>Upload Success!!</h1>
      <p>{fileName ? `File "${fileName}" has been successfully uploaded!` : 'No file uploaded.'}</p>
    </div>
  );
}

export default UploadSuccess;  
