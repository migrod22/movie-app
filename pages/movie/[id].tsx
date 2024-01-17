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

    const backPage = () => {
        window.history.back()
    }

    return (
        <div className="bg-white-400">
            {
                movieDetail ? (
                    <>
                        <div className="p-20 bg-gray-900 min-h-screen flex flex-col items-center justify-start h-full w-full">
                            <div className="bg-gray-400 text-white w-full">
                                <h1 className="text-center text-3xl font-semibold mb-4">{movieDetail.title}</h1>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
                                    alt={movieDetail.title}
                                    className="mx-auto mb-4 rounded-md"
                                />
                                <p className="text-lg mb-4">{movieDetail.overview}</p>
                                <div className="flex flex-col items-center">
                                    <p className="text-sm mb-2">Release Date: {movieDetail.release_date}</p>
                                    <p className="text-sm">Vote Average: {movieDetail.vote_average}</p>
                                    <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2" onClick={backPage}>Back</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null
            }
        </div>
    )
}
export default ID
