import { useState } from 'react';
import styles from './dialog.module.css';

export default function DealerDialog(props: { className?: string, visible: boolean, onChange: any }) {
  const [closing, setClosing] = useState(false);
  function beginClose() {
    setClosing(true);
    setTimeout(() => {
      props.onChange(false);
      setClosing(false);
    }, 800);
  }
  return <div className={`${props.className} ${styles.dialog} ${closing ? styles.closing : ''}`} aria-hidden={!props.visible}>
    <div className={styles.closeWrapper} onClick={beginClose}>
      <p>serrate puto</p>
    </div>
    <form className={styles.form}>
      <header>
        <h1 className={styles.title}>Find a dealer</h1>
        <h2 className={styles.subtitle}>Introduse tu codigo postal y a ver que sale!!</h2>
      </header>
      <label htmlFor="cp">
        <span>City</span>
        <input type="text" name="cp" id="cp" />
      </label>
      <label htmlFor='country'>
        <span>Country</span>
        <input type="text" name="country" id="country" />
      </label>
      <div role='group'>
        <button type='button'>A buscar</button>
        <button type='button' className={styles.secondary}>Use my location</button>
      </div>
    </form>
  </div>
}