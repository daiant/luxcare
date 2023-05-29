import Button from '@/components/button/button';
import styles from './featured.module.css';

export default function Featured(props: { title: string, subtitle: string, action?: string, handleAction?: any }) {
  return <div className={styles.featured}>
    <p className={styles.title}>{props.title}</p>
    <p className={styles.subtitle}>{props.subtitle}</p>
    {props.action && <Button handleAction={props.handleAction}>{props.action}</Button>}
  </div>
}