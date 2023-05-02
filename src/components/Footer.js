import React from 'react';
import './Footer.css';
import fbIcon from './fbIcon.svg';
import emailIcon from './eco-icon-1.png';

function Footer() {
	return(
		<footer className="footer-content-wrapper">
			<div className="footer-content">
			<div className="footer-content-socials">
				<div className="footer-content-socials-fb">
				<a href="https://www.facebook.com/mediklen/" target="_blank">
				<img className="footer-content-socials-icon" src={fbIcon} alt='icon'/>
				</a>
				</div>
			</div>
			<div className="footer-content-copyright">
				<p>© 2023 Medi-Klēn, LLC</p>
			</div>
			<div className="footer-content-credit">
				<p>Website made with ♡ by A&J</p>
			</div>
			</div>
		</footer>
		);
}

export default Footer;