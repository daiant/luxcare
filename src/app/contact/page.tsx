'use client';

import ContactForm from '@/components/contact/contact-form';
import styles from './contact.module.css';
import React, { useState } from 'react';
import Dealers from "@/components/dealers/Dealers";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useReCaptcha} from "next-recaptcha-v3";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = React.useState(false);
  const { executeRecaptcha } = useReCaptcha();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError(false);

    const data = new FormData(event.target as HTMLFormElement);
    // Generate ReCaptcha token
    const token = await executeRecaptcha("form_submit");
    const obj: { [index: string]: FormDataEntryValue | null } = {};
    obj['name'] = data.get('name');
    obj['email'] = data.get('email');
    obj['phone'] = data.get('phone');
    obj['question'] = data.get('subject');
    obj['token'] = token;
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    try {
      const response = await fetch('/api/v1/contact', { method: "POST", body: JSON.stringify(obj), headers });
      if (response.ok) {
        setSubmitted(true);
        (event.target as HTMLFormElement).reset();
      }
      else {
        console.error('Error', response.status)
        console.error(await response.text())
        setError(true)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return <div className={styles.wrapper}>
    <Dialog open={submitted} onOpenChange={setSubmitted}>
      <DialogContent>
        <DialogTitle>{error ? 'Ha habido un error' : 'Perfecto. ¡Mensaje enviado!'}</DialogTitle>
        <DialogDescription>{error ? 'Por favor, inténtalo de nuevo más tarde' : 'Te contactaremos lo antes posible.'}</DialogDescription>
        <DialogFooter className='mt-2'>
          <Button onClick={() => window.location.reload()}>Volver</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <header className={styles.hero} id='form'>
      <Dealers/>
      <h1 style={{marginBlockStart: 96}}>¿Nos conocemos?</h1>
      <p>
        <span>¿Estás buscando información, materiales o servicios específicos?
          Nuestro Servicio de Atención al Cliente está a tu disposición para
          informarte y resolver tus dudas. Recuerda que también puedes
          visitar la sección de preguntas frecuentes (FAQ).</span>
      </p>
    </header>
    <main className={styles.main}>
      <ContactForm className={styles.form} onSubmit={handleSubmit} submitted={submitted}/>
    </main>
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
          <a href="https://maps.app.goo.gl/6obisiUqU9dm5vjT6" target='_blank'>C/19, N<sup>o</sup> 29, 46182, La Canyada
            (Paterna, Valencia)</a>
        </div>
      </div>
    </section>
    <section className={styles.cta}>
      <article>
        <h1>Trabaja con nosotros</h1>
        <p>Conviértete en distribuidor LuxCare</p>
        <a href="/careers">Me interesa</a>
      </article>
      <img src='/images/contact/banner.jpg' alt='contacto'/>
    </section>
  </div>
}