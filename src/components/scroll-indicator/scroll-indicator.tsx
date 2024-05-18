'use client';
import styles from './scroll-indicator.module.css';

export default function ScrollIndicator() {
  return <div className={styles.container} onClick={() => {
    const el = document.getElementById("next");
    el?.scrollIntoView({ behavior: 'smooth' })
  }}>
    <div className={styles.mouse}></div>
    <p>Comenzar</p>
  </div>

}