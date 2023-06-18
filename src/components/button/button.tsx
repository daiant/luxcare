'use client';

import { ReactNode } from "react"
import styles from './button.module.css';
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary"
export default function Button(props: { variant?: ButtonVariant, handleAction: string, children: ReactNode, type?: string }) {
  function getClassname(): string {
    const classList = [styles.button];
    if (props.variant === 'secondary') { classList.push(styles.secondary); }
    return classList.join(" ");
  }
  return <Link href={props.handleAction || ''} className={getClassname()}>{props.children}</Link>
}