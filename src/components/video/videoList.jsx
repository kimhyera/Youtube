import React, { useEffect } from "react";

import VideoItem from './videoItem';
import './video.scss'




const VideoList = ({ videos, onVideoClick }) => {



    return (
        <ul className="video-list">



            {videos.map((video) => (
                <VideoItem video={video} onVideoClick={onVideoClick} />
            ))}




        </ul>
    )
}



export default VideoList;