import React from 'react';
import { SongGrid } from '../components/SongGrid';
import { PlayerControls } from '../components/PlayerControls';
import backIcon from '../assets/icons/backArrow.svg';
import { usePlayer } from '../context/player-context';

export default function MusicPlayer() {  
    const { state: { currentSong } } = usePlayer();

  return (
    <div className={`music-player-container ${currentSong ? 'height-with-song' : ''}`}>
      <header className="page-header">
        <a to="/" className="back-button">
          <img src={backIcon} alt="back"/>
        </a>
        <h1 className="page-title">Liked Songs</h1>
      </header>
      <SongGrid />
      <PlayerControls />
    </div>
  );
}

