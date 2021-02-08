import React, { useState, useEffect, useCallback } from 'react'
import SearchForm from './components/searchFom/searchForm';
import VideoList from './components/video/videoList'
import VideoView from './components/video/videoView';

import './scss/app.scss';




function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);


  const selectVideo = (video) => {
    setSelectedVideo(video)

    console.log(video);
  }

  //search
  //: query 라는 것을 받아와서 처리하는 함수이다.


  const search = query => {
    youtube.search(query)//
      .then(videos => setVideos(videos))



  }

  // most popular

  useEffect(() => {
    youtube.mostPopular()//

      .then(videos => setVideos(videos))

  }, []);







  return (
    <>


      <SearchForm onSearch={search} />


      <div className="video-container">
        <div className="video-view-wrap">{
          selectedVideo && <VideoView video={selectedVideo} />
        }</div>
        <div className="video-list-wrap">
          <VideoList videos={videos} onVideoClick={selectVideo} /></div>
      </div>
    </>
  );
}

export default App;