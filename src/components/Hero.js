import React from 'react';
import './Hero.css';
import img1 from './bg-4.jpg';

function Hero() {
	return(
	<div className="hero-wrapper">
	<div className="desktop-hero-wrapper">
	<div className="hero-cols">
	<div className="hero-cols-text-col">
	<div className="hero-cols-text-col-text">
	<div className="hero-cols-text-col-text-title">
		Medi-Klēn
	</div>
	<div className="hero-cols-text-col-text-subtitle">
		Medical Facility Cleaning Services
	</div>
	<div className="hero-cols-text-col-text-desc">
		Where quality and customer satisfaction matter. We specialize in dialysis center cleaning throughout Lee, Charlotte, and Collier counties. We customize our services to fit your specific needs.
	</div>
	<a href="#contact">
	<button className="hero-cols-text-col-text-button" type="button">Get a Quote</button>
	</a>
	</div>
	</div>
	<div className="hero-cols-images-col">
		<img src={img1} alt='logo'/>
      </div>
	</div>
	</div>

	<div className="mobile-hero">
	<div className="mobile-hero-images">
		<img src={img1} alt='logo'/>
      </div>
	<div className="hero-cols-text-col">
	<div className="hero-cols-text-col-text">
	<div className="hero-cols-text-col-text-title">
		Medi-Klēn
	</div>
	<div className="hero-cols-text-col-text-subtitle">
		Medical Facility Cleaning Services
	</div>
	<div className="hero-cols-text-col-text-desc">
		Where quality and customer satisfaction matter. We specialize in dialysis center cleaning throughout Lee, Charlotte, and Collier counties. We customize our services to fit your specific needs.
	</div>
	<a href="#contact">
	<button className="hero-cols-text-col-text-button" type="button">Get a Quote</button>
	</a>
	</div>
	</div>
	</div>
	</div>

  	);
}

export default Hero;