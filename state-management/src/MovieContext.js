import React, {useState, createContext} from 'react'

// to initiate context use createContext
// exporting 2 things: moviecontext and movieprovider
// whenever want to use information from movies, just import moviecontext
// movieprovider just provide information for different components (will need to wrap this around everything that wants the data)
// import MovieContext so these things can be used
export const MovieContext = createContext();

// now can import MovieProvider to anything that needs movie info and wrap stuff with it
// MovieProvider job is to hold information and pass it down to all desired components
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ]);
    
    {/* allows anything wrapped in b/w these to render information */}
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>)
    
}

export default MovieContext
