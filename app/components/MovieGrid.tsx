import { topRatedType } from "../context/useGlobalContext";
import Card from "./Card";
 
interface MovieListType {
  movielist: topRatedType[];
  sliceNumber: number
}

const MovieGrid: React.FC<MovieListType> = ({movielist, sliceNumber}) => {
  return (
    <ul className="w-full autoflow grid-cols-2 md:grid-cols-4 place-items-center gap-12 h-auto ">
      {movielist.slice(0, sliceNumber).map((movie) => {
        return <li className="w-44 h-72" key={movie.id}>
          <Card movie={movie} data-testid="movie-card" />
        </li>
      })}
    </ul>
  )
}

export default MovieGrid;

