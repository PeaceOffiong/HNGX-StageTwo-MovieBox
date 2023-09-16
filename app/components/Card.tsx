import Link from "next/link";
import { topRatedType } from "../context/useGlobalContext";
import { calculateRatingPercentage } from "../customHooks/calculateRatings";
import { convertToPercentage } from "../customHooks/convertToPercentage";
import Image from "next/image";

type movieProps = {
  movie: topRatedType;
}

const Card: React.FC<movieProps> = ({ movie }) => {
  return (
    <>
      <Link href={`/movies/${movie.id}`}>
        <div className="h-4/5">
          <div className="h-full overflow-hidden">
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height="150" width="232" alt="movie poster" data-testid="movie-poster" />
          </div>
        </div>
        <div className="h-1/5">
          <small data-testid="movie-release-date">{movie.release_date}</small>
          <p data-testid="movie-title" className="text-sm"><b>{movie.original_title}</b></p>
          <div className="flex items-center justify-space-between">

            <div className="flex items-center justify-center gap-2">
              <Image alt="Movie Brand" src="./movieBrand.svg" width="30" height="30" />
              <small>{convertToPercentage(movie.vote_average)}/100</small>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image alt="Rotten Tomatoes" src="./RottenTomatoes.svg" width="22" height="22" />
              <small>{calculateRatingPercentage(movie.vote_average, movie.vote_count)}%</small>
            </div>
          </div>
        </div>
      </Link>   
    </>
  )
}

export default Card;