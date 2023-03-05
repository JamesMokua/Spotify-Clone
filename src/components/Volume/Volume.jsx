import React from 'react'
import './Volume.css'
import axios from 'axios';

export default function Volume() {
    const setVolume = async (e) => {
        await axios.put(
          "https://api.spotify.com/v1/me/player/volume",
          {},
          {
            params: {
              volume_percent: parseInt(e.target.value),
            },
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
          }
        );
      };
  return (
    <div className='volume-container'>
        <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
        
    </div>
  )
}
