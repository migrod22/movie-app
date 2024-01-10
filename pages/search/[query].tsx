import React from 'react'
import { useRouter } from "next/router";
import { searchMovie } from '../api/services';
import { useSelector } from 'react-redux';

interface RootState {
    movies: {
        loading: boolean;
        movies: [];
    };
}

export default function SearchResults() {

    const router = useRouter()

    const { query } = router.query

    console.log('query', query)

    const { loading, movies } = useSelector(
        (state: RootState) => state.movies
    );


    // TODO
    return (
        <>{query}</>
    )
}
