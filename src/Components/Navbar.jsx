// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { chime, logo, pathIcon, videoIcon } from "../assets";
import { BiSearch } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { Link} from 'react-router-dom';

const Navbar = ({ dark, setDark, input, setInput }) => {
  console.log(input);
  return (
    <div className="w-full h-[70px] flex items-center justify-between">
      <div className=" flex h-full items-center justify-between w-full max-w-[1000px] pl-4">
        <FaBars />
        <img src={logo} alt="" />
        <div className="flex items-center justify-between bg-slate-100 px-2 w-[800px] h-[44px] rounded-3xl">
          <input
            className="border-none bg-transparent w-full h-full outline-none"
            type="text"
            placeholder="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <BiSearch />
        </div>
      </div>
      <div className="flex gap-[40px] pr-6 items-center justify-between">
        <img src={videoIcon} alt="" />
        <img src={pathIcon} alt="" />
        <img src={chime} alt="" />
        <CiDark size={30} color="grey" onClick={() => setDark(!dark)} />
        <Link to="/login"> <BsPersonCircle color="grey" size={30} /> </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
