import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SendEmail.module.scss';

import logo from '../assets/logos/logo_yard_sale.svg';
import emailLogo from '../assets/icons/email.svg';

const SendEmail = () => {
  return (
    <>
      <Head>
        <title>Send Email</title>
      </Head>
      <div className={styles.SendEmail}>
        <div className={styles['form-container']}>
          <Image src={logo} alt="logo" className={styles.emlogo} />
          <h1 className={styles.title}>Email has been sent!</h1>
          <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
          <div className={styles['email-image']}>
            <Image src={emailLogo} alt="email" />
          </div>
          <button className={`${styles['primary-button']} ${styles['login-button']}`}>Login</button>
          <p className={styles.resend}>
            <span>Didnt receive the email? </span>
            <Link href="/">Resend</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SendEmail;
