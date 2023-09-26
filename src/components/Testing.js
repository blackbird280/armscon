import React, { useState } from 'react';

function ImageConversion() {
  const [webPImage, setWebPImage] = useState('');
  const [imageSizeMB, setImageSizeMB] = useState(null);

  // Function to handle image conversion
  const convertToWebP = (url) => {
    const imageUrl = url;

    // Fetch the image and retrieve its size
    fetch(imageUrl)
      .then((response) => {
        const contentLength = response.headers.get('Content-Length');
        const sizeInBytes = parseInt(contentLength, 10);
        const sizeInMB = (sizeInBytes / 1048576).toFixed(2); // Convert to MB and round to two decimal places
        setImageSizeMB(sizeInMB);
        return response.blob();
      })
      .then((blob) => {
        // Convert the Blob to a Base64 Data URL
        const reader = new FileReader();
        reader.onload = () => {
          const base64DataUrl = reader.result;
          setWebPImage(base64DataUrl);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error fetching or converting the image:", error);
      });
  };

  return (
    <div>
      <button onClick={convertToWebP}>Convert to WebP</button>
      {webPImage && <img src={webPImage} alt="WebP Image" />}
      {imageSizeMB !== null && <p>Image Size: {imageSizeMB} MB</p>}
    </div>
  );
}

export default ImageConversion;
