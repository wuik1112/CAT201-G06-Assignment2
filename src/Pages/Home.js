import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [mediaList, setMediaList] = useState([
    'cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpeg'
  ]);
  const [displayedMedia, setDisplayedMedia] = useState([]);

  useEffect(() => {
    // Initialize the displayed media on mount
    updateDisplayedMedia();
  }, []);

  useEffect(() => {
    // Set up the interval for changing media
    const intervalId = setInterval(() => {
      updateDisplayedMedia();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const updateDisplayedMedia = () => {
    setDisplayedMedia(() => {
      const startIndex = Math.floor(Math.random() * mediaList.length);
      const endIndex = startIndex + 3;
      const updatedMedia = [];

      for (let i = startIndex; i < endIndex; i++) {
        const indexToDisplay = i % mediaList.length;
        updatedMedia.push({
          src: process.env.PUBLIC_URL + mediaList[indexToDisplay],
          alt: `media-${indexToDisplay}`,
          index: indexToDisplay,
        });
      }

      return updatedMedia;
    });
  };

  const renderMediaBatch = () => {
    return displayedMedia.map((media, index) => (
      <img key={index} src={media.src} alt={media.alt} />
    ));
  };
  
  const services = [
    {
      title: 'Playful Moments',
      description: 'Immerse yourself in joyous playtime with our resident feline friends. Our specially curated cat toys guarantee endless fun and laughter!',
      image: 'play2.jpg'
    },
    {
      title: 'Purr-fect Photoshoots',
      description: 'Indulge in memorable moments with our charming cats. Capture the magic with our professional photoshoots. Check out snapshots from our satisfied customers, showcasing their purr-ecious memories on our walls!',
      image: 'customer2.jpg'
    },
    {
      title: 'Free Adoption',
      description: 'Embark on a heartwarming journey with our cats available for adoption. From the smallest kittens to majestic tigers, we believe in finding loving homes for every feline soul. Adopt a furry friend and change a life!',
      image: 'adopt.jpg'
    }
  ];

  return (
    <div className="home-container">
      <img src={process.env.PUBLIC_URL + 'Logo.png'} alt="Company Logo" className="company-logo" />
      <div className="company-name">MeowPuffy</div>
      <div className="company-background">
        <p>
          Welcome to the heart of Meow Puffy, where every purr and playful leap tells the tale of our feline-inspired haven. Established with a passion for creating a cozy retreat for cat enthusiasts, Meow Puffy is more than just a space; it's a vibrant community where tails wag, and whiskers twitch in joy. Our journey began with a simple desire—to weave a tapestry of love, laughter, and unforgettable moments, all centered around our whiskered companions. Today, we stand as a testament to the commitment of providing a warm, inviting atmosphere that echoes the cheerful melody of contented cats and delighted patrons. Join us in celebrating the magic of feline charm and embark on a delightful adventure in the heart of Meow Puffy!
        </p>
      </div>
      <div className="media-carousel">
        {renderMediaBatch()}
      </div>
      <div className="services-title">Our Services</div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <img src={service.image} alt={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
