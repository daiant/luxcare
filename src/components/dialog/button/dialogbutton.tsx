'use client';

import { useState } from 'react';
import styles from './dialogbutton.module.css';

type ButtonType = 'submit' | 'reset' | 'button' | undefined;
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function DialogButton(props: { type: ButtonType, text: string, icon?: string, variant?: 'primary' | 'secondary', onClick?: Function }) {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    if (loading) return;
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.onClick ? props.onClick() : undefined;
    setTimeout(() => { setLoading(false); }, 2000);
  }
  return <button type={props.type} className={`${styles[props.variant || 'primary']} ${styles.button}`} onClick={handleClick}>
    <span aria-hidden={loading} className={styles.text}>{props.text}</span>
    {props.icon && <img alt='' src={props.icon} className={styles.icon} aria-hidden={loading} />}

    <span className={styles.loadingWrapper} aria-hidden={!loading}><span className={styles.loading}></span></span>
  </button>
}