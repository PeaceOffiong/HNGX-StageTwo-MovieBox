"use client";
import { useGlobalContext } from "./context/useGlobalContext";
import NavSection from "./components/NavSection";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  calculateRatingPercentage
} from "./customHooks/calculateRatings";
import { convertToPercentage } from "./customHooks/convertToPercentage";
import { AiFillPlayCircle } from "react-icons/ai";
import MovieList from "./components/MovieList";
import FooterSection from "./components/FooterSection";

export default function Home() {
  const { topRated, errorFetchingData } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [displayFetchError, setDisplayFetchError] = useState<boolean>(false)

  useEffect(() => {
    if (topRated && topRated.length > 0) {
      setLoading(false);
    } else if (!topRated || (topRated.length === 0 && errorFetchingData)) {
      setLoading(false);
      setDisplayFetchError(true);
    }
  }, [topRated, errorFetchingData]);

  if (loading) {
    return <h2>Loading ...</h2>
  }

  if (displayFetchError) {
    return (
      <h2 className="flex">Data failed to fetch from server, please ensure you're connected to a wifi</h2>
    )
  }
  return (
    <main>
      <section
        className="h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${topRated[topRated.length - 1].poster_path}")`,
        }}
      > 
        <NavSection />
        <aside className="text-white h-4/5 flex md:w-3/6 w-4/6 flex-col justify-center pl-16 gap-4 ">
          <h2 className="text-4xl">{topRated[topRated.length - 1].title}</h2>
          <div className="flex gap-2 h-8 justify-between md:w-2/5 w-4/5 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Image alt="Movie Brand" src="./movieBrand.svg" width="30" height="30" />
              <p>{convertToPercentage(topRated[topRated.length - 1].vote_average)}/100</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image alt="Rotten Tomatoes" src="./RottenTomatoes.svg" width="22" height="22" />
              <p>{calculateRatingPercentage(topRated[topRated.length - 1].vote_average, topRated[topRated.length - 1].vote_count)}%</p>
            </div>
          </div>
          <p className="md:w-4/5 w-full text-base">{topRated[topRated.length - 1].overview}</p>
          <button className="flex items-center justify-center accessory-color gap-2 text-white md:w-2/6 text-sm h-8">
            <AiFillPlayCircle />
            Watch Trailer</button>
        </aside>
      </section>

      <section className="w-full flex items-center justify-center gap-6 pt-10 px-4 sm:px-0">
        <MovieList />
      </section>
      <FooterSection/>
    </main>
  );
}
