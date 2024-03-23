import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import Input from '../form/input/input';
import Textarea from '../form/textarea/textarea';
export default function ContactForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {
  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={onSubmit}>
    <Input required={true} label='Name' name='name' type='text' icon='/icons/person.svg'></Input>
    <Input required={true} label='Email' name='email' type='email' icon='/icons/mail.svg'></Input>
    <Input required={true} label='Phone' name='phone' type='tel' icon='/icons/phone.svg'></Input>
    <Textarea required={true} label='How can we help?' name='subject' />

    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <button className={styles.button}>Contactar</button>
    </div>
  </form>
}