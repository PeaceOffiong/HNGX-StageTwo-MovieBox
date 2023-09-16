export const getDiscoverMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=edcc5c287f46064d8c993eb4a03ad87c`);

    if (!res.ok) throw new Error("failed to fetch movie")

    return res.json();
}