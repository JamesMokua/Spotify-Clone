import React, { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constraints";
import "./Playlists.css";

export const Playlists = () => {
  const [{ playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
     
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    getPlaylistData();
  }, [dispatch]);
  return (
    <div className="playlists-main">
      <ul className="playlists-ul">
        {" "}
        {playlists.map(({ name, id }) => {
          return <li key={id} className="playlists-li">{name}</li>;
        })}
      </ul>
    </div>
  );
};
