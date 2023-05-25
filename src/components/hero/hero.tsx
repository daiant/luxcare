import Image from "next/image";
import { ReactNode } from "react";
import styles from './hero.module.css';

export default function Hero(props: { alt?: string, src?: string, children?: ReactNode }) {
  return <div className={styles.hero}>
    {props.src && <Image src={props.src} fill alt={props.alt || ""}></Image>}
    <div className={styles.content}>{props.children}</div>
  </div>
}