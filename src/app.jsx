import React, { useState, useEffect, useCallback } from 'react'
import VideoList from './components/videoList'

import './app.css';


const APIKEY = 'AIzaSyDQSEHKzs2p2us3I6RNFbfFa2Huq9kWqa0';


function App() {
  const [videos, setVideos] = useState([]);





  useEffect(() => {
    console.log('MOST POPULARS');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${APIKEY}`, requestOptions)


      .then((response) => response.text())
      .then((result) => setVideos(JSON.parse(result).items))
      .catch((error) => console.log('error', error));
  }, []);

  console.log(videos);



  return (
    <VideoList videos={videos} />
  )

}

export default App;
