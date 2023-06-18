import React from "react";
import styles from './text.module.css'
export default function SerieText(props: { children: React.ReactNode }) {
  return <article className={styles.wrapper}>
    {props.children}
  </article>
}