import React from "react";
import "./Login.css";

export const Login = () => {
  const handleClick = () => {
    const clientId = "70a51a0fad214d408bc87119c9398416";
    const redirectUri = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      " user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",

    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="Spotify Logo"
        className="login-img"
      />
      <button className="login-btn" onClick={handleClick}>
        Connect Spotify
      </button>
    </div>
  );
};
