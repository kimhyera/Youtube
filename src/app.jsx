import React, { useState, useEffect, useCallback } from 'react'
import VideoList from './components/videoList'

import './css/app.css';


const APIKEY = 'AIzaSyDQSEHKzs2p2us3I6RNFbfFa2Huq9kWqa0';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('video list');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${APIKEY}`, requestOptions)


      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  console.log(videos);



  return (
    <VideoList videos={videos} />
  )

}

export default App;
