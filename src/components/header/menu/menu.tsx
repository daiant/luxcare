'use client';
import Link from 'next/link';
import styles from './menu.module.css';
import React from 'react';
export default function Menu() {
  const menu = React.useRef<HTMLDivElement>(null);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const handleScroll = () => {
    const st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    setLastScroll(st);
    setVisible(st <= lastScroll);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu, lastScroll]);

  return <div className={styles.wrapper} aria-hidden={!visible} ref={menu}>
    <Link href="/" className={styles.home}>Luxcare</Link>
    <div className={styles.burger}>Menú</div>
  </div >
}