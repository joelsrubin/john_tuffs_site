import styles from '../../styles/contact.module.css';
import { useForm } from 'react-hook-form';

export default function Form({ setName, setEmail, setMessage, handleSubmit }) {
  const { register, formState: { errors } } = useForm();
  return (
    <form className={styles.form} id='form'>
      <span className={styles.label}>Name</span>
      <input {...register("name", { required: true })} type="text" name="name" onChange={(e) => setName(e.target.value)} required />
      {errors.firstName && "First name is required"}


      <span className={styles.label}>Email</span>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

      <span className={styles.label}>How can we help?</span>
      <textarea rows="10" name="message" onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit" className={styles.submit} onClick={handleSubmit}>Send</button>
    </form>
  );
}