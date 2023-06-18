import styles from './input.module.css';
export type InputProps = {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  icon?: string;
  value?: string;
}
export default function Input(props: InputProps) {
  return <div className={styles.wrapper}>
    <label htmlFor={props.name} className={styles.label}>
      {props.label}
      <input type={props.type} id={props.name} name={props.name} value={props.value} className={styles.input} />
    </label>
    {props.icon && <img src='/search.svg' className={styles.icon}></img>}
  </div>

}