import { ReactNode } from "react";
import styles from './parallax.module.css';
import Image from "next/image";

export default function Parallax(props: { alt?: string, src?: string, children?: ReactNode }) {

  return <div className={styles.wrapper}>
    <div className={styles.mask}></div>
    {props.src && <Image src={props.src} fill alt={props.alt || ""}></Image>}
    <div className={styles.content}>{props.children}</div>
  </div>
}