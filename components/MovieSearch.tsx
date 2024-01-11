import React, { useRef, useState } from 'react'
import { searchMovie } from '../pages/api/services';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export default function MovieSearch({ searchQuery, setSearchQuery }) {
    const inputRef = useRef(null);
    const router = useRouter()

    const dispatch = useDispatch();

    const getMovies = async () => {
        try {
            const moviesData = await searchMovie(searchQuery);
            dispatch({
                type: 'SET_MOVIES',
                payload: moviesData,
            });
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    const submitSearch = async () => {
        router.push(`/search/${searchQuery}`)
        getMovies()
    }

    const resetSearch = () => {
        setSearchQuery("")
    }

    return (
        <>
            <div className="flex mb-2">
                <input
                    type="text"
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search movie"
                    className="border border-gray-300 p-2 mb-4 py-2 px-4 rounded-md mr-2"
                />

                <button
                    onClick={submitSearch}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
                >
                    Search
                </button>
                <button
                    onClick={resetSearch}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Reset
                </button>
            </div>
        </>
    )
}
