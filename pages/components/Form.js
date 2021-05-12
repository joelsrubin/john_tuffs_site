import styles from '../../styles/contact.module.css';
import { useForm } from 'react-hook-form';

export default function Form({ setName, setEmail, setMessage, onSubmit }) {
  const { register, formState: { errors }, handleSubmit } = useForm();
  console.log(errors);

  return (
    <form className={styles.form} id='form'>
      <span className={styles.label}>Name</span>
      <input {...register("name", { required: true })} type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder={errors.name && "name is required"} />

      <span className={styles.label}>Email</span>
      <input {...register("email", { required: true })} type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder={errors.email && "email is required"} />

      <span className={styles.label}>How can we help?</span>
      <textarea {...register("message", { required: true })} rows="10" name="message" onChange={(e) => setMessage(e.target.value)} placeholder={errors.message && "message is required"} />

      <button type="submit" className={styles.submit} onClick={handleSubmit(onSubmit)}>Send</button>
    </form>
  );
}