import Link from 'next/link'
import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <>
            <Link href={`/movie/${movie.id}`}>
                <div
                    key={movie.id}
                    className="bg-gray-800 p-4 text-white rounded-md shadow-md"
                >
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                    <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                </div>
            </Link >
        </>
    )
}

export default MovieCard