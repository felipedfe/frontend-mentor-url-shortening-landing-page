import React from 'react';
import './box.css';

function Box({ icon, title, text }) {

  return (
    <section className="box">
      <div className="box-img-bg">
        <img
          className="box-img"
          src={icon}
        />
      </div>
      <h3 className="box-title">
        {title}
      </h3>
      <p className="box-text">
        {text}
      </p>
    </section>
  )
};

export default Box;
