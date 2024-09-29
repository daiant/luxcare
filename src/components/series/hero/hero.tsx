import styles from './hero.module.css';

type Props = {
  title: string,
  subttitle: string,
  image: string,
}

export default function SerieHero(props: Props) {
  return <main className={styles.wrapper}>
    <div className={styles.info}>
      <h1 className='hero__title'>{props.title}</h1>
      <h2 className='hero__subtitle'>{props.subttitle}</h2>
    </div>
    <div className={styles.image}>
      <img src={props.image} alt={props.title}/>
    </div>
  </main>
}
