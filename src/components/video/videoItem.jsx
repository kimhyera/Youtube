import React, { useEffect } from 'react';
import './video.scss'


const VideoItem = ({ video, video: { snippet }, onVideoClick }) => {




    return (
        <li className="video-item" onClick={() => onVideoClick(video)}>
            <a href="#" className="thumbnail">

                <div className="video-item-cover">
                    <img className="video-item-img" src={snippet.thumbnails.medium.url} alt="" />

                </div>
                <div className="video-item-details">
                    <p className="video-item-details-h">{snippet.title}</p>
                    <p className="video-item-details-des">{snippet.channelTitle}</p>
                </div>
            </a>
        </li>
    )




}


export default VideoItem;


