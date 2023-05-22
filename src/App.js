import { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
// import YoutobeClone from './Components/YoutobeClone';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Subscriptions from "./Pages/Subscriptions";
import Welcome from './Components/Welcome';
import Login from './Components/SignIn/Login';
import Register from './Components/SignUp/Register'
import { AuthProvider } from "./Auth";
import PrivateRoute from "./Components/PrivateRout";
import Trending from "./Pages/Trending";

function App() {
  const [dark, setDark] = useState(false);

  // const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState("");
  const [sidebar, setSidebar] = useState(false)
  const [videos, setVideos] = useState([]);
  
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      part: "snippet",
      videoId: "M7FIvfx5J10",
    },
    headers: {
      "X-RapidAPI-Key": "638fcab710mshde2accf36235df8p1d4c9ajsnbcf613a2e3f0",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      setVideos(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  // console.log(input);

  // useEffect(() => {
  //  const filteredVideos = videos.filter(v => v.snippet.title.toLowerCase().includes(input.toLowerCase()))
  //  console.log(filteredVideos)
  // }, [input,videos]);

  return (
    <BrowserRouter>
      <div
        className={`w-full h-screen ${
          dark ? "dark:bg-black text-white" : "bg-white text-black"
        } `}>
        {/* <YoutobeClone    /> */}
        <Navbar
          input={input}
          setInput={setInput}
          dark={dark}
          setDark={setDark}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
        <div className="h-full w-full flex items-start  ">
          <Sidebar  sidebar={sidebar}
          setSidebar={setSidebar} />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/playlist/vidio/:id" element={<Subscriptions />} />
         
          
            
              
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
           
          
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
