import React from "react";
import { usePlayer } from "../context/player-context";

export const SongGrid = () => {
  const { state, playSong } = usePlayer();

  return (
    <div className="song-grid">
      {state.likedSongs.map((song) => (
        <div key={song.id} className="song-item" onClick={() => playSong(song)}>
          <div className="glow-wrapper">
            <div className="glow-card">
              <div className="album-art">
                <img src={song.albumArt} alt={`${song.title} album art`} />
              </div>
            </div>
          </div>
          <div className="song-info">
            <h3 className="song-title">{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
