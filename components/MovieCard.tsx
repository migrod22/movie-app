import { Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <>
            <Link key={movie.id} href={`/movie/${movie.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.release_date}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}

export default MovieCard