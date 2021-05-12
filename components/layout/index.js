import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';

import { useState, useEffect, useLayoutEffect } from 'react';


export default function Layout({ children }) {

  const [page, setPage] = useState('Home');
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(600);



  useEffect(() => {
    setPage(children.type.name);
    setClicked(!clicked);
  }, [children]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);

    };
  }, []);

  let isMobile = (width <= 600);


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
          <div className={styles.hamburgerMenuClicked} onClick={() => setClicked(!clicked)}>
            <div className={styles.slice}></div>
            <div className={styles.slice}></div>
            <div className={styles.slice}></div>
          </div>
          <ul className={!isMobile ? styles.list : styles.hidden}>
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
          <ul className={isMobile ? styles.mobileList : styles.hidden} style={clicked ? { transform: "translateX(-105%)", padding: "40px" } : { transform: "translateX(0)" }}>
            <h1 onClick={() => setClicked(!clicked)} style={isMobile ? {
              display: "inline",
              cursor: "pointer",
              fontSize: "16px",
              position: "absolute",
              top: "0",
              right: "25px",
              fontSize: "36px",
              marginLeft: "50px",
              fontWeight: "400"
            } : { display: "none" }}>x</h1>
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