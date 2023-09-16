
export const getMoviebySearch = async (movieNameSearch: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieNameSearch}&api_key=edcc5c287f46064d8c993eb4a03ad87c`)

    if (!res.ok) throw new Error("failed to fetch movie")

    return res.json();
}
