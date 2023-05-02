import React from 'react';
import './Services.css';
import serviceImg1 from './bg-3.jpg';
import serviceImg2 from './bg-2.jpg';
import serviceImg3 from './bg-4.jpg';

function Services() {
	return(
		<div className="services-wrapper" id="services">
			<div className="services-title">
			<h2>Our Services</h2>
			</div>
			<div className="services-list">
			<div className="services-list-service grow">
			<img className="services-list-service-image" src={serviceImg1} alt=""/>
		  	<div className="services-list-service-text">
		  	<div className="services-list-service-title">
		    <h2>Service 1</h2>
		    </div>
		    <div className="services-list-service-desc">
		    <p>
		    	We only use EPA approved, environmentally friendly cleaning products. We never use harmful or toxic chemicals.
		    </p>
		    </div>
		    <a href="#contact">
		    <button className="services-list-service-button">
			Learn More
			</button>
			</a>
		    </div>
			</div>
			<div className="services-list-service grow">
			<img className="services-list-service-image" src={serviceImg2} alt=""/>
		  	<div className="services-list-service-text">
		  	<div className="services-list-service-title">
		    <h2>Service 2</h2>
		    </div>
		    <div className="services-list-service-desc">
		    <p>
		    	We only use EPA approved, environmentally friendly cleaning products. We never use harmful or toxic chemicals.
		    </p>
		    </div>
		    <a href="#contact">
		    <button className="services-list-service-button">
			Learn More
			</button>
			</a>
		    </div>
			</div>
			<div className="services-list-service grow">
			<img className="services-list-service-image" src={serviceImg3} alt=""/>
		  	<div className="services-list-service-text">
		  	<div className="services-list-service-title">
		    <h2>Service 3</h2>
		    </div>
		    <div className="services-list-service-desc">
		    <p>
		    	We only use EPA approved, environmentally friendly cleaning products. We never use harmful or toxic chemicals.
		    </p>
		    </div>
		    <a href="#contact">
		    <button className="services-list-service-button">
			Learn More
			</button>
			</a>
		    </div>		    
			</div>
			</div>
		</div>
		);
}

export default Services;