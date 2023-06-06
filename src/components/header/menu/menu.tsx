'use client';

import { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { Routes, routes } from './menu.routing';
import Link from 'next/link';
import Parallax from '@/components/parallax/parallax';
import Image from 'next/image';
export default function Menu(props: { visible: boolean, onClick: any }) {
  const [children, setChildren] = useState<Routes>([]);
  function handleChildren(children?: Routes) {
    if (!children) return;
    setChildren(children);
  }
  useEffect(() => {
    if (!props.visible) {
      setChildren([]);
      document.body.style.overflow = "visible";
    }
    else {
      document.body.style.overflow = 'hidden';
    }
  }, [props.visible])
  return <>
    <div className={styles.mask} onClick={props.onClick} aria-hidden={!props.visible}></div>
    <menu aria-hidden={!props.visible} className={styles.menu}>
      <div className={styles.close} onClick={props.onClick}>close</div>
      <ul className={styles.list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.item}>
            {!route.routes && <Link href={route.url} className={styles['item--link']}>{route.name}</Link>}
            {route.routes && <span className={`${styles['item--link']} ${styles['item--link__parent']}`} onClick={() => handleChildren(route.routes)}>{route.name}</span>}
          </li>
        ))}
      </ul>
    </menu>
    {children.length > 0 && <div className={styles.submenu}>
      <ul className={styles.list}>
        {children.map((route) => <li key={route.name} className={styles['submenu--list--item']}>
          <Link href={route.url} onClick={props.onClick}>
            <p className={styles.title}>{route.name}</p>
            <Image src="/test.jpg" alt='' className={styles.image} fill></Image>
          </Link>
        </li>)}
      </ul>
    </div>}
  </>
}