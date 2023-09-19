"use client";

import { useEffect, useState } from "react";
import { getDiscoverMovies } from "../customHooks/getDiscoverMovies";
import NavSection from "../components/NavSection";
import MovieGrid from "../components/MovieGrid";
import { topRatedType } from "../context/useGlobalContext";
import { useGlobalContext } from "../context/useGlobalContext";
import { getMoviebySearch } from "../customHooks/getMoviebySearch";

const MovieSearchPage = () => {
  const { movieSearch, setMovieSearch } = useGlobalContext();
  const [discoveryMovieData, setDiscoveryMovieData] = useState<topRatedType[]>([]);
  const [searchMoviesData, setSearchMoviesData] = useState<topRatedType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDataResponse = await getDiscoverMovies();
        const searchDataResponse = await getMoviebySearch(movieSearch);
        const discoveryMovies = movieDataResponse.results;
        const searchMovies = searchDataResponse.results;

        setDiscoveryMovieData(discoveryMovies);
        setSearchMoviesData(searchMovies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [movieSearch]); // Run the effect when movieSearch changes

  return (
    <>
      <section className="h-full bg-black md:p-6 pt-6 pb-6 pr-2 pl-2 text-white">
        <NavSection />
        <div className="w-full flex items-center justify-center gap-6 p-6 sm:p-10 ">
          <MovieGrid movielist={searchMoviesData.length <= 0 ? discoveryMovieData : searchMoviesData} sliceNumber={30} />
        </div>
      </section>
    </>
  );
};

export default MovieSearchPage;
