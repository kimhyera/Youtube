import React, { useEffect } from "react";

const VideoItem = props => {

    useEffect(() => {
        console.log('값이 설정됨');

    })


    const videoImg = props.video.snippet.thumbnails.standard.url;
    const videoTitle = props.video.snippet.title;
    const videoName = props.video.snippet.channelTitle;

    console.log(props.video);

    return (
        <li className="video-item">
            <a href="#" className="thumbnail">

                <div className="video-item-cover">
                    <img className="video-item-img" src={videoImg} alt="" />

                </div>
                <div className="video-item-details">
                    <p className="video-item-details-h">{videoTitle}</p>
                    <p className="video-item-details-des">{videoName}</p>
                </div>
            </a>
        </li>
    )

}






const VideoList = props => {



    return (
        <ul className="video-list">


            {props.videos.map((video) => (
                <VideoItem key={video.id} video={video} />
            ))}


        </ul>
    )
}



export default VideoList;