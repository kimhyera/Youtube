import React, { useEffect } from 'react';
import './video.scss'


const VideoItem = props => {




    return (
        <li className="video-item">
            <a href="#" className="thumbnail">

                <div className="video-item-cover">
                    <img className="video-item-img" src={props.video.snippet.thumbnails.medium.url} alt="" />

                </div>
                <div className="video-item-details">
                    <p className="video-item-details-h">{props.video.snippet.title}</p>
                    <p className="video-item-details-des">{props.video.snippet.channelTitle}</p>
                </div>
            </a>
        </li>
    )




}


export default VideoItem;


