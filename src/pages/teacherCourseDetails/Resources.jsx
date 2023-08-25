import React from 'react';
// import './Resources.css';

const Resources = ({ onFileUpload,name,link }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileUpload(file);
      };
  return (
    <div className='resources'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Resource Link
      </a>
      <div className='file'>
      <p>Choose file for syllabus: </p>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>
      <div className='book'>
        Book Name: {name} 
      </div>
    </div>
  )
}

export default Resources