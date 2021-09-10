// Want to use an api, will need to use states
// useState holds information that we get from the api
// useEffect runs the fetch call from the website with the api when component mounts
import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  {/* use useEffect function to run fetchItems */}
  useEffect (() => {
    {/* square brackets means function only runs when component runs */}
    fetchItems();
  },[])

  {/* Want to create state to place items in */}
  const [items, setItems] = useState({});

  {/* Create a fetch call function */}
  {/* use asyn because coming from database */}
  const fetchItems = async () => {
    const data = await fetch ('https://fortnite-api.theapinetwork.com/items/list');
    
    {/* Convert items in JSON */}
    const items = await data.json();
    console.log(items.item);
    setItems(items.item);
  }

  return (
    <div>
      {items.map(item => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;
