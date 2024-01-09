import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchMovies = async () => {
    try {
        const response = await api.get('/movie/popular', {
            params: {
                language: "en-US",
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting movies:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (id) => {
    if (id) {
        try {
            const response = await api.get(`movie/${id}`, {
                params: {
                    language: "en-US",
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error getting the movie details:', error);
            throw error;
        }
    }
};
