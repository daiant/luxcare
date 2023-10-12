'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';
import Menu from './menu/menu';
import DealerDialog from '../dialog/dialog';

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [dialogVisibility, setDialogVisibility] = useState(false);
  return <>
    <nav className={styles.header}>
      <img src='/menu.svg' className={styles.image} onClick={() => { setMenuVisibility(true) }}></img>
      <Link href={'/'} className={styles.logo}>L U X C A R E</Link>
      <div onClick={() => { setDialogVisibility(true) }} className={styles.link}>Dealers</div>
    </nav >
    <Menu visible={menuVisibility} onClick={() => setMenuVisibility(false)}></Menu>
    <DealerDialog visible={dialogVisibility} className={styles.dialog} onChange={() => setDialogVisibility(false)}></DealerDialog>
  </>
}