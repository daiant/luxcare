'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';
import Menu from './menu/menu';

export default function Header() {
  const [visible, setVisible] = useState(false);
  return <>
    <nav className={styles.header}>
      <img src='/menu.svg' className={styles.image} onClick={() => { setVisible(true) }}></img>
      <Link href={'/'} className={styles.logo}><img src='/logo.png'></img></Link>
      <img src="/search.svg" className={styles.image} />
    </nav >
    <Menu visible={visible} onClick={() => setVisible(false)}></Menu>
  </>
}