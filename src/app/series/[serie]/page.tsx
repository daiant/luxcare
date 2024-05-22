import CaretRight from '@/public/images/icons/CaretRight.svg';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import styles from '@/styles/individual-serie.module.css';
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
        <img src={serie.header} alt={serie.title} />
      </section>
      <SerieBannerComponent data={serie.mission} video={serie.video} />
      <section className={styles.media_wrapper}>
        <div className={styles.media}>
          <img src={serie.cta_2_img} alt={serie.multimedia.right} />
          <p className={styles.media_content}>{serie.multimedia.left}</p>
        </div>
        <div className={styles.media}>
          <img src={serie.multimedia.right_src} alt="" />
          <p className={styles.media_content}>{serie.multimedia.right}</p>
        </div>
        <div className={styles.media}>
          <img src={serie.cta_img} alt="Crown" />
          <div className={styles.media_content}>
            <p>{serie.left.top}</p>
            <p>{serie.left.bottom}</p>
            <p>Diseño y construcción</p>
          </div>
        </div>
      </section >
      <section className={styles.steps}>
        <header>
          <div className={styles.call}>
            <span>En LuxCare hablamos</span>
            <span>de sensaciones.</span>
          </div>
        </header>
        {serie.steps.map((step, index) => (<div className={styles.step} key={step.title}>
          <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
          <div className={styles.separator}></div>
          <div className={styles.content}>
            <p role='heading'>{step.title}</p>
            <p role='subheading'>{step.content}</p>
            {Boolean(step.link) && <a href={step.link}>
              <span>Conocer más</span>
              <CaretRight />
            </a>}
          </div>
        </div>))}
      </section>
      <section className={styles.models} id='models'>
        <header>
          <p>Conoce <span>todos los</span> <br /><span>modelos</span> {serie.title}</p>
        </header>
        <SeriesSliderComponent models={serie.models} />
      </section>
      <section className={styles.other_series}>
        <header>
          <p role='title'>Descubre <span>todas nuestras</span> series</p>
        </header>
        <ul>
          {serie.other_series.map(other => (
            <li key={other.title}>
              <a href={other.url}>
                <img src={other.src} alt={other.title} />
              </a>
              <div role='contentinfo'>
                <p className={styles.subheading}>{other.subheading}</p>
                <a href={other.url}>
                  <p className={styles.heading}>{other.title}</p>
                </a>
                <p>{other.content}</p>
                <a href={other.url}>
                  <span>Descubre la colección</span>
                  <CaretRight />
                </a>
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

export async function generateStaticParams() {
  const series = Object.keys(SERIES);

  return series.map((serie) => ({
    serie: serie,
  }))
}