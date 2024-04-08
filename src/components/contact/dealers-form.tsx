import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import React from 'react';
import InputAutocomplete from '../form/input-autocomplete/input-autocomplete';
export default function DealersForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {
  const button = React.useRef<HTMLButtonElement>(null);
  function handleSelect(_value: string) {
    if (!button.current) return;
    setTimeout(() => { button!.current!.click(); }, 1);
  }
  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={onSubmit} >
    <div className={styles.input_wrapper}>
      <InputAutocomplete required={true} label='Ubicacion' name='zipcode' type='text' icon='/icons/person.svg' onSelect={handleSelect}></InputAutocomplete>
    </div>
    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <button className={styles.button} ref={button}>Enviar</button>
    </div>
  </form >
}