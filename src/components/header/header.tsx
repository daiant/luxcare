import styles from './header.module.css';

export default function Header() {
  return <nav className={styles.header}>
    <span>menu</span>
    <span>Luxcare</span>
    <span>Find a dealer</span>
  </nav >
}