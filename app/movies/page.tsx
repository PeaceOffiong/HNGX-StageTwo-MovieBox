"use client";
import { getDiscoverMovies } from "../customHooks/getDiscoverMovies";
import NavSection from "../components/NavSection";
import MovieGrid from "../components/MovieGrid";
import { topRatedType } from "../context/useGlobalContext";


const page = async () => {
  try {
    const movieDataResponse = await getDiscoverMovies();
    const movieData: topRatedType[] = movieDataResponse.results;

    return (
      <>
        <section className="h-full bg-black p-6 text-white">
          <NavSection />
          <div className="w-full flex items-center justify-center gap-6 p-10">
            <MovieGrid movielist={movieData} sliceNumber={30} />
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <p>Error loading movie data.</p>;
  }
}


export default page;