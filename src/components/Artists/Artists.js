import { useEffect, useState } from "react";
import axios from "axios";
function Artists({ token }) {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data);
    setArtists(data.artists.items);
  };
  const renderArtists = () => {
    return artists.map((artist) => {
      return (
        <div key={artist.id}>
          {artist.images.length ? (
            <img src={artist.images[0].url} alt={artist.name} />
          ) : (
            <div>No image</div>
          )}

          <h3>{artist.genres}</h3>
          <h3>{artist.followers.total}</h3>
          <h3>{artist.name}</h3>
          <h3>{artist.popularity}</h3>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Spotify React</h1>
      {token ? (
        <form onSubmit={searchArtists}>
          <input
            type="text"
            placeholder="Search for a song, artist or album"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      ) : (
        <h2>Please log in</h2>
      )}
      {renderArtists()}
    </div>
  );
}

export default Artists;
