import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/SendEmail.scss';

import logo from '../assets/logos/logo_yard_sale.svg';
import emailLogo from '../assets/icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<Image src= {logo} alt="logo" className="emlogo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<Image src= {emailLogo} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didnt receive the email? </span>
					<Link href="/">Resend</Link>
				</p>
			</div>
		</div>
	);
};

export default SendEmail;
