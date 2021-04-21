import styles from '../styles/contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  console.log({ name, email, message });
  return (
    <div className="container">
      <main className={styles.top}>
        <div>
          <h1 className={styles.title}>Contact</h1>
          <form className={styles.form}>

            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            <span className={styles.label}>Name</span>

            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <span className={styles.label}>Email</span>

            <textarea rows="10" name="message" onChange={(e) => setMessage(e.target.value)} />
            <span className={styles.label}>How can we help?</span>
            <button className={styles.submit}>send</button>
          </form>
        </div>
      </main>
      <main classname={styles.bottom}>
        <div>
          <h1>Next steps</h1>
        </div>
      </main>
    </div>
  );
}