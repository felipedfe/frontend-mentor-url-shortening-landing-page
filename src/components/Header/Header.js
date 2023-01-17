import React, { useState } from 'react';
import Button from '../Button/Button'
import logo from '../../assets/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';

function Header() {
  const isBrowser = typeof window !== "undefined";

  const checkWindowWidth = () => {
    if (isBrowser) {
      if (window.innerWidth >= 1005) {
        return false
      }
      return true;
    }
  }

  // const [isMenuDisabled, setIsMenuDisabled] = useState(
  //   window.innerWidth >= 1005 ? false : true
  // )

  const [isMenuDisabled, setIsMenuDisabled] = useState(checkWindowWidth())

  if (isBrowser) {
    window.addEventListener('resize', () => {
      return (window.innerWidth >= 1005 && isMenuDisabled) ? setIsMenuDisabled(false) : null
    });
  }

  const showNavigation = () => {
    setIsMenuDisabled((prevState) => !prevState)
  }

  return (
    <header className="header--container">
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
    </header>
  )
}

export default Header;