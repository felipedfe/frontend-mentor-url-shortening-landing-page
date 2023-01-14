import React from 'react';
import Button from '../Button/Button'
import logo from '../../assets/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';

function Header(props) {
  const { isMenuDisabled, showNavigation } = props;

  return (
    <>
      <img
        className="header--logo"
        src={logo} alt="shortly-logo"
      />
      <button
        className="header--mobile-menu-btn"
        type="button"
        onClick={showNavigation}
      >
        <AiOutlineMenu fill="gray" />
      </button>
      <nav
        style={isMenuDisabled ? { display: 'none' } : { display: 'flex' }}>
        <ul>
          <li>Features</li>
          <li>Prices</li>
          <li>Resources</li>
        </ul>
        <ul>
          <li>Login</li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;