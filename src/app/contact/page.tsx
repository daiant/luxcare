'use client';

import styles from './contact.module.css';
import Input from '@/components/form/input/input';
import Textarea from '@/components/form/textarea/textarea';
import { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(form);
    (event.target as any).reset();
    setSubmitted(true);
  }
  function handleChange(event: any, property: string) {
    const res = form;
    res[property] = event.target.value;
  }
  return <div className={styles.wrapper}>
    <header className={styles.hero}>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quibusdam! Nisi neque, similique odio ratione, distinctio incidunt nemo ullam, nihil beatae eligendi deleniti aut doloremque vitae possimus id nam eveniet.
      </p>
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <p className='article__title'>Always there for you</p>
        <a className='article__content' href="tel:+44 207 40404 404">+44 207 40404 404</a>
        <a className='article__content' href="mailto:email@email.com">email@email.com</a>
      </aside>
      <form className={styles.form} autoComplete='off' onSubmit={handleSubmit}>
        <p className='article__title' style={{ width: '100%' }}>Get in touch</p>
        <Input required={true} onChange={(event: any) => handleChange(event, 'name')} label='Name' name='name' type='text' icon='testo'></Input>
        <Input required={true} onChange={(event: any) => handleChange(event, 'email')} label='Email' name='email' type='email' icon='testo'></Input>
        <Input required={true} onChange={(event: any) => handleChange(event, 'phone')} label='Phone' name='phone' type='tel' icon='testo'></Input>
        <Textarea required={true} onChange={(event: any) => handleChange(event, 'subject')} label='How can we help?' name='subject' />

        <div className={styles.actions}>
          <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
          <button className={styles.button}>submittt</button>
        </div>
      </form>
    </main>
  </div>
}