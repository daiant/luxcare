import styles from './info.module.css';
export type ProductInfo = { title: string, subtitle: string, content: string };
export default function Info(props: { info: ProductInfo[] }) {
  return <ul className={styles.wrapper}>
    {props.info.map((info: ProductInfo, index: number) => {
      return <li key={index} className={styles.item}>
        <p className={styles.title}>{info.title} <span>{info.subtitle}</span></p>
        <p className={styles.content}>{info.content}</p>
      </li>
    })
    }
  </ul>
}