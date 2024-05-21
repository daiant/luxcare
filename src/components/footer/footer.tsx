import styles from './footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.header}>
      <div className={styles.cta}>
        <p>Cada día más<br />cerca de nuestros clientes</p>
      </div>
      <div className={styles.main}>
        <p>LuxCare Spas</p>
        <span>Copyright 2024 LuxCare Spas</span>
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.group}>
        <a href='/faq'>Preguntas frecuentes</a>
        <a href='/careers'>Trabaja con nosotros</a>
        <a href='/appointment'>¿Te llamamos?</a>
      </div> <div className={styles.group}>
        <a href='www.instagram.com' target='_blank'>Instagram</a>
        <a href='www.twitter.com' target='_blank'>X</a>
        <a href='www.facebook.com' target='_blank'>Facebook</a>
        <a href='www.aedin.com' target='_blank'>aedIn</a>
      </div>
      <div className={styles.group}>
        <a href='/legal/privacy'>Privacidad</a>
        <a href='/legal/cookies'>Cookies</a>
        <a href='/legal/tos'>Condiciones</a>
      </div>
    </div>
  </footer>
}