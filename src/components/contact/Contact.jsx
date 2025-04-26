import './contact.css';

import {Component, createRef} from 'react';
import React from "react";
import emailjs from '@emailjs/browser';

import Reaptcha from 'reaptcha';

class Contact extends Component {
	state = {
		verified: false
	};

	form = createRef();
	captchaRef = createRef();


	onVerify = (recaptchaResponse) => {
		this.setState({
			verified: true
		});
	};

	sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, this.form.current, {
				publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
			})
			.then(
				() => {
					console.log('SUCCESS!');

					// Clears the form after sending the email
					e.target.reset();
					this.captchaRef.current.reset();
					this.setState({
						verified: false
					});
				},
				(error) => {
					console.log('FAILED...', error.text);
					alert('Failed to send email. Please try again later.');

				},
			);
	};

	render() {
		return (
			<div className='contact-form'>
				<form ref={this.form} onSubmit={this.sendEmail}>
					<div className='form-group'>
						<input type='text' name='name' placeholder='Name' id='' />
					</div>
					<div className='form-group'>
						<input type='email' name='email' placeholder='Email' id='' />
					</div>
					<div className='form-group'>
						<textarea id="subject" name="subject" placeholder="Subject"></textarea>
					</div>
					<div className='form-group'>
						<textarea
							name='message'
							placeholder='Write something...'
							id=''
							cols='30'
							rows='10'
						></textarea>
					</div>
					<div className='form-group' style={{'width': '100%', 'display': 'flex', 'justifyContent': 'center'}}>
						<Reaptcha sitekey={import.meta.env.VITE_APP_SITE_KEY} ref={this.captchaRef} onVerify={this.onVerify} theme="dark"/>
					</div>
					<button type='submit' className='button' value= "Submit" disabled={!this.state.verified} style={{'width': '100%'}}>
						Submit
					</button>
				</form>
			</div>
		);
	};
};

export default Contact;
