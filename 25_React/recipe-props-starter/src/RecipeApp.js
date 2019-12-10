import React from 'react';
import Navbar from './Navbar';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
