"use client";

import { getMovie } from "@/app/customHooks/getMovie";

interface PageProps {
    params: { movieId: string }
}

interface genreType {
    id: number,
    name: string,
}

interface productionCompaniesType{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

interface productionCountriesType{
    iso_3166_1: string,
    name: string
}

interface spokenLanguagesType{
    english_name: string,
    iso_639_1: string,
    name: string
}

interface movieType {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string,
    },
    budget: number
    genres: genreType[]
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: 94.109,
    poster_path: string,
    production_companies: productionCompaniesType[],
    production_countries: productionCountriesType[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: spokenLanguagesType[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


const page: React.FC<PageProps> = async ({ params: {movieId} }) => {
    const movieData: Promise<movieType> = getMovie(movieId)
    console.log(movieData);
    return (
        <>{movieId}</>
    )
}

export default page;