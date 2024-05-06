import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.header}>
      <div className={styles.cta}>
        <p>Cada día más<br />cerca de nuestros clientes</p>
        <Link href={'/contact'}>Contacta</Link>
      </div>
      <div className={styles.links}>
        <div className={styles.group}>
          <Link href='/faq'>Preguntas frecuentes</Link>
          <Link href='/careers'>Trabaja con nosotros</Link>
          <Link href='/appointment'>¿Te llamamos?</Link>
        </div>
        <div className={styles.group}>
          <Link href='www.instagram.com' target='_blank'>Instagram</Link>
          <Link href='www.twitter.com' target='_blank'>X</Link>
          <Link href='www.facebook.com' target='_blank'>Facebook</Link>
          <Link href='www.linkedin.com' target='_blank'>LinkedIn</Link>
        </div>
      </div>
    </div>
    <div className={styles.main}>
      <Image src={'/LuxCare_c.svg'} width={0} height={0} sizes="100vw" alt='luxcare' />
    </div>
    <div className={styles.legal}>
      <Link href='/legal/privacy'>Privacidad</Link>
      <Link href='/legal/cookies'>Cookies</Link>
      <Link href='/legal/tos'>Condiciones</Link>
    </div>
  </footer>
}