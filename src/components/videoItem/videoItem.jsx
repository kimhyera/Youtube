import React, { useEffect, memo } from 'react';
import styles from './videoItem.module.scss'




const VideoItem = memo(
    ({ video, video: { snippet }, onVideoClick, display }) => {


        const displayType = display === 'list' ? styles.list : styles.grid;




        return (
            <li onClick={() => onVideoClick(video)} className={`${styles.video} ${displayType}`}>
                <a href="#" className={styles.thumbnail}>

                    <div className={styles.video_cover}>
                        <img className={styles.video_img} src={snippet.thumbnails.medium.url} alt="" />

                    </div>
                    <div className={styles.video_details}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.des}>{snippet.channelTitle}</p>
                    </div>
                </a>
            </li >
        )




    }
)


export default VideoItem;