import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({addRecipeToQueue}) => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('chefs.json')
        .then(res => res.json())
        .then(data => setCards(data))
    } ,[])

    return (
        <div className='md:w-2/3 border-2 rounded-xl'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                cards.map(recipe => <Recipe 
                    key={recipe.id} 
                    recipe={recipe}
                    addRecipeToQueue={addRecipeToQueue}
                    ></Recipe>)
            }
            </div>
            
        </div>
    );
};

Recipes.propTypes = {
    props: PropTypes.object,
    addRecipeToQueue: PropTypes.object
};

export default Recipes;