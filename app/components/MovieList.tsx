import { FaGreaterThan } from "react-icons/fa"
import { useGlobalContext } from "../context/useGlobalContext"
import MovieGrid from "./MovieGrid";
import Link from "next/link";

const MovieList = () => {
  const { topRated } = useGlobalContext();
  return (
    <>
      <div className="w-full md:w-5/6 flex items-center justify-center h-auto flex-col gap-6">
        <div className="flex justify-between w-full px-4 sm:px-0">
          <h2 className="text-2xl"><b>Featured Movie</b></h2>
          <div className="accessory-text flex items-center justify-center gap-2 text-sm cursor-pointer">
            <Link href="/movies">
              <p >See more</p>
            </Link>
            <FaGreaterThan />
          </div>
        </div>

        <MovieGrid movielist={ topRated }  sliceNumber={10}/>
      </div>
    </>
  )
}

export default MovieList;