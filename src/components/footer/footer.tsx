import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <header className={styles.logo}>
      <img src="/icons/luxcare.svg" alt="L U X C A R E" />
    </header>
    <section className={styles.links}>
      <ul className={styles.list}>
        <Link className={styles.link} href='/about'>About us</Link>
        <Link className={styles.link} href='/about'>Experiences</Link>
        <Link className={styles.link} href='/about'>Our Spas</Link>
        <Link className={styles.link} href='/about'>Complements</Link>
        <Link className={styles.link} href='/about'>Contact</Link>
      </ul>
      <ul className={styles.list}>
        <Link className={styles.link} href="/crown">Serie Crown</Link>
        <Link className={styles.link} href="/vector">Serie Vector</Link>
        <Link className={styles.link} href="/strato">Serie Strato</Link>
      </ul>
      <ul className={styles.list}>
        <Link className={styles.link} href="/about">Privacy</Link>
        <Link className={styles.link} href="/about">Cookies</Link>
        <Link className={styles.link} href="/about">Terms of Service</Link>
      </ul>
    </section>
  </footer>
}