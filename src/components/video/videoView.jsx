import React from 'react';

const VideoView = ({ video }) => {
    return (

        <div className="video-view">

            <div className="video-box">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id}?&autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



            </div>

            <div className="video-detail" >
                {video.snippet.title}
            </div></div >


    )

}


export default VideoView;