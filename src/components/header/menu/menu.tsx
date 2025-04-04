'use client';
import styles from './menu.module.css';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { fetchImage } from '@/lib/fetch-image';
import { Waves, X } from 'lucide-react';

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

  return <div className={styles.wrapper} ref={menu} id={'theme-' + theme}>
    <a href="/" className={styles.home} style={{ width: '100px' }}>
      <img src={fetchImage("/images/icons/logo_simple.svg")} alt="" />
    </a>
    {/*<a href='/dealers' className={styles.icon} title='Distribuidores'>*/}
    {/*  <MapPin strokeWidth={1.25} />*/}
    {/*</a>*/}
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      {!open && <>
        {/*<span role='button'>Menú</span>*/}
        <Waves strokeWidth={1} />
      </>}
      {open && <>
        {/*<span role='button'>Cerrar</span>*/}
        <X strokeWidth={1} />
      </>}
    </div>
    <div className={styles.submenu} aria-hidden={!open}>
      <div className={styles.links}>
        <div className={styles.group}>
          <a href={'/'}>Inicio</a>
          <a href={'/series/'}>Series</a>
          {/*<a href={'/dealers/'}>Distribuidores</a>*/}
          <a href='https://www.spa.luxcare.es' target='_blank'>Blog</a>
          <a href={'/contact/'}>Contacto</a>
        </div>
        <div className={styles.group}>
          <a href={'/series/'}>Todas las series</a>
          <a href={'/series/crown/'}>Serie Crown</a>
          <a href={'/series/vector/'}>Serie Vector</a>
          <a href={'/series/strato/'}>Serie Strato</a>
          <a href={'/series/design/'}>Serie Design</a>
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
          <p>Simplemente perfecto</p>
        </div>
      </div>
    </div>
  </div >
}
