import "./YoutubeCloneCss.css";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "638fcab710mshde2accf36235df8p1d4c9ajsnbcf613a2e3f0",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
