import styles from '../../styles/contact.module.css';

export default function Form({ setName, setEmail, setMessage, handleSubmit }) {

  return (
    <form className={styles.form} id='form'>

      <input type="text" name="name" onChange={(e) => setName(e.target.value)} required />
      <span className={styles.label}>Name</span>

      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
      <span className={styles.label}>Email</span>

      <textarea rows="10" name="message" onChange={(e) => setMessage(e.target.value)} required />
      <span className={styles.label}>How can we help?</span>
      <button type="submit" className={styles.submit} onClick={handleSubmit}>Send</button>
    </form>
  );
}