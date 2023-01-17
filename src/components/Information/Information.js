import React from 'react';
import Box from '../Box/Box';
import iconBrandRecognition from '../../assets/icon-brand-recognition.svg';
import iconDetailedRecords from '../../assets/icon-detailed-records.svg';
import iconFullyCustomizable from '../../assets/icon-fully-customizable.svg'
import './information.css';

function Information() {
  return (
    <section className="information--container">
      <div className="information--title-wrapper">
        <h2 className="information--title">Advanced Statistics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci et leo commodo aliqua</p>
      </div>
      <div className="information--boxes-wrapper">
        <Box
          icon={iconBrandRecognition}
          title="Brand Recognition"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci et leo commodo aliqua."
        />
        <Box
          icon={iconDetailedRecords}
          title="Detailed Records"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci et leo commodo aliqua."
        />
        <Box
          icon={iconFullyCustomizable}
          title="Fully Customizable"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla orci et leo commodo aliqua."
        />
        <div className="information--bg-line" />
      </div>
    </section>
  )
}

export default Information;
