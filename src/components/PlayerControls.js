import React from "react";
import { usePlayer } from "../context/player-context";

export const PlayerControls = () => {
  const { state, togglePlay, previousSong, nextSong } = usePlayer();
  const { currentSong, isPlaying } = state;

  if (!currentSong) return null;

  return (
    <div className="player-controls">
      <div className="container player-content">
        <div className="current-song">
          <img
            src={currentSong.albumArt}
            alt={`${currentSong.title} album art`}
          />
          <div className="current-song-info">
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <div className="controls">
          <button className="control-button" onClick={previousSong}>
            ⏮
          </button>
          <button className="control-button" onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="control-button" onClick={nextSong}>
            ⏭
          </button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress">
          <div className="progress-tip"></div>
        </div>
      </div>
    </div>
  );
}
