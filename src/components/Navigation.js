import React from 'react';
import './Navigation.css';
import logo from './logo.png';
import hamburger from './menu-burger.svg';
import cross from './cross.svg';

function Navigation() {
	return(
		<div className="nav-wrapper">
			<nav className="topnav">
					<div className="logo-wrapper">
						<div>
			        		<img className="logo" src={logo} alt='logo'/>
			        	</div>
					</div>
					<div className="site-title">
					<div className="site-title-name">
						Medi-Klēn
					</div>

					<div className="site-title-desc">
						Medical Facility Cleaning Services
					</div>
					</div>
					<div className="nav-list">
						<a href="#services">Our Services</a>
						<a href="#contact">Contact</a>
						<a href="#contact">
						<button type="button" className="topnav-quote-button">
							Get a Quote
						</button>
						</a>
					</div>
					<div className="hamburger">
						<img className="hamburger-icon" src={hamburger} alt='hamburger'/>
					</div>
					<div className="cross">
						<img className="cross-icon" src={cross} alt='cross'/>
					</div>
			</nav>
					<div className="mobile-list">
					<div className="mobile-list-links">
						<p><a href="#services">Our Services</a></p>
						<p><a href="#contact">Contact</a></p>
					</div>
						<a href="#contact">
						<button type="button" className="mobile-list-quote-button">
							Get a Quote
						</button>
						</a>
					</div>
					</div>
	);
}

export default Navigation;