'use client';
import Link from 'next/link';
import styles from './menu.module.css';
import React from 'react';
export default function Menu() {
  const menu = React.useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleScroll = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    const newVisible = st <= lastScroll;
    setLastScroll(st);
    setVisible(newVisible);
    if (!newVisible) setOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu, lastScroll]);

  return <div className={styles.wrapper} aria-hidden={!visible} ref={menu}>
    <Link href="/" className={styles.home}>Luxcare</Link>
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      {!open && <>
        <span role='button'>Menú</span>
        <img src="/icons/waves.svg" alt="" />
      </>}
      {open && <>
        <span role='button'>Cerrar</span>
        <img src="/icons/close.svg" alt="" />
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