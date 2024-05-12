import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

const ImageUploader = ({ onFileUploaded }) => {
  const [file, setFile] = useState(null);
  const [linkCreated, setLinkCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setLoading(true); // Start loading when file is selected
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
      setLinkCreated(true); // Show the link after loading
    }, 3000); // Loader duration
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleLinkClick = () => {
    if (file) {
      onFileUploaded(true);
    }
  };

  return (
    <div className="uploadWrapper">
      <div className="uploadBody">
        <br />
        <h1>Welcome to RichServer</h1>
        <br />
        <h3>
          Please select the files you want to use to create your E-Magazine!
        </h3>
        <br />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Button variant="light" onClick={handleButtonClick}>
          Select Files
        </Button>
        <hr />
        {loading && <div>Creating your E-Magazine please wait. . .</div>}
        {!loading && linkCreated && (
          <div>
            <h3>Magazine Issue for May 2024 has now been created !</h3>
            <hr />
            <Button style={{ minWidth: 250 }} onClick={handleLinkClick}>
              May 2024 Issue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
