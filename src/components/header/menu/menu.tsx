'use client';

import { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { Routes } from './menu.routing';
import Link from 'next/link';
export default function Menu(props: { visible: boolean, onClick: any }) {
  const [children, setChildren] = useState<Routes>([]);
  const [opacity, setOpacity] = useState(1);
  const OPACITY_DELAY = 0;
  function handleChildren(routes?: Routes) {
    if (!routes) return;
    setOpacity(0);
    setTimeout(() => { setOpacity(1); setChildren(routes); }, OPACITY_DELAY);
  }
  useEffect(() => {
    if (!props.visible) {
      handleChildren([]);
    }
    else {
    }
  }, [props.visible])
  return <div className={styles.wrapper}>
    <div className={styles.mask} onClick={props.onClick} aria-hidden={!props.visible}></div>
    <div className={styles.close} onClick={props.onClick} aria-hidden={!props.visible}>
      <img src="/icons/close.svg" className={styles['close--img']} alt="" />
    </div>
    <article className={styles.menu} aria-hidden={!props.visible}>
      <div role='contentgroup'>
        <ul>
          <li><Link href='/'>Inicio</Link></li>
        </ul>
      </div>
      <div role='contentgroup'>
        <ul>
          {/* <li role='heading'><Link href='/spas'>Series</Link></li> */}
          <li><Link href='/spas/vector'>Vector</Link></li>
          <li><Link href='/spas/strato'>Strato</Link></li>
          <li><Link href='/spas/crown'>Crown</Link></li>
        </ul>
      </div>
      <div role='contentgroup'>
        <ul>
          <li><Link href='/news'>Noticias</Link></li>
          <li><Link href='/recommendations'>Recomendaciones</Link></li>
        </ul>
      </div>
      <div role='contentgroup'>
        <ul>
          <li><Link href='/contact'>Contacto</Link></li>
        </ul>
      </div>
    </article>
  </div >
}