import React from 'react';
import './Navigation.css';
import logo from './logo.png';
import hamburger from './menu-burger.svg';
import cross from './cross.svg';

class Navigation extends React.Component {


	constructor(props) {
	    super(props);
	    this.state = {
	      mobileNav: '',
	      hamburger: '',
	      cross: '',
	     }	  

	     this.mobileNav=React.createRef();
	     this.hamburger=React.createRef();
	     this.cross=React.createRef();
	  }

	openMobileNav = () => {
		this.mobileNav.current.style.display = "revert";
		this.hamburger.current.style.display="none";
		this.cross.current.style.display="inline-block";

	}

	closeMobileNav = () => {
		this.mobileNav.current.style.display = "none";
		this.hamburger.current.style.display="inline-block";
		this.cross.current.style.display="none";
	}

	render () {
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
					<div className="hamburger" ref={this.hamburger}>
						<img className="hamburger-icon" src={hamburger} alt='hamburger'   onClick={this.openMobileNav}/>
					</div>
					<div className="cross" ref={this.cross}>
						<img onClick={this.closeMobileNav} className="cross-icon" src={cross} alt='cross'/>
					</div>
			</nav>
					<div className="mobile-list"  ref={this.mobileNav}>
					<div className="mobile-list-links">
						<p><a href="#services" onClick={this.closeMobileNav}>Our Services</a></p>
						<p><a href="#contact" onClick={this.closeMobileNav}>Contact</a></p>
					</div>
						<a href="#contact">
						<button type="button" className="mobile-list-quote-button" onClick={this.closeMobileNav}>
							Get a Quote
						</button>
						</a>
					</div>
					</div>
	);
}
}

export default Navigation;