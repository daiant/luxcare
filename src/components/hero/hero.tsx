import { ReactNode } from "react";
import styles from './hero.module.css';

export default function Hero(props: { alt?: string, src?: string, children?: ReactNode }) {
  return <div className={styles.hero}>
    {props.src && <img src={props.src} alt={props.alt || ""} />}
    <div className={styles.content}>{props.children}</div>
  </div>
}