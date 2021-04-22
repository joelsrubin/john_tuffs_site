import styles from '../styles/contact.module.css';
import { useState } from 'react';
import Form from './components/Form';
import Image from 'next/image';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);




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

      })
      .catch((error) => console.error(error));
    setSubmitted(true);
  };

  const componentRender = () => {
    if (submitted) {
      return (
        <div className={styles.sent}>
          <h1>Submitted</h1>
          <Image src="/blueCheck.png" alt="check" width="64" height="64" />
        </div>
      );
    } else {
      return (
        <Form setName={setName} setEmail={setEmail} setMessage={setMessage} handleSubmit={handleSubmit} />
      );
    }
  };

  return (
    <div className="container">
      <main className={styles.top}>
        <div>
          <h1 className={styles.title}>Contact</h1>
          {componentRender()}
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