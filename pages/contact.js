import styles from '../styles/contact.module.css';
import { useState } from 'react';
import Form from './components/Form';
import Image from 'next/image';
import Loader from "react-loader-spinner";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitting = () => {
    setTimeout(() => { setSubmitted(true); }, 2000);
    setSubmitting(true);
  };


  const handleSubmit = (e) => {
    let form = {
      name,
      email,
      message
    };

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
    setSubmitting(true);
    handleSubmitting();
  };

  const componentRender = () => {
    if (submitted) {
      return (
        <div className={styles.sent}>
          <h1>Submitted</h1>
          <Image src="/Vector.svg" alt="check" width="64" height="64" />
        </div>
      );
    } else if (submitting && !submitted) {
      return (
        <div className={styles.sent}>
          <h1>Sending...</h1>
          <Loader
            type="ThreeDots"
            color="#3c64b1"
            height={64}
            width={64}
            timeout={2000} //3 secs
          />
        </div>
      );
    } else {
      return (
        <Form setName={setName} setEmail={setEmail} setMessage={setMessage} onSubmit={handleSubmit} />
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
        {/* <iframe src="https://cdn.forms-content.sg-form.com/3a21efda-b36d-11eb-a5d4-d25f9f925d65" /> */}
        <div>
          <h1>Next steps</h1>

        </div>
      </main>
    </div>
  );
}