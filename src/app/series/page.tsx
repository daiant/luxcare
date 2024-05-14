import styles from '@/styles/series.module.css';
import Link from 'next/link';
import CaretRight from '@/public/icons/CaretRight.svg';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import { SERIES } from '@/lib/spas.data';
export default function SeriesPage() {
  const allModels = Object.values(SERIES).flatMap(s => s.models);
  return <main className={styles.container}>
    <section className={styles.banner}>
      <h1><span className={styles.gray}>Descubre</span> todos los modelos</h1>
      <div className={styles.content}>
        <div role='contentinfo'>
          <h2>
            Innovación, bienestar, experiencia: revitaliza cuerpo y mente.
          </h2>
          <p>
            Innovación, bienestar, experiencia: revitaliza cuerpo y mente.Innovación, bienestar, experiencia: revitaliza cuerpo y mente.Innovación, bienestar, experiencia: revitaliza cuerpo y mente.
          </p>
          <Link href={'/contact'}>
            <span>Contacta con nosotros</span>
            <CaretRight />
          </Link>
        </div>
        <video src="/home/watermarked_preview.webm" className={styles.image} autoPlay loop muted playsInline></video>
      </div>
    </section>
    {[0, 1, 2].map(v => {
      return <section className={styles.serie} key={v}>
        <div className={styles.container}>
          <header>
            <p role='heading' aria-level={2}>
              <span>Grandeza. Exclusividad.</span>
              <span>Una experiencia simple</span>
              <span>mente perfecta</span>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda illo iusto nemo cumque, maiores magnam enim error nobis esse odit id necessitatibus repellendus aliquam quas deserunt quos? Labore, aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda illo iusto nemo cumque, maiores magnam enim error nobis esse odit id necessitatibus repellendus aliquam quas deserunt quos? Labore, aliquid.</p>
          </header>
          <p className={styles.title}>
            <span>Serie</span>
            <span>Crown</span>
          </p>
          <p></p>
        </div>
        <div className={styles.slider}>
          <SeriesSliderComponent models={allModels} />
        </div>
        <div className={styles.video}>
          <video src="/home/beach.webm" autoPlay loop muted playsInline></video>
        </div>
      </section>
    })}
  </main>
}