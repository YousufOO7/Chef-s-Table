import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes/Ourrecipes';
import Recipes from './components/Recipes/Recipes';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';

const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [cookRecipe, setCookRecipe] = useState([]);


  // want to cook handel
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.id == recipe.id
    )
    if(!isExist){
      const newRecipeQueue = [...recipeQueue, recipe];
    setRecipeQueue(newRecipeQueue)
    }
    else{
      alert('this recipe already exist')
    }
  }

  // removing handel
  const handelRemove = id => {
    const deleteRecipe = recipeQueue.find(recipe => recipe.id === id);

    const addCookItem = recipeQueue.filter(recipe => recipe.id !== id);
    setRecipeQueue(addCookItem);
    setCookRecipe([...cookRecipe, deleteRecipe]);
  }
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner */}
      <Banner></Banner>

      {/* OurRecipes */}
      <OurRecipes></OurRecipes>
      
      {/* Recipes card section */}
      <section className='flex flex-col md:flex-row gap-5 md: w-11/12 mx-auto py-5'>
        {/* cards section */}
          <Recipes 
          addRecipeToQueue={addRecipeToQueue}
          ></Recipes>
        {/* sidebar section */}
        <Sidebar
        recipeQueue={recipeQueue}
        cookRecipe={cookRecipe}
        handelRemove={handelRemove}
        ></Sidebar>
      </section>
    </div>
  );
};

App.propTypes = {
  props: PropTypes.func
};

export default App;