import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="social-links">
      <a href="https://t.me/thetwiilightrealm" target="_blank" rel="noopener noreferrer">
        <img src="/Telegram.png" alt="Telegram" className="social-icon" />
      </a>
      <a href="https://x.com/wonder_wisp" target="_blank" rel="noopener noreferrer">
        <img src="/x.png" alt="Twitter" className="social-icon" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <img src="/Pump_Fun.png" alt="Discord" className="social-icon" />
      </a>
    </div>
  );
};

export default Footer;