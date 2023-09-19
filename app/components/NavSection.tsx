"use client";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars2 } from "react-icons/hi2";
import Image from "next/image";
import { useGlobalContext } from "../context/useGlobalContext";
import { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

const NavSection = () => {
  const { movieSearch, setMovieSearch } = useGlobalContext();
  const [hideOtherElementsInNavBar, setHideOtherElementsInNavBar] = useState<boolean>(false);

  const currentRoute = usePathname();
  const router = useRouter();

  const handleCheckRoute = () => {
    if (currentRoute === "/") {
      router.push("/movies")
    }
  }

  return (
    <nav className="flex items-center justify-around h-1/6">
      <div className={`flex items-center gap-6 ${hideOtherElementsInNavBar ? "hidden" : ""}`}>
        <Image src="./tv.svg" alt="logo" height="50" width="50" />
        <div className="text-white md:text-2xl text-xl">
          <h2><b>Movie Box</b></h2>
        </div>
      </div>
      <div className="text-white flex items-center justify-center md:relative md:w-2/6">
        <input type="text" className={`bg-transparent z-10 border-2 border-white rounded-lg h-10 w-full pl-4 pr-4 flex align-items justify-center text-white ${hideOtherElementsInNavBar ? "" : "hidden "}md:block`} placeholder="What do you want to watch ?" value={movieSearch} onChange={(e) => setMovieSearch(e.target.value)} onKeyDown={handleCheckRoute}/>
        <div className="absolute right-25 md:right-6 accessory-color md:bg-transparent h-8 w-8 md:h-0 flex items-center justify-center rounded-full cursor-pointer relative">
          {hideOtherElementsInNavBar ? <GiCancel /> : <BsSearch />}
          <div className="md:hidden absolute inset-0 w-full h-full bg-transparent rounded-full" onClick={() => setHideOtherElementsInNavBar(!hideOtherElementsInNavBar)}></div>
        </div>
      </div>
      <div className={`flex items-center justify-center gap-6 text-white ${hideOtherElementsInNavBar ? " hidden" : ""}`}>
        <h2 className="text-lg">Signin</h2>
        <div className="accessory-color h-8 w-8 flex items-center justify-center rounded-full">
          <HiOutlineBars2 />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
