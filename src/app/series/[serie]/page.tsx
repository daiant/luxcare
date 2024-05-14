import CaretRight from '@/public/icons/CaretRight.svg';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import styles from '@/styles/individual-serie.module.css';
import Link from 'next/link';
import HomeContactForm from '@/components/home/contact/home-contact';
import SerieBannerComponent from '@/components/series/banner/banner';
import { SERIES } from '@/lib/spas.data';
import { notFound } from 'next/navigation';

export default function IndividualSeriePage({ params }: { params: { serie: string } }) {
  const slug = params.serie;

  const serie = SERIES[slug as keyof typeof SERIES];
  if (!serie) notFound()
  else
    return <div className={styles.container}>
      <section className={styles.banner}>
        <header>
          <h1>Serie {serie.title}</h1>
          <h2>{serie.adjective}</h2>
        </header>
        <img src="/home/crown.webp" alt={serie.title} />
      </section>
      <SerieBannerComponent data={serie.mission} />
      <section className={styles.media_wrapper}>
        <div className={styles.media}>
          <video src="/home/watermarked_preview.webm" autoPlay loop muted playsInline></video>
          <p>{serie.multimedia.left}</p>
        </div>
        <div className={styles.media}>
          <img src="/home/beach.jpg" alt="" />
          <p>{serie.multimedia.right}</p>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.media}>
          <img src="/home/crown.webp" alt={serie.title} />
          <div className={styles.content}>
            <p className={styles.details}>{serie.adjective}</p>
            <p className={styles.title}>Serie {serie.title}</p>
            <Link className={styles.link} href='#models'>Descubre los modelos</Link>
          </div>
        </div>
      </section>
      <section className={styles.left}>
        <p>{serie.left.top}</p>
        <span>Diseño y construcción</span>
        <div className={styles.media}>
          <img src="/home/crown.webp" alt="Crown" />
        </div>
        <p>{serie.left.bottom}</p>
        <span>Diseño y construcción</span>
        <div className={styles.call}>
          <span>En LuxCare hablamos</span>
          <span>de sensaciones.</span>
        </div>
      </section>
      <section className={styles.steps}>
        <header>
          {/* <h1>Gent dolupTat et, apiendu</h1> */}
        </header>
        {serie.steps.map((step, index) => (<div className={styles.step} key={step.title}>
          <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
          <div className={styles.separator}></div>
          <div className={styles.content}>
            <p role='heading'>{step.title}</p>
            <p role='subheading'>{step.content}</p>
          </div>
        </div>))}
      </section>
      <section className={styles.models} id='models'>
        <header>
          <p>Conoce <span>todos los</span> <br /><span>modelos</span> {serie.title}</p>
        </header>
        <SeriesSliderComponent models={serie.models} />
        <div className={styles.video}>
          <video src="/home/beach.webm" autoPlay loop muted playsInline></video>
        </div>
      </section>
      <section className={styles.other_series}>
        <header>
          <p role='title'>Descubre <span>todas nuestras</span> series</p>
        </header>
        <ul>
          {serie.other_series.map(other => (
            <li key={other.title}>
              <img src="/home/vector.webp" alt={other.title} />
              <div role='contentinfo'>
                <p className={styles.subheading}>{other.subheading}</p>
                <p className={styles.heading}>{other.title}</p>
                <p>{other.content}</p>
                <Link href={other.url}>
                  <span>Descubre la colección</span>
                  <CaretRight />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.contact_cta}>
        <HomeContactForm />
      </section>
    </div>

}