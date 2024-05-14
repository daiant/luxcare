import styles from '@/styles/series.module.css';
import Link from 'next/link';
import CaretRight from '@/public/icons/CaretRight.svg';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import { SERIES } from '@/lib/spas.data';
import HomeContactForm from '@/components/home/contact/home-contact';
export default function SeriesPage() {

  return <main className={styles.container}>
    <section className={styles.banner}>
      <h1><span className={styles.gray}>Descubre</span> todos los modelos</h1>
      <div className={styles.content}>
        <div role='contentinfo'>
          <h2>
            Innovación, bienestar, experiencia: revitaliza cuerpo y mente.
          </h2>
          <hr style={{ marginBlock: 24 }} />
          <Link href={'/contact'}>
            <span>Contacta con nosotros</span>
            <CaretRight />
          </Link>
        </div>
        <video src="/home/watermarked_preview.webm" className={styles.image} autoPlay loop muted playsInline></video>
      </div>
    </section>
    {Object.values(SERIES).map(serie => {
      return <section className={styles.serie} key={serie.title}>
        <div className={styles.container}>
          <header>
            <p role='heading' aria-level={2}>
              <span>{serie.adjectives}</span>
              <span>{serie.summary.top}</span>
              <span>{serie.summary.bottom}</span>
            </p>
            <p>{serie.summary.content}</p>
          </header>
          <p className={styles.title}>
            <span>Serie</span>
            <span>{serie.title}</span>
          </p>
          <p></p>
        </div>
        <div className={styles.slider}>
          <SeriesSliderComponent models={serie.models} />
        </div>
        <div className={styles.video}>
          <video src="/home/beach.webm" autoPlay loop muted playsInline></video>
        </div>
      </section>
    })}
    <section className={styles.contact}>
      <HomeContactForm />
    </section>
  </main>
}