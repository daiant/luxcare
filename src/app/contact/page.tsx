'use client';

import ContactForm from '@/components/contact/contact-form';
import styles from './contact.module.css';
import { useState } from 'react';
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    (event.target as any).reset();
    setSubmitted(true);
  }

  return <div className={styles.wrapper}>
    <header className={styles.hero}>
      <img src='/contact/banner.jpg' alt='contacto' />
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <i>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</i>
        <h1>CONTACTO</h1>
      </aside>
      <ContactForm className={styles.form} onSubmit={handleSubmit} submitted={submitted} />
    </main>
  </div>
}