import React from 'react';

import styles from './videoView.module.scss'
const VideoView = ({ video }) => {
    return (

        <>

            <div className={styles.iframebx}>
                <iframe width="560" height="315"//
                    src={`https://www.youtube.com/embed/${video.id}?&autoplay=1`} frameborder="0"//
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



            </div>

            <div className={styles.desbx} >
                <h2> {video.snippet.title}</h2>
                <h3> {video.snippet.channelTitle}</h3>

                <pre className={styles.des}>
                    {video.snippet.description}
                </pre>
            </div>
        </>


    )

}


export default VideoView;