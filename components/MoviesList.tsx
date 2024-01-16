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
                <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
                    {movies?.results?.map((movie) => (
                        <div className='col-span-1 flex flex-col bg-white border-2 p-4'>
                            <MovieCard key={movie.id} movie={movie} />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default MoviesList;
