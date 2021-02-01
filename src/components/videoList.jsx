import React, { useEffect } from "react";

const VideoItem = function ({ item, onClick }) {

    useEffect(() => {
        console.log('값이 설정됨');

    })


    const videoImg = item.snippet.thumbnails.standard.url;
    const videoTitle = item.snippet.title;
    const videoName = item.snippet.channelTitle;

    console.log(item);

    return (
        <div className="video-item">
            <a href="#" className="thumbnail">

                <div className="video-item-cover">
                    <img className="video-item-img" src={videoImg} alt="" />

                </div>
                <div className="video-item-details">
                    <p className="video-item-details-h">{videoTitle}</p>
                    <p className="video-item-details-des">{videoName}</p>
                </div>
            </a>
        </div>
    )

}







const VideoList = function ({ videos, onClick }) {

    return (
        <div className="video-list">


            {videos.map((item) => (
                <VideoItem item={item} />
            ))}


        </div>
    )

}


export default VideoList;