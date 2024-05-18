'use client';
import Link from 'next/link';
import styles from './menu.module.css';
import React, { useEffect, useState } from 'react';
import Waves from '../../../../public/icons/waves.svg';
import Close from '../../../../public/icons/close.svg';
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
    <Link href="/" className={styles.home}>Luxcare</Link>
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
          <Link href={'/'}>Inicio</Link>
          <Link href={'/series'}>Series</Link>
          <Link href={'/blog'}>Blog</Link>
          {/* <Link href={'/recommendations'}>Recomendaciones</Link> */}
          <Link href={'/contact'}>Contacto</Link>
        </div>
        <div className={styles.group}>
          <Link href={'/series'}>Todas las series</Link>
          <Link href={'/series/crown'}>Serie Crown</Link>
          <Link href={'/series/vector'}>Serie Vector</Link>
          <Link href={'/series/strato'}>Serie Strato</Link>
        </div>
      </div>
    </div>
  </div >
}