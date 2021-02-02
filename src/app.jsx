import React, { useState, useEffect, useCallback } from 'react'
import VideoList from './components/video/videoList'

import './scss/app.scss';


const APIKEY = 'AIzaSyDQSEHKzs2p2us3I6RNFbfFa2Huq9kWqa0';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${APIKEY}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;