import React from "react";
import { PlayerProvider } from "./context/player-context";
import MusicPlayer from "./pages/MusicPlayer";
import "./styles/App.css";

function App() {
  return (
    <PlayerProvider>
      <MusicPlayer />
    </PlayerProvider>
  );
}

export default App;
