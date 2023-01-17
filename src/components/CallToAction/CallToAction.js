import React from 'react';
import Button from '../Button/Button';
import './call-to-action.css';

function CallToAction() {
  return (
    <section className="cta--container">
      <div className="cta--title-btn-wrapper">
        <h2 className="cta--title">Boost your links today</h2>
        <Button>Get Started</Button>
      </div>
    </section>
  )
};

export default CallToAction;
