import Logo from '@/public/images/logo.svg';
import styles from './footer.module.css';

export default function Footer() {
  return <><footer className={styles.footer}>
    <div className={styles.header}>
      <div className={styles.cta}>
        <p>Cada día más<br />cerca de nuestros clientes</p>
      </div>
      <div className={styles.main}>
        <Logo className={styles.logo} />
        <span>Copyright 2024 LuxCare Spas</span>
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.group}>
        <a href='/faq'>Preguntas frecuentes</a>
        <a href='/careers'>Trabaja con nosotros</a>
        <a href='/contact'>Contacto</a>
        <a href='https://www.spa.luxcare.es' target='_blank'>Blog</a>
      </div> <div className={styles.group}>
        <a href='www.instagram.com' target='_blank'>Instagram</a>
        <a href='www.twitter.com' target='_blank'>X</a>
        <a href='www.facebook.com' target='_blank'>Facebook</a>
        <a href='www.linkedin.com' target='_blank'>linkedIn</a>
      </div>
      <div className={styles.group}>
        <a href='/legal/privacy'>Privacidad</a>
        <a href='/legal/cookies'>Cookies</a>
        <a href='/legal/tos'>Condiciones</a>
      </div>
    </div>

  </footer>
    <div className={styles.location}>
      <a href="mailto:info@aquarea.es">info@aquarea.es</a>
      <a href="tel:+34963368945">963 36 89 45</a>
      <a href="https://maps.app.goo.gl/6obisiUqU9dm5vjT6" target='_blank'>Carrer 29, 19, 46182 La Canyada, Valencia</a>
    </div>
  </>
}