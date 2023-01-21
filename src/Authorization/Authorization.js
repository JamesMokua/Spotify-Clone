import React, { useEffect, useState } from "react";
import Artists from "../components/Artists/Artists";
import Album from "../components/Albums/Album";

function Authorization() {
  const CLIENT_ID = "70a51a0fad214d408bc87119c9398416";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token",token)
      
    }
    setToken(token)
  },[])
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  return <div>
     {!token ?
    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    : <button onClick={logout}>Logout</button>}
    <Artists token={token}/>
    {/* <Album token={token}/> */}
 
  </div>;
}

export default Authorization;
