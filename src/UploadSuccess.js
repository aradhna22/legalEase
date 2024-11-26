import React from 'react';
import { useLocation } from 'react-router-dom';
import './UploadSuccess.css';

function UploadSuccess() {
  const location = useLocation();
  const { fileName, summary } = location.state || {};

  return (
    <div className="Appp">
      <h1>Upload Success!!</h1>
      <p>{fileName ? File "${fileName}" has been successfully processed! : 'No file uploaded.'}</p>
      
      {summary ? (
        <div className="summary-container">
          <h2>Document Summary</h2>
          <p>{extracted_text}</p>
        </div>
      ) : (
        <p>No summary available.</p>
      )}
    </div>
  );
}

export default UploadSuccess;
