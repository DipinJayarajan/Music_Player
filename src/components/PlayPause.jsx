import React from 'react';
import { FaPauseCircle, FaPlayCircle} from "react-icons/fa"

const PlayPause = ({song, isPlaying, activeSong, handlePause, handlePlay}) => 
// if we r playing the song and the activesong title is equal to the current song title that means we r playing it andd we have to show a  pause icon otherwise we have to show a play icon  
( isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePause}
    />
  ) : (
    <FaPlayCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
    />
  ));
  
export default PlayPause;


