"use client";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBars2 } from "react-icons/hi2";
import Image from "next/image";

const NavSection = () => {
  return (
    <nav className="flex items-center h-24">
      <div>
        <Image src="./tv.svg" alt="logo" height="50" width="50" />
        <h2 className="text-white flex items-center justify-center">
          Movie Box
        </h2>
      </div>
      <div>
        <input type="text" />
        <BsSearch />
      </div>
      <div>
        <h2>Signin</h2>
        <HiOutlineBars2 />
      </div>
    </nav>
  );
};

export default NavSection;
