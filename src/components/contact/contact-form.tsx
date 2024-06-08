'use client';
import { FormEventHandler } from 'react';
import styles from './contact-form.module.css';
import Input from '../form/input/input';
import Textarea from '../form/textarea/textarea';
import React from 'react';
export default function ContactForm({ onSubmit, submitted, className }: { onSubmit: FormEventHandler<HTMLFormElement>, submitted: boolean, className?: string }) {

  return <form className={`${styles.form} ${className}`} autoComplete='off' onSubmit={onSubmit}>
    <Input required={true} label='Nombre' name='name' type='text' ></Input>
    <Input required={true} label='Email' name='email' type='email' ></Input>
    <Input required={true} label='Teléfono' name='phone' type='tel' ></Input>
    <Textarea required={true} label='¿Cómo te podemos ayudar?' name='subject' />

    <div className={styles.actions}>
      <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
      <label className={styles.tos}>
        Al hacer click estoy aceptando los <a href='/legal/tos'>Términos y condiciones</a>.
      </label>
      <button className={styles.button}>Contactar</button>
    </div>
  </form>
}