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

  const questions = [
    {
      type: 'text',
      name: 'name',
      label: 'Escribe tu nombre',
      value: '',
    },
    {
      type: 'email',
      name: 'email',
      label: 'Introduce tu email',
      value: '',
    },
    {
      type: 'tel',
      name: 'phone',
      label: 'Introduce tu teléfono',
      value: '',
    },
    {
      type: 'textarea',
      name: 'question',
      label: 'Escribe tu consulta',
      value: '',
    },
  ];

  const handleSubmit = React.useCallback(async (event: FormEvent) => {
    event.preventDefault();
    if (!form.current) return;

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
  }, [executeRecaptcha]);

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
      <header>
        <h1>Haz tu consulta</h1>
        <h2>Si tienes cualquier duda o sugerencia, escríbenos y sigue los siguientes pasos. Deja que LuxCare se preocupe por ti.</h2>
      </header>
      <header className={styles.quickForm}>
        <h1>¿Te llamamos?</h1>
        <h2>Introduce únicamente tu teléfono y nosotros haremos el resto.</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="quickPhone">Introduce tu teléfono</label>
          <input type="tel" id='quickPhone' name='phone' required />
          <div className={styles.actions}>
            <p className={styles.tos}>Al hacer click estoy aceptando los <a href='/legal/tos'>Términos y condiciones</a>.</p>
            <Button type='submit'>Llámame</Button>
            {error[0] && <p className={styles.error}>Algo ha ido mal. Inténtalo de nuevo más tarde.</p>}
          </div>
        </form>
      </header>
      {/* <div role='main'>
        <p className={styles.current}>
          {questionIndex + 1}
        </p>
        <p className={styles.separator}>/</p>
        <p className={styles.total}>4</p>
      </div> */}
    </aside>
    <form onSubmit={handleSubmit} ref={form} className={styles.form}>
      <h1>Contacto</h1>
      <fieldset>
        {questions.map((question) => <div key={question.name} className={styles.question}>
          <label htmlFor={question.name}>{question.label}</label>
          {question.type === 'textarea' && <textarea
            defaultValue={question.value}
            onChange={(e) => question.value = e.target.value}
            id={question.name}
            name={question.name}
            required
          ></textarea>}

          {question.type !== 'textarea' && <input type={question.type}
            defaultValue={question.value}
            onChange={(e) => question.value = e.target.value}
            id={question.name}
            name={question.name}
            required
          />}
        </div>)}
      </fieldset>
      <div className={styles.actions}>
        <p className={styles.tos}>Al hacer click estoy aceptando los <a href='/legal/tos'>Términos y condiciones</a>.</p>
        <Button className={loading ? styles.loading : ''} type="submit">Enviar consulta</Button>
        {error[1] && <p className={styles.error}>Algo ha ido mal. Inténtalo de nuevo más tarde.</p>}
      </div>
    </form>
  </div>

}