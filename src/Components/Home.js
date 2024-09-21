import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from 'react-icons/fi';  // If you plan to use this

const Home = () => {
  return (
   <div className='home-container'>
    <Navbar />
    <div className='home-banner-container'>
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt='' />
      </div>
      <div className='home-banner-text'>
        <h1>Welcome to Our Store</h1>
        <p>Discover the best products here!</p>
        <button className='primary-button'>
          Shop Now <FiArrowRight />
        </button>
      </div>
      <div className='home-bannerImage'>
        <img src={BannerImage} alt='' />
      </div>
    </div>
   </div>
  );
};

export default Home;
