import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>New York Prenups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.top}>
        <div className={styles.topLeft}>
          <h1>Picture</h1>
        </div>
        <div className={styles.right}>
          <h1>John Teufel Esq</h1>
          <span className={styles.span}> Want to learn more?</span>
          <div className={styles.buttonContainer}>
            <Link href="contact">
              <button>
                Contact us
              </button>
            </Link>
            <Link href="about">
              <button>About us</button>
            </Link>
          </div>
        </div>

      </main>
      <main className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h1>
            Fostering creativity and innovationeam definiebas reformidans, exerci persecuti
        </h1>
          <div className={styles.excerpts}>
            <span className={styles.span}>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</span>
            <span className={styles.span}>At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</span>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <h1>Picture</h1>
        </div>
      </main>
    </div>
  );
}
