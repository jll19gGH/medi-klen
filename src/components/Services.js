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
			<img className="services-list-service-image" src={serviceImg2} alt=""/>
		  	<div className="services-list-service-text">
		  	<div className="services-list-service-title">
		    <h2>Service 1</h2>
		    </div>
		    <div className="services-list-service-desc">
		    <p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
		    <h2>Service 3</h2>
		    </div>
		    <div className="services-list-service-desc">
		    <p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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