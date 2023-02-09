import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className={styles.container}>
        <h1>404 Not Found</h1>
        <p>Lo siento, la página que estás buscando no se pudo encontrar.</p>
        <Link href="/">Volver a la página principal</Link>
      </div>
    </>
  );
};

export default NotFound;
