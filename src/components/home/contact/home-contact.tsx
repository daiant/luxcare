'use client'
import React, { FormEvent } from 'react';
import styles from './home-contact.module.css';
import { useReCaptcha } from 'next-recaptcha-v3';
import { Button } from '@/components/ui/button';

export default function HomeContactForm() {
  const form = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState([false, false]);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = React.useCallback(async (event: FormEvent) => {
    event.preventDefault();
    if (!form.current) return;
    if (loading) return;

    setLoading(true);
    setError([false, false]);
    const data = new FormData(event.target as HTMLFormElement);
    // Generate ReCaptcha token
    const token = await executeRecaptcha("form_submit");

    const obj: { [index: string]: FormDataEntryValue | null } = {};
    obj['name'] = data.get('name');
    obj['email'] = data.get('email');
    obj['phone'] = data.get('phone');
    obj['question'] = data.get('question');
    obj['token'] = token;
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    try {
      const response = await fetch('https://luxcare-backoffice.vercel.app/api/v1/contact', { method: "POST", body: JSON.stringify(obj), headers });
      if (response.ok) {
        setDialogVisible(true);
        (event.target as HTMLFormElement).reset();
      }
      else {
        if (!Boolean(obj.name) && !Boolean(obj.email)) {
          setError([true, false]);
        }
        else setError([false, true])
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [executeRecaptcha, loading]);

  return <div className={styles.container}>
    <div className={styles.dialog} aria-hidden={!dialogVisible}>
      <div className={styles.mask} onClick={() => setDialogVisible(false)}></div>
      <main>
        <h1>Perfecto.<br />¡Mensaje enviado!</h1>
        <div className={styles.column}>
          <h2>Te contactaremos lo antes posible.</h2>
          <div className={styles.action}>
            <Button onClick={() => setDialogVisible(false)}>Volver</Button>
          </div>
        </div>
      </main>
    </div>
    <aside className={styles.aside}>
      <header style={{ marginInline: 'auto', width: 'fit-content' }}>
        <h1><strong>Deja que nuestros expertos</strong> lo hagan <br /> todo <strong>más simple</strong></h1>
        <h2>¿Estás listo para empezar?</h2>
      </header>
      <header className={styles.quickForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper} >
            <div className={styles.wrapper} data-label='Nombre'>
              <input type="text" id='quickName' name='name' required title='Introduce tu nombre' placeholder=' ' />
            </div>
            <div className={styles.wrapper} data-label='Teléfono' >
              <input type="tel" id='quickPhone' name='phone' required title='Introduce tu teléfono' placeholder=' ' />
            </div>
            <button type='submit'>Obtener consulta</button>
          </div>
          <div className={styles.actions}>
            <p className={styles.tos}>Al hacer click estoy aceptando los <a href='/legal/tos'>Términos y condiciones</a>.
            </p>
            {error[0] && <p className={styles.error}>Algo ha ido mal. Inténtalo de nuevo más tarde.</p>}
          </div>
        </form>
      </header>
    </aside>
  </div>

}