import React from 'react';
import { FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; // Add this line

function Contactus() {
    return (
        <div className="contact-container">
          <h1>CONTACT US</h1>
    
          <div className="operating-hours">
        <h2>Operating Hours</h2>
        <p>Monday - Friday: 12 pm - 8 pm</p>
        <p>Saturday: 12 pm - 10 pm</p>
        <p>Sunday: Closed</p>
        <p><em>Last entry 45 minutes before closing time.</em></p>
      </div>

          <div className="meet-us">
            <h2>Meet Us</h2>
            <p>Visit our location:</p>
            <ul>
              <li>
                <FaMapMarkerAlt /> Address
              </li>
              <li style={{ height: '10px' }}></li>
              <li>
            The Golden Triangle, 29-1-62, 11900, Jln Paya Terubung, Relau, 11900 Bayan Lepas, Penang
          </li>
          <li style={{ height: '10px' }}></li>
          <li>
            <iframe
              title="Location Map"
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12888.991358023235!2d100.27245623173438!3d5.435411226756233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUyJzI4LjkiTiAwwrAyMSczMy45Ilc!5e0!3m2!1sen!2suk!4v1605978370184!5m2!1sen!2suk"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </li>
          <li style={{ height: '20px' }}></li>
          <li>Reservation</li>
          <li>
            <FaPhone /> Contact us via phone: +603 9984 5420
          </li>
        </ul>
      </div>

      <div className="social-media">
        <h2>Social Media</h2>
        <p>Connect with us on social media:</p>
        <ul>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactus;