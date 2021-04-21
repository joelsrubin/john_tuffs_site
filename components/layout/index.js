import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';
import { useState, useEffect } from 'react';


export default function Layout({ children }) {

  const [page, setPage] = useState('Home');
  useEffect(() => {
    setPage(children.type.name);
  }, [children]);

  console.log('page is: ', page);
  return (
    <>
      <Head>
        <title>
          NEW YORK PRENUPS
      </title>
      </Head>
      <div>
        <header className={styles.container}>
          <Link href="/">
            <span className={styles.title}>NEW YORK PRENUPS</span>
          </Link>
          <ul className={styles.list}>
            <Link href="/">
              <li className={page === 'Home' ? styles.clicked : styles.unclicked}>Home</li>
            </Link>
            <Link href="about">
              <li className={page === 'About' ? styles.clicked : styles.unclicked}>About John</li>
            </Link>
            <Link href="FAQs">
              <li className={page === 'FAQ' ? styles.clicked : styles.unclicked}>Why Get a Prenup?</li>
            </Link>
            <Link href="contact">
              <li className={page === 'Contact' ? styles.clicked : styles.unclicked}>Contact</li>
            </Link>
          </ul>
        </header>
        <main>
          {children}
        </main>
      </div>
    </>
  );
}