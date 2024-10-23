import PropTypes from 'prop-types';
const Banner = () => {
    return (
       <section className='md: w-10/12 mx-auto py-5'>
         <div
        className=" h-full md:w-full bg-cover bg-no-repeat rounded-xl mb-10 md:h-[35.5rem]  bg-gray-600 bg-blend-overlay"
        style={{
          backgroundImage: "url(https://img.freepik.com/premium-photo/chef-is-cutting-up-food-plate-with-knife_14117-11047.jpg)",
        }}>

        <div className='text-center p-4 pt-28 space-y-8'>
            <h1 className='text-white text-5xl'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-gray-300 text-lg w-4/6 mx-auto">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

            <div className='flex justify-center space-x-2'>
                <button className='btn btn-lg rounded-full bg-[#0BE58A] text-black'>Explore Now</button>
                <button className='btn btn-lg rounded-full hover:bg-[#0BE58A] text-black'>Our Feedback</button>
            </div>
        </div>

        </div> 
       </section>   
    );
};

Banner.propTypes = {
    props: PropTypes
};

export default Banner;