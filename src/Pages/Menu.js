// MenuPage.js

import React from 'react';
import './Menu.css';
import coffeeImage from './coffee.png';
import floatImage from './float.png';
import cakesImage from './cake.png';  // Add this import statement
import pieImage from './pie.png'; 

const MenuPage = () => {
  return (
    <div className="menu-page">
      {/* Sub-heading: Beverage */}
      <h2 className="beverage-subheading">Beverage</h2>

      {/* Left section with coffee.png and Caffeine details */}
      <div className="caffeine-section">
        <img src={coffeeImage} alt="Coffee" className="coffee-image" />
        <div className="caffeine-details">
          <h3 className="small-title">Caffeine</h3>
          <ul>
            <li>Americano <span className="price">RM8</span></li>
            <li>Latte <span className="price">RM10</span></li>
            <li>Mocha <span className="price">RM15</span></li>
            <li>Cappuccino <span className="price">RM12</span></li>
            <li>Matcha <span className="price">RM12</span></li>
          </ul>
        </div>
      </div>

      {/* Right section with Non-Caffeine details and float.png */}
      <div className="non-caffeine-section">
        <div className="non-caffeine-details">
          <h3 className="small-title">Non-Caffeine</h3>
          <ul>
            <li>Chocolate <span className="price">RM15</span></li>
            <li>Vanilla <span className="price">RM15</span></li>
            <li>
              Float <span className="price"> RM10</span>
            </li>
            <li className="smaller-font"> (Pepsi, Sprite, Mirinda Strawberry)</li>
          </ul>
        </div>
        <img src={floatImage} alt="Float" className="float-image" />
      </div>

      {/* Sub-heading: Food */}
      <h2 className="food-subheading">Food</h2>

      {/* Left section with cakes.png and Cakes details */}
      <div className="cakes-section">
        <img src={cakesImage} alt="Cakes" className="cakes-image" />
        <div className="cakes-details">
          <h3 className="small-title">Cakes</h3>
          <ul>
            <li>Caramel Cheesecake <span className="price">RM20</span></li>
            <li>Matcha Cheesecake <span className="price">RM20</span></li>
            <li>Red Velvet Cake <span className="price">RM20</span></li>
            <li>Tiramisu <span className="price">RM20</span></li>
          </ul>
        </div>
      </div>

      {/* Right section with Baked Products details and pie.png */}
      <div className="baked-products-section">
        <div className="baked-products-details">
          <h3 className="small-title">Baked Products</h3>
          <ul>
            <li>
              Beef pie <span className="price">RM15</span>
            </li>
            <li className="smaller-font"> (spicy, normal)</li>
            <li>
              Chicken pie <span className="price">RM15</span>
            </li>
            <li className="smaller-font"> (spicy, normal)</li>
            <li>BBQ Chick o cheese <span className="price">RM15</span></li>
            <li>Doughnut <span className="price">RM8</span></li>
          </ul>
        </div>
        <img src={pieImage} alt="Pie" className="pie-image" />
      </div>
    </div>
  );
};

export default MenuPage;
