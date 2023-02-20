import React,{useState,useEffect} from "react";
import "./Login.css";
import Spotify from "../Spotify/Spotify";


export const Login = () => { 

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
      " playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-library-modify",
      "user-library-read",
      "app-remote-control",
      "streaming",
      "user-follow-modify",
      "user-follow-read",
    ];
  const [token, setToken] = useState("")
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
        
    }

    setToken(token)
    

}, [])
const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}
  
  return (
    !token ?
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="Spotify Logo"
        className="login-img"
      />
      <a href={`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      " "
    )}&response_type=token`}>
      <button className="login-btn" >
        Connect Spotify
      </button>
      </a>
    </div>
    : <Spotify/>
  );
};
