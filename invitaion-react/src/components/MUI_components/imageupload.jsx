import React, { useState } from 'react';
import '../css_files/imageup.css'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      // Implement the logic to upload the image to the backend
      // You can use technologies like FormData to send the file to the server
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual backend endpoint
      fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Image uploaded successfully:', data);
          // Handle the response from the server as needed
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          // Handle errors
        });
    } else {
      alert('Please select an image before uploading.');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
  