import React from 'react';
import './footer.css';
import Logo from '../Logo/Logo';
import FacebookIcon from '../../assets/icon-facebook.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import PinterestIcon from '../../assets/icon-pinterest.svg';
import InstagramIcon from '../../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--all-elements-wrapper">
        <div className="footer--logo-wrapper">
          <Logo fill="white" />
        </div>
        <ul>
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className="footer--icons-wrapper">
          <img src={FacebookIcon} alt="facebook-logo" />
          <img src={TwitterIcon} alt="twitter-logo" />
          <img src={PinterestIcon} alt="pinterest-logo" />
          <img src={InstagramIcon} alt="instagram-logo" />
        </div>
      </div>
    </footer>
  )
};

export default Footer;
