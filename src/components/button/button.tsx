import { ReactNode } from "react"
import styles from './button.module.css';

export type ButtonVariant = "primary" | "secondary"
export default function Button(props: { variant?: ButtonVariant, handleAction: any, children: ReactNode }) {
  function getClassname(): string {
    const classList = [styles.button];
    if (props.variant) { classList.push(`styles.${props.variant}`); }
    return classList.join(" ");
  }
  return <button onClick={props.handleAction} className={getClassname()}>{props.children}</button>
}