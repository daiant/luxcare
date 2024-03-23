import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import Input from '../form/input/input';
export default function DealersForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {
  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={onSubmit}>
    <Input required={true} label='Zip Code' name='zipcode' type='text' icon='/icons/person.svg'></Input>
    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <button className={styles.button}>Enviar</button>
    </div>
  </form>
}