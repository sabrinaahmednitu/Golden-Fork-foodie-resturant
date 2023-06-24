import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FoodForDay from '../FoodForDay/FoodForDay.js/FoodForDay';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodForDay></FoodForDay>
            <Blog></Blog>
        </div>
    );
};

export default Home;