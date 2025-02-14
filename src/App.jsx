import React, { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setShowPreview(false); 
    }
  };


  const handleShowPreview = () => {
    setShowPreview(true);
  };


  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2>Image Preview</h2>
      {/* File Input */}
      <div style={{ display: "block", justifyContent: "center",marginLeft:"70px" }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Preview Button (only shown if an image is uploaded) */}
      {preview && !showPreview && (
        <button
          onClick={handleShowPreview}
          style={{
            padding: "8px 15px",
            backgroundColor: "blue",
            alignItems:"center",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Preview Image
        </button>
      )}

      {/* Image Preview (only shown when 'Preview Image' is clicked) */}
      {showPreview && preview && (
        <div style={{ marginTop: "20px" }}>
          <h4>Image Preview:</h4>
          <img
            src={preview}
            alt="Uploaded Preview"
            style={{
              Width: "500px",
              height: "500px",
              marginTop: "10px",
              padding:"10px",
              border:"1px solid",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          />

          {/* Close Button */}
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={handleClosePreview}
              style={{
                padding: "8px 15px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
