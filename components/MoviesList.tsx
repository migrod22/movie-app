import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../pages/api/services';
import MoviePage from './MoviePage';

const MoviesList = () => {
    const [movies, setMovies] = useState(null)


    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesData = await fetchMovies();
                console.log('moviesData', moviesData)
                setMovies(moviesData)
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        getMovies()
    }, [])

    console.log('movies', movies?.results)

    return (
        <>
            {movies?.results?.map((movie) => (
                <MoviePage movie={movie} />
            ))}
        </>


    )
}

export default MoviesList