# Music Player App

## Demo Link

[https://mrkazmi333.github.io/sprinto/](https://mrkazmi333.github.io/sprinto/)

This is a React-based Music Player application that allows users to view and play their liked songs. The app features a responsive design with a song grid, player controls, and state management using React Context.

## Project Structure

The project consists of the following main components:

1. `player-context.js`: Manages the global state of the music player.
2. `MusicPlayer.js`: The main component that renders the song grid and player controls.
3. `SongGrid.js`: Displays a grid of liked songs.
4. `PlayerControls.js`: Renders the player controls and current song information.
5. `App.css`: Contains the styles for the entire application.

## How It Works

### 1. State Management (player-context.js)

The `player-context.js` file sets up the global state management for the music player using React's Context API and useReducer hook. It provides the following:

- Initial state with a list of liked songs and player status.
- Actions for playing, pausing, and navigating between songs.
- A reducer function to handle state updates.
- A custom hook `usePlayer` for easy access to the player state and actions.

### 2. Main Component (MusicPlayer.js)

The `MusicPlayer.js` component serves as the main container for the application. It:

- Renders the page header with a back button and title.
- Includes the `SongGrid` and `PlayerControls` components.
- Adjusts its height based on whether a song is currently selected.

### 3. Song Grid (SongGrid.js)

The `SongGrid.js` component displays a grid of liked songs. It:

- Retrieves the list of liked songs from the global state.
- Renders each song as a clickable item with album art, title, and artist.
- Triggers the `playSong` action when a song is clicked.

### 4. Player Controls (PlayerControls.js)

The `PlayerControls.js` component handles the playback controls and displays the current song information. It:

- Shows the current song's album art, title, and artist.
- Provides buttons for previous song, play/pause, and next song.
- Includes a progress bar (non-functional in this version).

### 5. Styling (App.css)

The `App.css` file contains all the styles for the application, including:

- Color variables for easy theming.
- Glow effect for song items.
- Styles for the player controls and progress bar.

## Approach to the Problem

1. **State Management**: I started by setting up the global state using Context API and useReducer. This allows for easy state management across components and provides a single source of truth for the application.

2. **Component Structure**: I broke down the UI into reusable components (MusicPlayer, SongGrid, PlayerControls) to maintain a clean and modular code structure.

3. **Functionality**: The basic play, pause, and song navigation functions are implemented, allowing users to interact with the player.

4. **Scalability**: The current implementation allows for easy addition of new features, such as actual audio playback, more detailed song information, or additional player functions.

## Future Improvements

- Implement actual audio playback functionality.
- Add a functional progress bar that shows the current position in the song.
- Implement a search or filter function for the liked songs.
- Add more detailed song information, such as album name or release date.
- Implement a backend API to fetch song data and user preferences.

This Music Player app provides a solid foundation for a feature-rich audio playback application, with room for expansion and improvement in functionality and user experience.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
