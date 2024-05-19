'use client';

import ContactForm from '@/components/contact/contact-form';
import styles from './contact.module.css';
import { useState } from 'react';
import Link from 'next/link';
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    (event.target as any).reset();
    setSubmitted(true);
  }

  return <div className={styles.wrapper}>
    <header className={styles.hero}>
      <img src='/images/contact/banner.jpg' alt='contacto' />
    </header>
    <main className={styles.main}>
      <aside className={styles.aside}>
        <h1>¿Nos conocemos?</h1>
        <p>¿Estás buscando información, materiales o servicios específicos?
          Nuestro Servicio de Atención al Cliente está a tu disposición para
          informarte y resolver tus dudas. Recuerda que también puedes
          visitar la sección de preguntas frecuentes (FAQ).</p>
        <Link href="/providers">¿Quieres ser distribuidor?</Link>
      </aside>
      <ContactForm className={styles.form} onSubmit={handleSubmit} submitted={submitted} />
    </main>
  </div>
}