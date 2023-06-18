import styles from './textarea.module.css';
export type TextareaProps = {
  label: string;
  name: string;
  value?: string;

}
export default function Textarea(props: TextareaProps) {
  return <div className={styles.wrapper}>
    <label className={styles.label}>
      {props.label}
      <textarea className={styles.input} name={props.name} id={props.name} cols={30} rows={10} ></textarea>
    </label>
  </div>
}