import { configureStore } from '@reduxjs/toolkit'

const moviesReducer = (state = { movies: [], loading: true }, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload, loading: false }
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
})

export default store
