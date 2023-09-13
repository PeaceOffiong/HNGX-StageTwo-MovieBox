"use client";
import Image from "next/image";
import { useGlobalContext } from "./context/useGlobalContext";


export default function Home() {
  const { topRated } = useGlobalContext();
  return (
    <main>
      <nav>
        <div>
          <Image src="./tv.svg" alt="logo" height="100" width="100" />
          <h2>Movie Box</h2>
        </div>
        <div>
          <input type="text" />
          <BsSearch/>
        </div>
        <div></div>
      </nav>
      <section></section>
    </main>
  );
}
