import React, { useEffect} from "react";
import { Login } from "./components/Login/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constraints";
import Spotify from "./components/Spotify/Spotify";
import './App.css'

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
 
  return <div>{token ? <Spotify /> : <Login />}</div>;
}

export default App;
