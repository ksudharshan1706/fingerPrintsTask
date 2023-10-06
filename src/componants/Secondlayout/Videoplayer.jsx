import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=y9j-BL5ocW8';
function Videoplayer() {
   const playerRef = useRef(null);
   return (
         <ReactPlayer 
         pip
         width="100%"
            ref={playerRef} url={VIDEO_PATH} />
   )
};

export default Videoplayer;