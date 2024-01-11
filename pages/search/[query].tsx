import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { searchMovie } from '../api/services';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../components/helpers/interfaces';
import MovieCard from '../../components/MovieCard';

export default function SearchResults() {

    const [numberMovies, setNumberMovies] = useState(5)
    const router = useRouter()
    const { query } = router.query
    const dispatch = useDispatch();

    const { loading, movies } = useSelector(
        (state: RootState) => state.movies
    );

    const getMovies = async () => {
        try {
            const moviesData = await searchMovie(query);
            console.log('moviesData', moviesData)
            dispatch({
                type: 'SET_MOVIES',
                payload: moviesData,
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    useEffect(() => {
        getMovies()
    }, [query])


    const loadMore = () => {
        setNumberMovies(numberMovies + 5)
    }

    return (
        <>
            {loading ? (
                <p className="text-gray-600">Loading movies</p>
            ) : (
                <>
                    <p className="text-green-500">Search results:</p>
                    <div className='<div className="container mx-auto mt-8">'>
                        <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

                            {movies?.results?.slice(0, numberMovies).map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}

                        </div>
                        <button
                            className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={loadMore}
                        >
                            Load more
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
