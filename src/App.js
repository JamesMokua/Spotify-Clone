import Authorization from "./Authorization/Authorization";
import Album from "./components/Albums/Album";
import Artists from "./components/Artists/Artists";

function App() {
  
  return (
    <div >
    <Authorization >
      <Artists />
    </Authorization>
    </div>
  );
}

export default App;