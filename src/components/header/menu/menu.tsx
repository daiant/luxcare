'use client';

import { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { Routes, routes } from './menu.routing';
import Link from 'next/link';
import Image from 'next/image';
export default function Menu(props: { visible: boolean, onClick: any }) {
  const [children, setChildren] = useState<Routes>([]);
  const [opacity, setOpacity] = useState(1);
  const OPACITY_DELAY = 400;
  function handleChildren(routes?: Routes) {
    if (!routes) return;
    setOpacity(0);
    setTimeout(() => { setOpacity(1); setChildren(routes); }, OPACITY_DELAY);
  }
  useEffect(() => {
    if (!props.visible) {
      document.body.style.overflow = "visible";
      handleChildren([]);
    }
    else {
      document.body.style.overflow = 'hidden';
    }
  }, [props.visible])
  return <>
    <div className={styles.mask} onClick={props.onClick} aria-hidden={!props.visible}></div>
    <menu aria-hidden={!props.visible} className={styles.menu}>
      <div className={styles.close} onClick={props.onClick}>
        <img src="/close.svg" className={styles['close--img']} alt="" />
      </div>
      <ul className={styles.list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.item}>
            {!route.routes && <Link href={route.url} className={styles['item--link']} onClick={props.onClick}>{route.name}</Link>}
            {route.routes && <span className={styles['item--link']} onClick={() => handleChildren(route.routes)}>
              {route.name}
              {/* <img src="/next.svg" alt="" className={styles.img} /> */}
            </span>}
          </li>
        ))}
      </ul>
    </menu>
    {children.length > 0 && <div className={styles.submenu} style={{ '--opacity': opacity } as React.CSSProperties}>
      <ul className={styles.list}>
        {children.map((route, index) => <li key={route.name + index} className={styles['submenu--list--item']}>
          <Link href={route.url} onClick={props.onClick} className={styles['submenu--list--item--link']}>
            <Image src="/test.jpg" alt='' className={styles.image} fill></Image>
          </Link>
          <div className={styles.info}>
            <h2>{route.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero quos iste sunt harum aspernatur sit neque nam asperiores quisquam ut perspiciatis, exercitationem atque illum. Error esse quae suscipit voluptatum.</p>
          </div>
        </li>)}
      </ul>
    </div>}
  </>
}