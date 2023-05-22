/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import Loader from "../Components/Loader";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [videos, setVideos] = useState(null);

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "638fcab710mshde2accf36235df8p1d4c9ajsnbcf613a2e3f0",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      const videos = data.items.map((video, inx) => {
        return (
          <NavLink key={inx} to={`/playlist/vidio/${video.id.videoId}`}>
            <div className="rounded" key={inx}>
              <img
                className="rounded-[10px]"
                src={video.snippet.thumbnails.medium.url}
                alt=""
              />

              <h1>{video.snippet.channelTitle}</h1>
            </div>
          </NavLink>
        );
      });

      setVideos(videos);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(videos);

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-5 px-4 pt-7  rounded max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {/* {!videos.length && <Loader />} */}
      {videos}
    </div>
  );
};

export default Home;
