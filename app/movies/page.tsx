import NavSection from "../components/NavSection";
import MovieGrid from "../components/MovieGrid";
import { getDiscoverMovies } from "../customHooks/getDiscoverMovies";

const movies = () => {
  const discoverMovies = getDiscoverMovies()
  console.log(discoverMovies);
  return (
    <div>
      <NavSection />
      {/* <MovieGrid movielist={topRated} sliceNumber={10} /> */}
    </div>
  )
}

export default movies;