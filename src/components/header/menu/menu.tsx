'use client';

import { useEffect, useState } from 'react';
import styles from './menu.module.css';
import { Routes, routes } from './menu.routing';
import Link from 'next/link';
export default function Menu(props: { visible: boolean, onClick: any }) {
  const [children, setChildren] = useState<Routes>([]);
  function handleChildren(children?: Routes) {
    if (!children) return;
    setChildren(children);
  }
  useEffect(() => {
  }, [props.visible])
  return <>
    <div className={styles.mask} onClick={props.onClick} aria-hidden={!props.visible}></div>
    <menu aria-hidden={!props.visible} className={styles.menu}>
      <ul className={styles.list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.item}>
            {!route.routes && <Link href={route.url} className={styles['item--link']}>{route.name}</Link>}
            {route.routes && <span className={`${styles['item--link']} ${styles['item--link__parent']}`} onClick={() => handleChildren(route.routes)}>{route.name}</span>}
          </li>
        ))}
      </ul>
    </menu>
    {children.length && <div className={styles.submenu}>
      eiiii
    </div>}
  </>
}