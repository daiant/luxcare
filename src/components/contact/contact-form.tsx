'use client';
import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import Input from '../form/input/input';
import Textarea from '../form/textarea/textarea';
import React from 'react';
export default function ContactForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {
  const [missingTOS, setMissingTOS] = React.useState(false);

  function checkTOS($event: React.FormEvent<HTMLFormElement>) {
    $event.preventDefault()
    const data = new FormData($event.target as HTMLFormElement);
    if (data.get('tos')) onSubmit($event);
    else {
      setMissingTOS(true);
      setTimeout(() => { setMissingTOS(false); }, 2000)
    }
  }
  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={checkTOS}>
    <Input required={true} label='Nombre' name='name' type='text' ></Input>
    <Input required={true} label='Email' name='email' type='email' ></Input>
    <Input required={true} label='Teléfono' name='phone' type='tel' ></Input>
    <Textarea required={true} label='¿Cómo te podemos ayudar?' name='subject' />

    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <label className={missingTOS ? styles.missingTOS : ''}>
        <input type="checkbox" name="tos" id="tos" />
        <span>Acepto los <a href="/legal/tos" target="_blank">términos y condiciones</a></span>
      </label>
      <button className={styles.button}>Contactar</button>
    </div>
  </form>
}