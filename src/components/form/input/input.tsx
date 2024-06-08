import styles from './input.module.css';
export type InputProps = {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  icon?: string;
  value?: string;
  required?: boolean;
  onChange?: any;
  loading?: boolean;
}
export default function Input(props: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange ? props.onChange(event) : undefined;
  }

  function getIconClasses() {
    const classes = [
      styles.icon
    ]
    return props.loading ? classes.concat(styles.rotate).join(' ') : classes.join(' ');
  }
  return <div className={styles.wrapper}>
    <label htmlFor={props.name} className={styles.label}>
      <span>{props.label}</span>
      <input onChange={handleChange} required={props.required} type={props.type} id={props.name} name={props.name} value={props.value} className={styles.input} />
    </label>
    {Boolean(props.icon) && <img src={props.icon} alt={props.name} className={getIconClasses()} />}
  </div>

}