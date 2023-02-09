import React, { useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.Login}>
        <div className={styles['Login-container']}>
          <Image src={logo} alt="logo" className={styles.Loglogo} />
          <form action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input type="text" name="email" placeholder="platzi@example.com" className={`${styles.input} ${styles['input-email']}`} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
            <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
              {' '}
              Log in{' '}
            </button>
            <Link href="/">Forgot my password</Link>
          </form>
          <button className={`${styles['secondary-button']} ${styles['sign-button']}`}>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
