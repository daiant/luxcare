'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';
import Menu from './menu/menu';
import DealerDialog from '../dialog/dialog';

export default function Header({ transparent }: { transparent?: boolean }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const getClassList = () => {
    if (transparent) return `${styles.header} ${styles.transparent}`;
    else return styles.header;
  }
  return <>
    <nav className={getClassList()}>
      <img src='/menu.svg' className={styles.image} onClick={() => { setMenuVisibility(true) }}></img>
      <Link href={'/'} className={styles.logo}>
        <img src="/icons/luxcare.svg" alt="L U X C A R E" />
      </Link>
      <Link href='/dealers' className={styles.link}>Dealers</Link>
    </nav >
    <Menu visible={menuVisibility} onClick={() => setMenuVisibility(false)}></Menu>
  </>
}