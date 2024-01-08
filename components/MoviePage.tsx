import React from 'react'

const MoviePage = ({ movie }) => {

    console.log('movie', movie)
    return (
        <>
            <ul>
                <li> {movie.title}</li>
            </ul>

        </>
    )
}

export default MoviePage