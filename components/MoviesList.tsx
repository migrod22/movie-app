import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../pages/api/services';
import MovieCard from './MovieCard';
import MovieSearch from './MovieSearch';

const MoviesList = () => {
    const [movies, setMovies] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState<string>("")

    const getMovies = async () => {
        try {
            const moviesData = await fetchMovies();
            setMovies(moviesData);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if (!searchQuery) {
            getMovies()
        }
    }, [searchQuery])


    return (
        <div className="container mx-auto mt-8">
            <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} setMovies={setMovies} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {movies?.results.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
