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
    console.log(form); (event.target as any).reset();
    setSubmitted(true);
  }
  function handleChange(event: any, property: string) {
    const res = form;
    res[property] = event.target.value;
  }
  return <div className={styles.wrapper}>
    <header className={styles.hero}>
      <img src='intro.png' alt='contacto' />
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <i>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</i>
        <h1>CONTACTO</h1>
      </aside>
      <form className={styles.form} autoComplete='off' onSubmit={handleSubmit}>
        {/* <p className='article__title' style={{ width: '100%' }}>Get in touch</p> */}
        <Input required={true} onChange={(event: any) => handleChange(event, 'name')} label='Name' name='name' type='text' icon='/icons/person.svg'></Input>
        <Input required={true} onChange={(event: any) => handleChange(event, 'email')} label='Email' name='email' type='email' icon='/icons/mail.svg'></Input>
        <Input required={true} onChange={(event: any) => handleChange(event, 'phone')} label='Phone' name='phone' type='tel' icon='/icons/phone.svg'></Input>
        <Textarea required={true} onChange={(event: any) => handleChange(event, 'subject')} label='How can we help?' name='subject' />

        <div className={styles.actions}>
          <span aria-hidden={!submitted} className={styles.info}>Mensaje enviado correctamente!</span>
          <button className={styles.button}>Contactar</button>
        </div>
      </form>
    </main>
  </div>
}