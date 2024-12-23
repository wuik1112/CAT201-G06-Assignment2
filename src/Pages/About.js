import React from 'react'; 
import Oyen from '../3.png';
import Iuwan from '../1.png';
import Jiaxin from '../2.png';
import Raziqin from '../4.png';
import Sabrina from '../5.png';
import Xinpei from '../6.png'; 
import './About.css';

function About() {
  return (
    <div className= "About-Us">
      <div className="aboutBottom">
        <h1>ABOUT US</h1>

        <h2>Mission</h2>
        <ul>
            <li>Offer a cozy and feline-friendly atmosphere that provides cat lovers a singular and engaging experience</li>
            <li>Encourage responsible pet ownership</li>
            <li>Expedite the adoption of cats</li>
            <li>Make a beneficial change in the lives of cats and their people</li>
        </ul>

        <h2>Vision</h2>
        <p>To establish a safe sanctuary where people and cats can mingle, make enduring memories, 
            and strengthen the bond between cat lovers.
            In our ideal world, every cat would have a caring home, 
            and our cafe would act as a haven for both people and their furry companions
        </p>

        <h2>Team Members</h2>

        <div className= "team-members">
            <div className= "Founder">
            <img src={Oyen} alt= "Oyen" />
            <h3>Oyen</h3>
            <p>Founder</p>
            </div>

            <div className= "Director">
            <img src={Iuwan} alt= "Iuwan" />
            <h3>Khoo Iu Wan</h3>
            <p>Head Director</p>
            </div>
            
            <div className= "Financial">
            <img src={Sabrina} alt= "Sabrina" />
            <h3>Sabrina</h3>
            <p>Financial Manager</p>
            </div>
            
            <div className= "Welfare">
            <img src={Raziqin} alt= "Raziqin" />
            <h3>Raziqin Husna</h3>
            <p>Feline Welfare Supervisor</p>
            </div>
            
            <div className= "Inventory">
            <img src={Jiaxin} alt= "Jiaxin" />
            <h3>Loo Jia Xin</h3>
            <p>Inventory Manager</p>
            </div>

            <div className= "Media">
            <img src={Xinpei} alt= "Xinpei" />
            <h3>Teoh Xin Pei</h3>
            <p>Social Media Coordinator</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;