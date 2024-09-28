import Image from 'next/image';
import styles from './details.module.css';
type Detail = {
  image: string;
  title: string;
  text: string;
}
export type SerieDetailProps = {
  details: Detail[]
}
export default function SerieDetail(props: SerieDetailProps) {
  return <section className={styles.wrapper}>
    {props.details.map((detail, index) => (
      <article key={'detail-' + index} className={styles.article}>
        <Image src={detail.image} alt="" className={styles.image} />
        <div className={styles.info}>
          <span className={styles.title}>{detail.title} </span>
          <span className={styles.content}>{detail.text}</span>
        </div>
      </article>
    ))}
  </section>
}