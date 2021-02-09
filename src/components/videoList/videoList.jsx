import React, { useEffect } from "react";

import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.scss'




const VideoList = ({ videos, onVideoClick, display }) => {



    return (
        <ul className={styles.list}>



            {videos.map((video) => (
                <VideoItem video={video} onVideoClick={onVideoClick} display={display} />
            ))}




        </ul>
    )
}



export default VideoList;