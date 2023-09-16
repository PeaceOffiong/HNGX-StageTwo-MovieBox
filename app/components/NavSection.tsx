"use client";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars2 } from "react-icons/hi2";
import Image from "next/image";
import { useGlobalContext } from "../context/useGlobalContext";

const NavSection = () => {
  const { movieSearch, setMovieSearch } = useGlobalContext()
  console.log(movieSearch);
  return (
    <nav className="flex items-center justify-around h-1/6">
      <div className="flex items-center gap-6">
        <Image src="./tv.svg" alt="logo" height="50" width="50" />
        <div className="text-white md:text-2xl text-xl">
          <h2><b>Movie Box</b></h2>
        </div>
      </div>
      <div className="text-white flex items-center justify-center md:relative md:w-2/6">
        <input type="text" className="bg-transparent border-2 border-white rounded-lg h-10 w-full pl-4 pr-4 flex align-items justify-center text-white hidden md:block" placeholder="What do you want to watch" value={movieSearch} onChange={(e) => setMovieSearch(e.target.value)}/>
        <div className="absolute right-25 md:right-6 accessory-color md:bg-transparent h-8 w-8 md:h-0 flex items-center justify-center rounded-full cursor-pointer">
          <BsSearch />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 text-white">
        <h2 className="text-lg">Signin</h2>
        <div className="accessory-color h-8 w-8 flex items-center justify-center rounded-full">
          <HiOutlineBars2 />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
