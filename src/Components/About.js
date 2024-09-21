import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFill0CircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt='About Background' />
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt='About Background Image' />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>
          Food is an important part of everyone's life.
        </h1>
        <p className='primary-text'>
          If you want to know more about food, you should read this book.
          Lorem ipsum...
        </p>
        <p className='primary-text'>
          Food is an important part of everyone's life. If you want to know more about food, you should read this book.
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More</button>
          <button className='watch-video-button'>
            <BsFill0CircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
