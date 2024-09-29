import styles from '@/styles/series.module.css';
import CaretRight from '@/public/images/icons/CaretRight.svg';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import HomeContactForm from '@/components/home/contact/home-contact';
import { SERIES } from '@/lib/series.data';
import { fetchImage } from '@/lib/fetch-image';
import FadComponent from '@/components/dealers/fad/fad';

export default function SeriesPage() {
  return <main className={styles.container}>
    <section className={styles.banner}>
      <h1><span className={styles.gray}>Descubre</span> todos los modelos</h1>
      <div className={styles.content}>
        <div role='contentinfo'>
          <h2>
            Innovación, bienestar, experiencia: revitaliza cuerpo y mente.
          </h2>
          <p style={{ marginBlock: 24 }}></p>
          <a href={'#next'} className={styles.link}>
            <span>Descubre</span>
            <CaretRight />
          </a>
        </div>
        <video src={fetchImage("/images/burbuja.webm")} className={styles.image} autoPlay loop muted playsInline></video>
      </div>
    </section>
    <div id='next'>
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
              <a href={serie.url} className={styles.link}>
                <span>Ir a la colección</span>
                <CaretRight /></a>
            </header>
            <p className={styles.title}>
              <span>Serie</span>
              <span>{serie.title}</span>
            </p>
            <p></p>
          </div>
          <div className={styles.video}>
            <img alt='' src={fetchImage('/images/spas/' + serie.title.toLowerCase() + '.webp')} fill/>
          </div>
          <div className={styles.slider}>
            <SeriesSliderComponent models={serie.models} />
          </div>
        </section>
      })}
    </div>
    <FadComponent />
    <section className={styles.contact}>
      <HomeContactForm />
    </section>
  </main>
}