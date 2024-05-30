'use client';;
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
    <header className={styles.hero} id='form'>
      <h1>¿Nos conocemos?</h1>
      <p>
        <span>¿Estás buscando información, materiales o servicios específicos?
          Nuestro Servicio de Atención al Cliente está a tu disposición para
          informarte y resolver tus dudas. Recuerda que también puedes
          visitar la sección de preguntas frecuentes (FAQ).</span>
      </p>
    </header>
    <main className={styles.main} >
      <ContactForm className={styles.form} onSubmit={handleSubmit} submitted={submitted} />
    </main>
    <section className={styles.cta}>
      <article>
        <h1>Trabaja con nosotros</h1>
        <p>Conviértete en distribuidor LuxCare</p>
        <a href="#form">Rellena el formulario</a>
      </article>
      <img src='/images/contact/banner.jpg' alt='contacto' />
    </section>
    <section className={styles.location}>
      <h1>Información de contacto</h1>
      <div className={styles.info}>
        <div>
          <span>Email</span>
          <a href="mailto:info@luxcare.es">info@luxcare.es</a>
        </div>
        <div>
          <span>Teléfono</span>
          <a href="tel:+34963368945">963 36 89 45</a>
        </div>
        <div>
          <span>Dirección</span>
          <a href="https://maps.app.goo.gl/6obisiUqU9dm5vjT6" target='_blank'>C/19, N<sup>o</sup> 29, 46182, La Canyada (Paterna, Valencia)</a>
        </div>
      </div>
      <main>
        <div className={styles.timetable}>
          <p>LUNES: DE 09:00h A 19:30h</p>
          <p>MARTES: DE 09:00h A 19:30h</p>
          <p>MIÉRCOLES: DE 09:00h A 19:30h</p>
          <p>JUEVES: DE 09:00h A 19:30h</p>
          <p>VIERNES: DE 09:00h A 19:30h</p>
          <p>SÁBADO: DE 10:00h A 14:00h</p>
          <p>DOMINGO: CERRADO</p>
        </div>
        <aside>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.3544375550764!2d-0.48548649999999993!3d39.5290576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605b0182fdcc49%3A0xd8c7da9f1666849b!2sGrupo%20Aquarea%20S.%20L.!5e0!3m2!1ses!2ses!4v1717006596896!5m2!1ses!2ses" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </aside>
      </main>
    </section>
    <section className={styles.blog}>
      <main>
        <h1>Lorem ipsum dolor, </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ducimus nobis. Ipsam quibusdam error, beatae aliquid dolor at sapiente, repudiandae minima officia ea quas. Quas laborum quis facilis maiores cumque?</p>
        <a href="//spa.luxcare.es">Ver más artículos</a>
      </main>
      <aside>
        <img src='/images/contact/banner.jpg' alt='contacto' />
      </aside>
    </section>
    <section className={styles.last_cta}>
      <h2>Comienza a beneficiarte de todas tus nuevas ventajas</h2>
      <h1>Conviértete en miembro ahora</h1>
      <a href="#form">Rellena el formulario</a>
    </section>
  </div>
}