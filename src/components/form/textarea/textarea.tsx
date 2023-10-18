import styles from './textarea.module.css';
export type TextareaProps = {
  label: string;
  name: string;
  value?: string;
  required?: boolean;
  onChange: any;
}
export default function Textarea(props: TextareaProps) {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onChange(event);
  }

  return <div className={styles.wrapper}>
    <label className={styles.label}>
      {props.label}
      <textarea onChange={handleChange} required={props.required} className={styles.input} name={props.name} id={props.name} cols={30} rows={5} ></textarea>
    </label>
  </div>
}