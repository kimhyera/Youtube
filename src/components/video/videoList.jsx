import React, { useEffect } from "react";

import VideoItem from './videoItem';
import './video.scss'




const VideoList = props => {



    return (
        <ul className="video-list">



            {props.videos.map((video) => (
                <VideoItem video={video} />
            ))}




        </ul>
    )
}



export default VideoList;