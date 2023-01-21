import React, { useState, useEffect } from 'react';

const Album = ({token}) => {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setAlbumData(data);
    };
    fetchData();
  }, []);

  if (!albumData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{albumData.name}</h1>
      <img src={albumData.images[0].url} alt={albumData.name} />
    </div>
  );
}

export default Album;
