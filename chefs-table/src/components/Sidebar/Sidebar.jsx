import PropTypes from 'prop-types';

const Sidebar = ({recipeQueue, cookRecipe, handelRemove}) => {
    // const {title, cooking_time, calories} = recipeQueue;
    return (
        <div className='md:w-1/3 border-2 rounded-xl'>
            <div className='text-center py-2'>
                <h2 className="text-2xl font-bold">Want to Cook {recipeQueue.length}</h2>
                <div><hr className='border mt-2 w-4/5 mx-auto' /></div>
                {/* cook table */}
                <div className="overflow-hidden">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calorie</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQueue.map((item, idx) => 
            <tr className="hover" key={idx}>
        <th>{idx + 1}</th>
        <td>{item.title}</td>
        <td>{item.cooking_time}</td>
        <td>{item.calories}</td>
        <td><button 
        onClick={() => handelRemove(item.id)}
        className='rounded-full bg-[#0BE58A] text-black text-sm btn'>Preparing</button></td>
      </tr>
        )
      }
    </tbody>
  </table>
</div>

            {/* currently cook */}

            <h2 className="text-2xl font-bold mt-5">Currently Cooking: {cookRecipe.length}</h2>
                <div><hr className='border mt-2 w-4/5 mx-auto' /></div>

                <div className="overflow-hidden">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calorie</th>
      </tr>
    </thead>
    <tbody>
      {
        cookRecipe.map((item, idx) => 
            <tr className="hover" key={idx}>
        <th>{idx + 1}</th>
        <td>{item.title}</td>
        <td>{item.cooking_time}</td>
        <td>{item.calories}</td>
      </tr>
        )
      }
    </tbody>
  </table>
</div>

            </div>
        </div>
    );
};

Sidebar.propTypes = {
    sidebar: PropTypes.object,
    recipeQueue: PropTypes.object,
    cookRecipe: PropTypes.object,
    handelRemove: PropTypes.object
};

export default Sidebar;