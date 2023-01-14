import React from 'react';
import Button from '../Button/Button';
import illustrationIntro from '../../assets/illustration-working.svg';
import './introduction.css';

function Introduction() {
  return (
    <>
      <div className="introduction--text-btn-wrapper">
        <h1 className="introduction--title">
          More than just shorter links
        </h1>
        <p className="introduction--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci et leo commodo aliquam. Aliquam neque dui.Lorem ipsum dolor sit amet.
        </p>
        <div className="introduction--btn">
          <Button>
            Get Started
          </Button>
        </div>
      </div>
      <div className="introduction--image-wrapper">
        <img
          className="introduction--image"
          src={illustrationIntro}
          alt="person working on a desktop computer"
        />
      </div>
    </>
  )
}

export default Introduction;