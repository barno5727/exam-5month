import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Subscriptions = () => {
  const [sVideos, setSvideos] = useState([]);
  const [videoDetails, setVideiDetails] = useState(null);

  const { id } = useParams();
  async function getVideoDetails() {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: {
        part: "contentDetails,snippet,statistics",
        id,
      },
      headers: {
        "X-RapidAPI-Key": "638fcab710mshde2accf36235df8p1d4c9ajsnbcf613a2e3f0",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setVideiDetails(response.data.items[0]);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(videoDetails);
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
  const fetchSuggestedVideos = async () => {
    try {
      const response = await axios.request(options);
      setSvideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSuggestedVideos();
    getVideoDetails();
  }, []);

  return (
    <div className="flex w-full h-auto items-start justify-between px-6 max-md:flex-col">
      <div className="w-full max-w-[900px] h-auto">
        <iframe
          className="w-full max-h-[500px] h-full min-h-[400px]"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <h1>{videoDetails?.snippet.title}</h1>
        <div>
          <div>{videoDetails?.statistics.viewCount} views</div>
          <div>
            <button>
              {+videoDetails?.statistics.likeCount > 1000
                ? `${videoDetails?.statistics.likeCount
                    .split("")
                    .slice(0, 3)
                    .join("")}k`
                : ``}
                
            </button>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[250px] ml-4">
        {sVideos.slice(0, 8).map((video) => (
          <Link to={`/playlist/vidio/${video.id.videoId}`}>
            <div>
              <img src={video.snippet.thumbnails.high.url} alt="" />
              <h1>{video.snippet.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
