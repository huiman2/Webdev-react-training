// importing useContext so you can use the context
import React, { useState, useContext } from "react";
import Movie from "./Movie";
// imported the Context to this component
import MovieContext from "./MovieContext";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
    );
};

export default MovieList;