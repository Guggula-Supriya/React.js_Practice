import React, { useState, useEffect } from "react";

export default function First() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );

        if (!response.ok) throw new Error("Failed to fetch images");

        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Paws & Claws Gallery</h1>

      {isLoading && <p>Loading images...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="cat"
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
