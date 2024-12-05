import React, { createContext, useContext, useReducer } from "react";
import believerImg from "../assets/images/believer.svg";
import shortwaveImg from "../assets/images/shortwave.svg";
import dreamOnImg from "../assets/images/dreamon.svg";
import originsImg from "../assets/images/origin.svg";
import chaffDustImg from "../assets/images/chaffdust.svg";
import tiedownImg from "../assets/images/tiedown.svg";

const initialState = {
  currentSong: null,
  isPlaying: false,
  queue: [],
  likedSongs: [
    {
      id: "1",
      title: "Believer",
      artist: "IMAGINE DRAGON",
      albumArt: believerImg,
    },
    {
      id: "2",
      title: "Shortwave",
      artist: "RYAN GRIGDRY",
      albumArt: shortwaveImg,
    },
    {
      id: "3",
      title: "Dream On",
      artist: "ROGER TERRY",
      albumArt: dreamOnImg,
    },
    {
      id: "4",
      title: "Origins",
      artist: "IMAGINE DRAGON",
      albumArt: originsImg,
    },
    {
      id: "5",
      title: "Chaff & Dust",
      artist: "HYONNA",
      albumArt: chaffDustImg,
    },
    {
      id: "6",
      title: "Tie me Down",
      artist: "HYONNA",
      albumArt: tiedownImg,
    },
  ],
};

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const playSong = (song) => dispatch({ type: "PLAY_SONG", payload: song });
  const pauseSong = () => dispatch({ type: "PAUSE_SONG" });
  const nextSong = () => dispatch({ type: "NEXT_SONG" });
  const previousSong = () => dispatch({ type: "PREVIOUS_SONG" });
  const togglePlay = () => dispatch({ type: "TOGGLE_PLAY" });

  return (
    <PlayerContext.Provider
      value={{
        state,
        playSong,
        pauseSong,
        nextSong,
        previousSong,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}


export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
      throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
  }
  
  function playerReducer(state, action) {
    switch (action.type) {
      case 'PLAY_SONG':
        return {
          ...state,
          currentSong: action.payload,
          isPlaying: true
        };
      case 'PAUSE_SONG':
        return {
          ...state,
          isPlaying: false
        };
      case 'TOGGLE_PLAY':
        return {
          ...state,
          isPlaying: !state.isPlaying
        };
      case 'NEXT_SONG': {
        const currentIndex = state.likedSongs.findIndex(song => song.id === state.currentSong?.id);
        const nextIndex = (currentIndex + 1) % state.likedSongs.length;
        return {
          ...state,
          currentSong: state.likedSongs[nextIndex],
          isPlaying: true
        };
      }
      case 'PREVIOUS_SONG': {
        const currentIndex = state.likedSongs.findIndex(song => song.id === state.currentSong?.id);
        const previousIndex = (currentIndex - 1 + state.likedSongs.length) % state.likedSongs.length;
        return {
          ...state,
          currentSong: state.likedSongs[previousIndex],
          isPlaying: true
        };
      }
      default:
        return state;
    }
  }
  