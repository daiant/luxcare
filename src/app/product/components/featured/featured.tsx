import styles from './featured.module.css';

export default function Featured(props: { title: string, subtitle: string, action?: string, handleAction?: any }) {
  return <div className={styles.featured}>
    <p className={styles.title}>{props.title}</p>
    <p className={styles.subtitle}>{props.subtitle}</p>
    {props.action && <button className={styles.button} onClick={props.handleAction}>{props.action}</button>}
  </div>
}