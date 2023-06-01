'use client';

import { useEffect } from 'react';
import styles from './menu.module.css';
export default function Menu(props: { visible: boolean, onClick: any }) {
  useEffect(() => {
    console.log(props.visible)
  }, [props.visible])
  return <menu aria-hidden={!props.visible} className={styles.menu} onClick={props.onClick}>
    <div className={styles.mask}></div>
  </menu >
}