'use client'
import React, { FormEvent } from 'react';
import styles from './home-contact.module.css';

export default function HomeContactForm() {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const form = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [dialogVisible, setDialogVisible] = React.useState(false);
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
  function handlePhoneSubmit(event: FormEvent) { }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.current) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDialogVisible(true);
    }, 1000)

  }
  function handlePrevious() {
    const nextIndex = Math.max(questionIndex - 1, 0);
    if (nextIndex === questionIndex) { return; }
    scrollto(nextIndex);
  }
  function handleNext(event: React.MouseEvent) {
    const nextIndex = Math.min(questionIndex + 1, questions.length - 1);
    if (nextIndex === questionIndex) { return; }
    scrollto(nextIndex);
    event.preventDefault();
  }
  function scrollto(index: number) {
    if (!form.current) return;
    const questionElements = form.current.querySelectorAll('.' + styles.question);
    questionElements[index].querySelector('label')!.focus()
    setQuestionIndex(index);
  }

  return <div className={styles.container}>
    <div className={styles.dialog} aria-hidden={!dialogVisible}>
      <div className={styles.mask} onClick={() => setDialogVisible(false)}></div>
      <main>
        <h1>Consulta enviada con éxito!</h1>
        <h2>En breve nos pondremos en contacto contigo</h2>
        <div className="action">
          <button onClick={() => setDialogVisible(false)}>Volver</button>
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
        <form onSubmit={handlePhoneSubmit} className={styles.form}>
          <label htmlFor="quickPhone">Introduce tu teléfono</label>
          <input type="tel" id='quickPhone' name='phone' />
          <div className={styles.actions}>
            <button type='submit'>Llámame</button>
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
      <fieldset>
        {questions.map((question, index) => <div key={question.name} className={styles.question}>
          <label htmlFor={question.name}>{question.label}</label>
          {question.type === 'textarea' && <textarea
            defaultValue={question.value}
            onChange={(e) => question.value = e.target.value}
            id={question.name}
            name={question.name}
          ></textarea>}

          {question.type !== 'textarea' && <input type={question.type}
            defaultValue={question.value}
            onChange={(e) => question.value = e.target.value}
            id={question.name}
            name={question.name}
          />}
        </div>)}
      </fieldset>
      <div className={styles.actions}>
        <button onClick={handleNext} className={loading ? styles.loading : ''} type="submit">Enviar consulta</button>
      </div>
    </form>
  </div>

}