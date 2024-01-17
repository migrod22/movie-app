import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../pages/api/services';
import MovieCard from './MovieCard';
import MovieSearch from './MovieSearch';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './helpers/interfaces';

const MoviesList = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")

    const { loading, movies } = useSelector(
        (state: RootState) => state.movies
    );
    const dispatch = useDispatch();

    const getMovies = async () => {
        try {
            const moviesData = await fetchMovies();
            dispatch({
                type: 'SET_MOVIES',
                payload: moviesData,
            });
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
            <MovieSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {loading ?
                <p>Loading movies...</p>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
                    {movies?.results?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            }
        </div>
    );
};

export default MoviesList;
