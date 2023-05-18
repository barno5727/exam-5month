/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const Home = ({videos}) => {
  
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-5 px-4 pt-7 rounded">
      {!videos.length && <Loader />}
      {videos.map((video, inx) => (
        <div className="rounded" key={inx}>
          <img className="rounded" src={video.snippet.thumbnails.medium.url} alt="" />
          <h1>{video.snippet.channelTitle}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
