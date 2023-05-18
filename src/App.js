import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
// import YoutobeClone from './Components/YoutobeClone';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Subscriptions from "./Pages/Subscriptions";

function App() {
  const [dark, setDark] = useState(false);

  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState('');

  const [videos, setVideos] = useState([]);
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
  async function fetchVideos() {
    try {
      const response = await axios.request(options);
      setVideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchVideos();
  }, []);
  console.log(videos);

  // useEffect(() => {
  //  const filteredVideos = videos.filter(v => v.)
  // }, [input]);

  return (
    <div
      className={`w-full h-screen ${
        dark ? "dark:bg-black text-white" : "bg-white text-black"
      } `}>
      {/* <YoutobeClone    /> */}
      <Navbar input={input} setInput={setInput} dark={dark} setDark={setDark} />
      <div className="h-full w-full flex items-start  ">
        <Sidebar />
        <Routes className="rounded-md">
          <Route path="/" element={<Home videos={videos} />} />
          
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </div>
  );
}






export default App;
