import Link from "next/link";
import { topRatedType } from "../context/useGlobalContext";
import { calculateRatingPercentage } from "../customHooks/calculateRatings";
import { convertToPercentage } from "../customHooks/convertToPercentage";
import Image from "next/image";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useState } from "react";

type movieProps = {
  movie: topRatedType;
}

const Card: React.FC<movieProps> = ({ movie }) => {
  const [alertFavorite, setAlertFavourite] = useState<boolean>(false);

  const alertAddedtoFavourites = () => {
    setAlertFavourite(true)

    setTimeout(() => {
      setAlertFavourite(false)
    }, 3000)
  }
  return (
    <>
      <div className="h-4/5 relative text-gray-300">
        <Link href={`/movies/${movie.id}`}>
          <div className="h-full overflow-hidden">
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height="150" width="232" alt="movie poster" data-testid="movie-poster" />
          </div>
        </Link>
        <div className="h-8 w-8 absolute right-4 top-5 cursor-pointer favorite rounded-full flex items-center justify-center z-20" onClick={() => alertAddedtoFavourites()}>
          <div>
            <BsFillSuitHeartFill />
          </div>
        </div>
      </div>
      <div className="h-1/5">
        <small data-testid="movie-release-date">{movie.release_date}</small>
        <p data-testid="movie-title" className="text-sm"><b>{movie.original_title}</b></p>
        <div className="flex items-center justify-between">

          <div className="flex items-center justify-center gap-2">
            <Image alt="Movie Brand" src="./movieBrand.svg" width="30" height="30" />
            <small>{convertToPercentage(movie.vote_average)}/100</small>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Image alt="Rotten Tomatoes" src="./RottenTomatoes.svg" width="20" height="20" />
            <small>{calculateRatingPercentage(movie.vote_average, movie.vote_count)}%</small>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 top-1/2 transform z-30 transition-transform ease-in-out duration-300 ${alertFavorite ? "translate-x-0" : "translate-x-full"} bg-green-500 text-white px-4 py-2`}
      >Added to Favourite</div>

    </>
  )
}

export default Card;