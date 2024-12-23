/* Cats.js */

import React, { useState, useEffect } from 'react';
import './Cats.css';

const CatCard = ({ cat }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCatHover = () => {
    setIsHovered(true);
  };

  const handleCatLeave = () => {
    setIsHovered(false);
  };

  const handleCatClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`cat-container ${isHovered ? 'hovered' : ''} ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleCatHover}
      onMouseLeave={handleCatLeave}
      onClick={handleCatClick}
    >
      <img className="cat-image" src={cat.imageUrl} alt={cat.name} />
      <div className="cat-info">
        <h3>{cat.name}</h3>
        {isExpanded && (
          <div className="cat-details">
            <p>Breed: {cat.breed}</p>
            <p>Age: {cat.age} years old</p>
            <p>Weight: {cat.weight}</p>
            <p>Remarks: {cat.remarks}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CatDiets = () => {
  const dietsData = [
    {
      title: 'Standard Diet',
      description: 'Our cats are provided with a balanced diet of high-quality cat food.',
    },
    {
      title: 'Feeding Schedule',
      description: 'We feed our cats three times a day: morning, afternoon, and evening.',
    },
  ];

  return (
    <div className="cat-diets-container">
      <h2 className="diets-title">Cat Diets</h2>
      <div className="diets-list">
        {dietsData.map((diet, index) => (
          <div key={index} className="diet-item">
            <h3>{diet.title}</h3>
            <p>{diet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MerchItem = ({ merch, isExpanded, onMerchClick }) => {
  return (
    <div className={`merch-item ${isExpanded ? 'expanded' : ''}`} onClick={onMerchClick}>
      <img src={merch.imageUrl} alt={merch.name} />
      <div className="merch-info">
        <h3>{merch.name}</h3>
        <p>Price: RM{merch.price}</p>
        {isExpanded && <p className="merch-description">{merch.description}</p>}
      </div>
    </div>
  );
};

const Merch = () => {
  const [expandedMerchId, setExpandedMerchId] = useState(null);

  const handleMerchClick = (merchId) => {
    setExpandedMerchId(merchId === expandedMerchId ? null : merchId);
  };

  const merchData = [
    {
      id: 1,
      name: 'T-shirt',
      price: 30.00,
      imageUrl: require('./Tshirt.png'),
      description: 'A stylish and comfortable T-shirt for cat lovers. Get T-shirt of your favourite cats from our cafe! Came with the size XXS until XXL',
    },
    {
      id: 2,
      name: 'Totebag',
      price: 19.00,
      imageUrl: require('./Totebag.png'),
      description: 'Get one of our totebags with beautiful artworks of our beloved cats! It came with two different colour: Black and White. They could match almost any outfits!',
    },
    {
      id: 3,
      name: 'Keychain',
      price: 5.00,
      imageUrl: require('./Keychain.png'),
      description: 'Want to get something as a memento of the cats? Buy our miniature adorable plush keychain of our cats! There are 8 of them (One of each cats!)',
    },
    {
      id: 4,
      name: 'Photocard',
      price: 7.00,
      imageUrl: require('./Photo.png'),
      description: 'Get a professionally-taken pictures of you and cats of your choice! We will take staged and also candid pictures of you and the cats for you to bring home!',
    },
  ];

  return (
    <div className="merch-container">
      <h2 className="merch-title">Our Merchandise</h2>
      <div className="merch-row">
        {merchData.map((merchItem) => (
          <MerchItem
            key={merchItem.id}
            merch={merchItem}
            isExpanded={merchItem.id === expandedMerchId}
            onMerchClick={() => handleMerchClick(merchItem.id)}
          />
        ))}
      </div>
    </div>
  );
};


const Cats = () => {
  const catData = [
    {
        id: 1,
        name: 'Admiral Turbo Meowington',
        age: 5,
        breed: 'Munchkin',
        weight: '7.76kg',
        remarks: 'Mr Meowington is infamous for his speed. Once, he broke one of our precious vast due to his speed. We sent him to the hospital afterward to only being told he is "too fat" by the doctor.',
        imageUrl: require('./Admiral Turbo Meowington.png'),
    },
    {
        id: 2,
        name: 'Chicken Soup',
        age: 7,
        breed: 'Unknown',
        weight: '5.53kg',
        remarks: 'The oldest and sweetest cat in our establishment, Ms Chicken Soup. She would chill with you all day but will never hesitates to give you the "skipitty pap" if you annoys her.',
        imageUrl: require('./Chicken Soup.png'),
    },
    {
        id: 3,
        name: 'Jailbreaker',
        age: 3,
        breed: 'Scottish Fold',
        weight: '6.50kg',
        remarks: 'Mr Jailbreaker had acquire his name due to all his successful escape streak from the cage everytime he had a time out.',
        imageUrl: require('./Jailbreaker.png'),
    },
    {
        id: 4,
        name: 'Meatward',
        age: 2,
        breed: 'Unknown',
        weight: '4.78kg',
        remarks: 'An inspirational and dedicated menace. Thats what we would describe her. She does not care about the law. Ms Meatward is above the law.',
        imageUrl: require('./Mr Meatward.png'), 
    },
    {
        id: 5,
        name: 'Splaat',
        age: 4,
        breed: 'Unknown',
        weight: '5.33kg',
        remarks: 'One of our newest members. During the day we found him outside the cafe, we saw a white fur ball doing a forward diving toward the cemented floor. He landed on his belly with the huge sound of "SPLAAT". Today, we understand that he is just ambitionist and would like to become a professional diver athlete one day.',
        imageUrl: require('./Splaat.png'),
    },
    {
        id: 6,
        name: 'Steve',
        age: 4,
        breed: 'Bengal',
        weight: '5.53kg',
        remarks: 'Despite the manly name, Ms Steve is just a girl full of dream. She loves a lot of things. She loves people, food, headpat, and pushing things off the tables.',
        imageUrl: require('./Steve.png'),
    },
    {
        id: 7,
        name: 'Treason',
        age: 2,
        breed: 'Unknown',
        weight: '6.76kg',
        remarks: 'Ah yes. Treason. We send our gratitude to God everyday for turning Treason into a cat. If this piece of ungrateful fur crumbs ever become a human, World War 3 may happen.',
        imageUrl: require('./Treason.png'),
    },
    {
        id: 8,
        name: 'Walthazar Bobalthazar Feefifalthazar The 3rd',
        age: 3,
        breed: 'Unknown',
        weight: '5.67kg',
        remarks: 'The Greatest Wizard of The Tower. He can turn you into anything he wanted. Once one of our staff had given his meal 3 minutes late, he had cursed her and turned her into a jar of expired mustard. Fear him.',
        imageUrl: require('./Walthazarbobalthazar feefifofalthazar the third.png'),
    },
    ];

    return (
      <div>
        <div className="cats-container">
          <h2 className="cats-title">Meet Our Beloved Cats</h2>
          <div className="cat-row">
            {catData.slice(0, 4).map((cat, index) => (
              <CatCard key={index} cat={cat} />
            ))}
          </div>
          <div className="cat-row">
            {catData.slice(4, 8).map((cat, index) => (
              <CatCard key={index} cat={cat} />
            ))}
          </div>
        </div>
        <div className="whole-diet-container">
          <CatDiets />
        </div>
        <Merch />
      </div>
    );
};


export default Cats;
