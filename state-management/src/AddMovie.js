import React, {useState, useContext} from "react";
import {MovieContext} from "./MovieContext";

// need to update movie context and have access to movies using setMovies

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        // the input's text
        setName(e.target.value);
    }
    const updatePrice = e => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        // preMovies will make a copy of our array objects
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}]);
    };

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;