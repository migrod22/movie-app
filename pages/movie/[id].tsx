import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../api/services"

const ID = () => {
    const router = useRouter()
    const { id } = router.query
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        const getMovieDetails = async (movie_id) => {
            try {
                const movie_data = await fetchMovieDetails(movie_id)
                setMovieDetail(movie_data)
            } catch (error) {
                console.error('Error fetching movie detail:', error);
            }

        }
        getMovieDetails(id)
    }, [id])

    console.log('movieDetail', movieDetail)

    return (
        <>
            {
                movieDetail ? (
                    <div className="p-20 bg-gray-900 min-h-screen flex flex-col items-center justify-start h-full w-full">
                        <div className="text-white text-center w-full">
                            <h1 className="text-3xl font-semibold mb-4">{movieDetail.title}</h1>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
                                alt={movieDetail.title}
                                className="mx-auto mb-4 rounded-md"
                            />
                            <p className="text-lg mb-4">{movieDetail.overview}</p>
                            <div className="flex flex-col items-center">
                                <p className="text-sm mb-2">Release Date: {movieDetail.release_date}</p>
                                <p className="text-sm">Vote Average: {movieDetail.vote_average}</p>
                            </div>
                        </div>
                    </div>

                ) : null
            }
        </>
    )
}
export default ID
