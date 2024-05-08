'use client';
import Link from 'next/link';
import styles from './menu.module.css';
import React, { useState } from 'react';
import Waves from '../../../../public/icons/waves.svg';
import Close from '../../../../public/icons/close.svg';
export default function Menu() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? 'dark';
  });

  const menu = React.useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleScroll = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    const hidden = st >= lastScroll;
    if (hidden && st - lastScroll < 20) return;
    setVisible(!hidden);
    if (hidden) setOpen(false);
    if (hidden) setLastScroll(st);
  };

  function handleTheme() {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu, lastScroll]);

  return <div className={styles.wrapper} aria-hidden={!visible} ref={menu} id={'theme-' + theme}>
    <Link href="/" className={styles.home}>Luxcare</Link>
    <img src={theme === 'dark' ? "/icons/sun.svg" : '/icons/moon.svg'} alt="" className={styles.theme} onClick={handleTheme} />
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
    <div className={styles.submenu} aria-hidden={!visible || !open}>
      <div className={styles.links}>
        <div className={styles.group}>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/series'}>Series</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/recommendations'}>Recomendaciones</Link>
          <Link href={'/contact'}>Contacto</Link>
        </div>
        <div className={styles.group}>
          <Link href={'/series/crown'}>Serie Crown</Link>
          <Link href={'/series/vector'}>Serie Vector</Link>
          <Link href={'/series/strato'}>Series</Link>
        </div>
      </div>
    </div>
  </div >
}