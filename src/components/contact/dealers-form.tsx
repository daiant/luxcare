import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import Input from '../form/input/input';
import React from 'react';
export default function DealersForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {
  const [timeoutId, setTimeoutId] = React.useState<unknown>();
  function handleChange(event: React.ChangeEvent) {
    clearTimeout(timeoutId as number);
    setTimeoutId(
      setTimeout(
        () => handleAutoComplete(
          (event.target as HTMLInputElement).value
        ), 500)
    );
  }
  async function handleAutoComplete(value: string) {
    if (!value) return;
    const query = encodeURI(value);
    const url = `https://api.locationiq.com/v1/autocomplete?key=${'pk.5331a7d9813c46644de96b60404c0e3b'}&q=${query}&limit=5&dedupe=1`;
    const response = await fetch(url).then(r => r.json());
    console.log(response);
  }
  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={onSubmit}>
    <div className={styles.input_wrapper}>
      <Input required={true} label='Ubicacion' name='zipcode' type='text' icon='/icons/person.svg' onChange={handleChange}></Input>
      <p>Usar mi ubicación actual</p>
    </div>
    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <button className={styles.button}>Enviar</button>
    </div>
  </form >
}