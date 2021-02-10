import React from 'react';

import styles from './videoView.module.scss'




const VideoView = ({ video }) => {


    return (

        <>

            <div className={styles.iframebx}>
                <iframe width="560" height="315"//
                    type="text/html"//
                    title="youtube video player"//
                    src={`https://www.youtube.com/embed/${video.id}?&autoplay=1`}//
                    frameBorder="0"//
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>



            </div>

            <div className={styles.desbx} >
                <h2 className={styles.title}> {video.snippet.title}</h2>
                <h3 className={styles.channel_name}>

                    <a title="채널바로가기" href={`https://www.youtube.com/channel/${video.snippet.channelId}`} className={styles.channelurl}>
                        <i class="fas fa-user-circle"></i>

                        <span className={styles.name_span}>{video.snippet.channelTitle}</span></a></h3>

                <pre className={styles.des}>
                    {video.snippet.description}
                </pre>
            </div>
        </>


    )

}


export default VideoView;