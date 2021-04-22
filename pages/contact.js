import styles from '../styles/contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  const handleSubmit = (e) => {
    let form = {
      name,
      email,
      message
    };
    e.preventDefault();
    fetch('/api/form', {
      method: 'POST',
      headers: {
        'Accept': 'applicatoin/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((res) => {
        console.log('Response received');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => console.error(error));

  };

  return (
    <div className="container">
      <main className={styles.top}>
        <div>
          <h1 className={styles.title}>Contact</h1>
          <form className={styles.form} id='form'>

            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            <span className={styles.label}>Name</span>

            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <span className={styles.label}>Email</span>

            <textarea rows="10" name="message" onChange={(e) => setMessage(e.target.value)} />
            <span className={styles.label}>How can we help?</span>
            <button className={styles.submit} onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </main>
      <main className={styles.bottom}>
        <div>
          <h1>Next steps</h1>
        </div>
      </main>
    </div>
  );
}