import React, { useEffect, useState } from 'react';
import {InputGroup , FormControl , Button} from 'react-bootstrap'
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const [recipes , setRecipes ] = useState([]);
  const [search , setSearch] = useState('');
  const [query , setQuery] = useState('banana');

  
  useEffect(()=>{
    getRecipes()
  } , [query]);

  const getRecipes = async () =>{
    const response = 
        await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
          "x-rapidapi-key": "aebd329aa1msh25254e7b64cb924p1ef1a7jsn74885d3199ae"
        }
    });
    
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App container-fluid">
      <form className="mt-4" onSubmit={getSearch}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipie's name"
            aria-label="Recipie's name"
            aria-describedby="Recipie"
            onChange={updateSearch}
            value={search}
          />
          <InputGroup.Append>
            <Button variant="outline-primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4" style={{alignItems:"start" , justifyContent:'center'}}>
        {recipes.map((recipe , index)=>(
          <Recipe
            key={index} 
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
