"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AppProviderProps = {
  children: ReactNode;
};

type contextValue = {
  topRated: topRatedType[];
  setTopRated: Dispatch<SetStateAction<topRatedType[]>>;
  errorFetchingData: boolean;
  movieSearch: string;
  setMovieSearch: Dispatch<SetStateAction<string>>;
};

export interface topRatedType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const AppContext = createContext<contextValue>({
  topRated: [],
  setTopRated: (): void => { },
  errorFetchingData: false,
  movieSearch: "",
  setMovieSearch: (): void => { }
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [topRated, setTopRated] = useState<topRatedType[]>([]);
  const [errorFetchingData, setErrorFetchingData] = useState<boolean>(false)
  const [movieSearch, setMovieSearch] = useState<string>("");

  const fetchTopRated = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=edcc5c287f46064d8c993eb4a03ad87c`
      );
      const data = await response.json();
      setTopRated(data.results);
    } catch (error) {
      setErrorFetchingData(true);
      console.log("there is an error fetching data")
    }
  };

  console.log(topRated);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const contextValue: contextValue = {
    topRated,
    setTopRated,
    errorFetchingData,
    setMovieSearch,
    movieSearch
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
