'use client';
import styles from './menu.module.css';
import React, { useState } from 'react';
import Waves from '@/public/images/icons/waves.svg';
import Close from '@/public/images/icons/close.svg';
import { usePathname } from 'next/navigation';
export default function Menu() {
  const [theme, setTheme] = useState('light');
  const menu = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setTheme(
      localStorage.getItem('theme') || 'light',
    )
  }, []);
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleTheme() {
    if (theme === 'dark') {
      localStorage?.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage?.setItem('theme', 'dark');
      setTheme('dark');
    }
  }
  return <div className={styles.wrapper} ref={menu} id={'theme-' + theme}>
    <a href="/" className={styles.home}>Luxcare</a>
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      {!open && <>
        <span role='button'>Menú</span>
        <Waves />
        {/* <img src="/icons/waves.svg" alt="" /> */}
      </>}
      {open && <>
        <span role='button'>Cerrar</span>
        <Close />
      </>}
    </div>
    <div className={styles.submenu} aria-hidden={!open}>
      <div className={styles.links}>
        <div className={styles.group}>
          <a href={'/'}>Inicio</a>
          <a href={'/series/'}>Series</a>
          <a href='https://www.spa.luxcare.es' target='_blank'>Blog</a>
          <a href={'/contact/'}>Contacto</a>
        </div>
        <div className={styles.group}>
          <a href={'/series/'}>Todas las series</a>
          <a href={'/series/crown/'}>Serie Crown</a>
          <a href={'/series/vector/'}>Serie Vector</a>
          <a href={'/series/strato/'}>Serie Strato</a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.group}>
          <a href="//facebook.com">Facebook</a>
          <a href="//x.com">X</a>
          <a href="//linkedin.com">LinkedIn</a>
          <a href="//instagram">Instagram</a>
        </div>
        <div className={styles.group}>
          <a href="/about">Simplemente perfecto</a>
        </div>
      </div>
    </div>
  </div >
}