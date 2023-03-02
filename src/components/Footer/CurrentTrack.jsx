import React,{useEffect} from 'react'
import { useStateProvider } from "../../utils/StateProvider"
import axios from "axios"
import { reducerCases } from "../../utils/Constraints"
import './Footer.css'

export default function CurrentTrack() {
    const [{ token, currentlyPlaying}, dispatch] = useStateProvider();
    useEffect(() => {
        const getCurrentTrack = async () => {
          const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          );
          
          if (response.data !== "") {
            const currentlyPlaying = {
              id: response.data.item.id,
              name: response.data.item.name,
              artists: response.data.item.artists.map((artist) => artist.name),
              image: response.data.item.album.images[2].url,
            };
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
          } else {
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
          }
        };    
        getCurrentTrack();
      }, [token,dispatch]);
  return (
    <div>
         {currentlyPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__name">{currentlyPlaying.name}</h4>
            <h6 className="track__artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </div>
  )
}
