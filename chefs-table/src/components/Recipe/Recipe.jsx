import PropTypes from 'prop-types';

const Recipe = ({recipe, addRecipeToQueue}) => {
    const {image_link, title, text, ingredients, cooking_time, calories} = recipe;
    return (
             <div className="card card-compact bg-base-100 shadow-xl p-3">
  <figure>
    <img
    className='h-[300px] bg-cover rounded-xl w-full'
      src={image_link}
      alt="Recipes card" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xs text-gray-500'>{text}</p>
    <br />
    <h3 className='text-lg'>Ingredients: {ingredients.length}</h3>
    <ul>
        {
            ingredients.map((item, idx) => <li key={idx}>{item}</li>)
        }
    </ul>
    <br />
    <div className='flex'>
        <p>{cooking_time}</p>
        <p>{calories} Calories</p>
    </div>
    <div className="card-actions">
      <button
      onClick={() => addRecipeToQueue(recipe)}
      className="btn btn-xl rounded-full bg-[#0BE58A] text-black"
      >Want to cook</button>
    </div>
  </div>
</div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    addRecipeToQueue: PropTypes.object
};

export default Recipe;