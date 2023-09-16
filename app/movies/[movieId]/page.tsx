"use client";

import { getMovie } from "@/app/customHooks/getMovie";
import Image from "next/image";

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

export interface movieType {
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


const page: React.FC<PageProps> = async ({ params: { movieId } }) => {

    function convertRuntime(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        if (hours === 0) {
            return `${remainingMinutes} minutes`;
        } else if (remainingMinutes === 0) {
            return `${hours} hours`;
        } else {
            return `${hours} hours ${remainingMinutes} minutes`;
        }
    }

    function convertToUTC(releaseDate: string): string {
        const dateParts = releaseDate.split('-').map(Number);

        if (dateParts.length !== 3) {
            throw new Error('Invalid date format. Expected YYYY-MM-DD.');
        }

        const [year, month, day] = dateParts;
        const utcDate = new Date(Date.UTC(year, month - 1, day));

        return utcDate.toISOString();
    }


    try {
        const movieData = await getMovie(movieId)
        console.log(movieData);
        return (
            <main className="flex w-full">
                <section className="">
                    <div className="flex items-center gap-6">
                        <Image src="./tv.svg" alt="logo" height="50" width="50" />
                        <div className="text-white md:text-2xl text-xl">
                            <h2><b>Movie Box</b></h2>
                        </div>
                    </div>
                    <div className="h-5 w-full flex items-center justify-center">
                        <div><p>Home</p></div>
                        <div><p>TV series</p></div>
                        <div><p>Upcoming</p></div>
                    </div>
                    <div><p>Play movie quizes
                        and earn
                        free tickets</p>
                        <button>Start Playing</button>
                    </div>
                    <div>
                        <p>LogOut</p>
                    </div>
                </section>
                <section>
                    <div><video src=""></video></div>
                    <div>
                        <p data-testid="movie-title">
                            { movieData.title}
                        </p>
                        <p data-test="movie-release-date">
                            {convertToUTC(movieData.release_date)}
                        </p>
                        <p data-testid="movie-runtime">{ convertRuntime(movieData.runtime)}</p>
                    </div>
                    <div>
                        <p data-test="movie-overview">{ movieData.overview}</p>
                    </div>
                </section>
            </main>
        )
        
    } catch (error) {
        console.error("Error fetching movie data:", error);
        return <p>Error loading movie.</p>;
    }
}

export default page;