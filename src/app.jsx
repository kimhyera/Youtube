import React, { useState, useEffect, useCallback } from 'react'
import SearchForm from './components/searchFom/searchForm';
import VideoList from './components/video/videoList'

import './scss/app.scss';


const APIKEY = 'AIzaSyDQSEHKzs2p2us3I6RNFbfFa2Huq9kWqa0';


function App() {
  const [videos, setVideos] = useState([]);

  //search
  //: query 라는 것을 받아와서 처리하는 함수이다.


  const search = query => {


    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${APIKEY}`, requestOptions)

      .then(response => response.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));

    console.log(videos);
  }

  // most popular

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







  return (
    <>


      <SearchForm onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;