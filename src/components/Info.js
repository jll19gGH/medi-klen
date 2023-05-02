import React from 'react';
import './Info.css'
import businessIcon from './business-icon.png';
import ecoIcon from './eco-icon-3.png';
import starIcon from './star-icon-2.png';

function Info() {
	return(
		<div className="info-wrapper">
		<div className="info-columns">
		  <div className="info-columns-col">
		  	<img className="info-icon" src={businessIcon} alt='icon'/>
		    <div className="info-title">
		    <h3>Locally Owned</h3>
		    </div>
		    <div className="info-text">
		    <p>
		    We are a locally owned medical cleaning service based in Cape Coral, Florida servicing Lee, Charlotte, and Collier county.
		    </p>
		    </div>
		  </div>
		  
		  <div className="info-columns-col">
		  	<img className="info-icon" src={ecoIcon} alt='icon'/>
		  	<div className="info-title">
		    <h3>Eco-Friendly</h3>
		    </div>
		    <div className="info-text">
		    <p>
		    	We only use EPA approved, environmentally friendly cleaning products. We never use harmful or toxic chemicals.
		    </p>
		    </div>
		  </div>
		  
		  <div className="info-columns-col">
		  	<img className="info-icon" src={starIcon} alt='icon'/>
		  	<div className="info-title">
		    <h3>Highly Trained</h3>
		    </div>
		    <div className="info-text">
		    <p>
		    Our employees undergo thorough and extensive training. Our staff observe all necessary protocols for OSHA compliance in a medical setting.
		    </p>
		    </div>
		  </div>
		  </div>
		</div>
		);
}

export default Info;