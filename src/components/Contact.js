import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import confirmAlert from 'react-confirm-alert';

class Contact extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      name: '',
	      phone: '',
	      email: '',
	      interests: [],
	      message: '',
	      human: false,
	     }	    
	     this.name=React.createRef();
	     this.phone=React.createRef();
	     this.email=React.createRef();
	     this.interests=React.createRef();
	     this.humanError=React.createRef();

	     //services
	     this.service1=React.createRef();
	     this.service2=React.createRef();
	     this.service3=React.createRef();
	     this.service4=React.createRef();
	     this.service5=React.createRef();
	     this.service6=React.createRef();

	     this.human=React.createRef();


	  }

	 onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onPhoneChange = (event) => {
		this.setState({phone: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onInterestsChange = (event) => {
		if(!event.target.checked) {
			this.setState({interests: this.state.interests.filter(function(interest) { 
        return interest !== event.target.value 
    })});
		}
		else {
			this.setState({
				interests:[...this.state.interests, event.target.value]
			})
		}
	}

	onMessageChange = (event) => {
		this.setState({message: event.target.value});
	}

	onHumanChange = (event) => {
		this.setState({human: event.target.checked});
	}

	onSubmit = () => {

		var submit = true;

		//reset errors
		this.name.current.style.visibility = "hidden";
		this.phone.current.style.visibility = "hidden";
		this.email.current.style.visibility = "hidden";
		this.interests.current.style.visibility = "hidden";
		this.humanError.current.style.visibility = "hidden";

		if(this.state.name === '') {
			this.name.current.style.visibility = "unset";
			submit = false;
		}
		if(this.state.phone === '') {
			this.phone.current.style.visibility = "unset";
			submit = false;
		}
		if(this.state.email === '') {
			this.email.current.style.visibility = "unset";
			submit = false;
		}
		if(this.state.interests === undefined || this.state.interests.length === 0) {
			this.interests.current.style.visibility = "unset";
			submit = false;
		}
		if(this.state.human === false) {
			this.humanError.current.style.visibility = "unset";
			submit = false;
		}
/*
		if(submit) {
    		emailjs.send("service_xs9ld29","template_14oyckl",{
				name: this.state.name,
				phone: this.state.phone,
				email: this.state.email,
				interests: this.state.interests,
				message: this.state.message,
				}, "kM67vpeE1gIAoVQOP")
    		.then(function(response) {
       			alert('Request received. A copy of your request has also been sent to the email provided. Thank you for your interest!');
		    }, function(error) {
		       alert('Request was unable to send. Please verify information and try again.');
		    });
		    
			this.onReset();
		}*/
		
	}

	onReset = () => {
		this.name.current.style.visibility = "hidden";
		this.phone.current.style.visibility = "hidden";
		this.email.current.style.visibility = "hidden";
		this.interests.current.style.visibility = "hidden";
		this.humanError.current.style.visibility = "hidden";

		this.setState({
			name: '',
	      	phone: '',
	      	email: '',
	      	interests: [],
	      	message: '',
	      	human: false,
		});

		if(this.service1.current.checked) {
			this.service1.current.checked = !this.service1.current.checked;
		}
		if(this.service2.current.checked) {
			this.service2.current.checked = !this.service2.current.checked;
		}
		if(this.service3.current.checked) {
			this.service3.current.checked = !this.service3.current.checked;
		}
		if(this.service4.current.checked) {
			this.service4.current.checked = !this.service4.current.checked;
		}
		if(this.service5.current.checked) {
			this.service5.current.checked = !this.service5.current.checked;
		}
		if(this.service6.current.checked) {
			this.service6.current.checked = !this.service6.current.checked;
		}
		if(this.human.current.checked) {
			this.human.current.checked = !this.human.current.checked;
		}


	}

	render() {
	return(
		<div className="contact-wrapper" id="contact">
		<div className="contact-title">
			<h2>Request a Free Quote</h2>
			<hr></hr>
		</div>
		<div className="contact-columns">
		<div className="contact-info-col">
		<div className="contact-info-col-text">
		<div className="contact-info-col-title">
			<h2>Contact Us</h2>
		</div>

			<p>Feel free to contact us with any questions.</p>
		<div className="contact-info-col-email-phone-hours-cols">
			<div className="contact-info-col-email-phone-col">
			<div className="contact-info-col-email-col">
			<h3>Email</h3>
			<p>email@gmail.com</p>
			</div>
			<div className="contact-info-col-phone-col">
			<h3>Phone</h3>
			<p>(123) 456-7890</p>
			</div>
			</div>
			<div className="contact-info-col-hours-col">
			<h3>Hours</h3>
			<p>Monday - Friday: 9AM - 5PM</p>
			<p>Saturday: Closed</p>
			<p>Sunday: Closed</p>
			</div>
		</div>
		</div>

		</div>
		<div className="contact-input-col">
		<div className="contact-input-col-name-phone-cols">
			<div className="contact-input-col-name-col">
			<div className="error-field" ref={this.name}>
				<div className="error-field-text">
				Name is required.
				</div>
			</div>
			<label for="name">Name *</label>
			<input value={this.state.name} onChange={this.onNameChange} type="text" id="name" name="name" required/>
			</div>
			<div className="contact-input-col-phone-col">
			<div className="error-field" ref={this.phone}>
			<div className="error-field-text">
				Phone is required.
				</div>
			</div>
			<label for="phone">Phone *</label>
			<input value={this.state.phone} onChange={this.onPhoneChange} type="tel" id="phone" name="phone"/>
			</div>
		</div>
		<div className="contact-input-col-email">
		<div className="error-field" ref={this.email}>
		<div className="error-field-text">
				Email is required.
				</div>
			</div>
			<label for="email">Email *</label>
			<input value={this.state.email} onChange={this.onEmailChange} type="email" id="email" name="email"/>
		</div>
		<div className="contact-input-col-interests">
			<div className="error-field" ref={this.interests}>
			<div className="error-field-text">
				At least one interest is required.
				</div>
			</div>
			<label for="interests">I'm interested in... *</label>
			<div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service1" name="interest" value="service1" ref={this.service1}/>
		    <label for="service1">Service 1</label>
		    </div>
		   	<div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service2" name="interest" value="service2" ref={this.service2}/>
		    <label for="service2">Service 2</label>
		    </div>
		    <div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service3" name="interest" value="service3" ref={this.service3} />
		    <label for="service3">Service 3</label>
		    </div>
		    <div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service4" name="interest" value="service4" ref={this.service4} />
		    <label for="service4">Service 4</label>
		    </div>
		    <div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service5" name="interest" value="service5" ref={this.service5} />
		    <label for="service5">Service 5</label>
		    </div>
		    <div className="contact-input-col-interests-option">
			<input onChange={this.onInterestsChange} type="checkbox" id="service6" name="interest" value="service6" ref={this.service6} />
		    <label for="service6">Service 6</label>
		    </div>
		</div>
		<div className="contact-input-col-text">
		     <label for="message">Additional Message (Optional)</label>
			<textarea 
			value={this.state.message} 
			onChange={this.onMessageChange} 
			id="message" name="message">
			</textarea>
		</div>
		<div className="contact-input-col-human">
			<div className="error-field" ref={this.humanError}>
			<div className="error-field-text">
				Acknowledgement is required.
				</div>
			</div>
			<div className="contact-input-col-human-option">
			<input value={this.state.human} onChange={this.onHumanChange} type="checkbox" id="human" name="human" value="human"  ref={this.human}/>
		    <label for="human">I am a human</label>
		    </div>
		</div>
		<div className="contact-input-col-buttons">
		<div className="contact-input-col-buttons-submit">
			<button className="contact-input-col-buttons-submit-button" onClick={this.onSubmit} type="submit">Submit</button>
		</div>
		<div className="contact-input-col-buttons-reset">
			<button className="contact-input-col-buttons-reset-button" onClick={this.onReset} type="reset">Reset</button>
		</div>
		</div>
		</div>
		</div>
		</div>
		);
	}
}

export default Contact;