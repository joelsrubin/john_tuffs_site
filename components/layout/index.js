import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.css';


export default function Layout({ children }) {


  return (
    <>
      <Head>
        <title>
          NEW YORK PRENUPS
      </title>
      </Head>
      <body>
        <header className={styles.container}>
          <Link href="/">
            <span className={styles.title}>NEW YORK PRENUPS</span>
          </Link>
          <ul className={styles.list}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="about">
              <li>About John</li>
            </Link>
            <Link href="FAQs">
              <li>Why Get a Prenup?</li>
            </Link>
            <Link href="contact">
              <li>Contact</li>
            </Link>
          </ul>
        </header>
        <main>
          {children}
        </main>
      </body>
    </>
  );
}