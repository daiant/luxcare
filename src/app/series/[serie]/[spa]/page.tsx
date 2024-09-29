import HomeContactForm from '@/components/home/contact/home-contact';
import ModelSliderComponent from '@/components/models/model-slider/model-slider';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import { SERIES } from '@/lib/series.data';
import { SPAS } from '@/lib/spas.data';
import styles from '@/styles/spa.module.css';
import { notFound } from 'next/navigation';

export default function SpaPage({ params }: { params: { serie: string, spa: string } }) {
  const titleCase = (value: string): string => { return value.substring(0, 1).toUpperCase() + value.substring(1) };

  const serie = SPAS[params.serie];
  if (!serie) { notFound(); }

  const spa = serie[params.spa];
  if (!spa) notFound()

  const getSpecification = (value: string): string => { return spa.specifications.find(d => d.title.toLowerCase() === value.toLowerCase())?.value ?? ''; };
  return <main className={styles.main}>
    <div className={styles.product_wrapper}>
      <section className={styles.product}>
        <div className={styles.title_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.serie}>Serie {titleCase(params.serie)}</h2>
            <h1 className={styles.model}>Modelo {titleCase(params.spa)}</h1>
            <p>{getSpecification('jets')}, {getSpecification('asientos')}</p>
          </div>
          <div className={styles.configurator}>
            <p className={styles.title}>Variantes</p>
            {spa.variants.map(v => (
              <div className={styles.configuration} id={v.title} key={v.title}>
                <p className={styles.configuration_title}>{titleCase(v.title)}</p>
                <ul className={styles.configuration_options}>
                  {v.options.map(option => (
                    <li title={option.title} key={option.title} style={{ backgroundImage: `url(${option.src})` }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <a href="/dealers" className={styles.link_secondary}>Encuentra tu distribuidor</a>
          </div>
        </div>
        <img className={styles.product_images} src={spa.header} alt={spa.title} />
        <div className={styles.product_info}>
          <details open>
            <summary>Descripción</summary>
            <p>{spa.description}</p>
          </details>
          <details>
            <summary>Certificaciones</summary>
            {spa.certifications.map(certification => (
              <p key={certification.title}><a href={certification.src} target='_blank'>{certification.title}</a></p>
            ))}
          </details>
          <details>
            <summary>Especificaciones</summary>
            <ul>
              {spa.specifications.map(details => (
                <li key={details.title}>
                  <span>{titleCase(details.title)}</span> <strong>{details.value}</strong>
                </li>
              ))}
            </ul>
          </details>
          <details>
            <summary>Materiales</summary>
            <ul>
              {spa.materials.map(material => (
                <li key={material.type}>
                  <span>{material.type}</span> <strong>{material.value}</strong>
                </li>
              ))}
            </ul>
          </details>
          <details>
            <summary>Marca / Fabricante</summary>
            <p>{spa.maker.title}</p>
          </details>
        </div>
      </section>
      <div className={styles.product_footer}>
        <p>Serie {titleCase(params.serie)}</p>
        <p>Modelo {titleCase(params.spa)}</p>
        <p>{getSpecification('medidas')}</p>
        <p>{getSpecification('asientos')}</p>
        <a href="/contact" className={styles.link}>Contacta</a>
      </div>
    </div>
    <section className={styles.video}>
      <video src={spa.video} autoPlay loop muted playsInline></video>
    </section>
    <section className={styles.details}>
      <ul className={styles.header}>
        <li className={styles.detail}>
          <p className={styles.title}>Personas</p>
          <p className={styles.content}>{getSpecification('asientos').split(' ')[0]}</p>
        </li>
        <li className={styles.detail}>
          <p className={styles.title}>Jets</p>
          <p className={styles.content}>{getSpecification('jets').split(' ')[0]}</p>
        </li>
        <li className={styles.detail}>
          <p className={styles.title}>Peso</p>
          <p className={styles.content}>{getSpecification('peso').split('/')[0]} Kg</p>
        </li>
        <li className={styles.detail}>
          <p className={styles.title}>Volumen</p>
          <p className={styles.content}>{getSpecification('capacidad').split(' ')[0]} l</p>
        </li>
      </ul>
      <ModelSliderComponent items={spa.details} />
    </section>
    <section className={styles.design}>
      <div className={styles.main}>
        <p className={styles.heading}>Diseño by</p>
        <p className={styles.title}>{spa.design.title}</p>
        <p className={styles.content}>{spa.design.value}</p>
        <img src={spa.design.src} alt="Marquis Spas" className={styles.img} />
      </div>
      <div className={styles.aside}>
        <img src={spa.design.aside_src} alt="SPA" className={styles.img} />
      </div>
    </section>
    <section className={styles.cards}>
      {spa.landing_cards.map(card => (
        <article className={styles.card} key={card.title}>
          <h1 className={styles.title}>{card.title}</h1>
          <a href={card.href} className={styles.link}>Descubre más</a>
          <img src={card.src} alt={card.title} className={styles.img} />
        </article>
      ))}
    </section>
    <section className={styles.section}>
      <h1 className={styles.title}>Productos relacionados</h1>
      <SeriesSliderComponent models={SERIES['crown'].models} />
    </section>
    <section className={styles.section}>
      <HomeContactForm />
    </section>
  </main>
}

export async function generateStaticParams() {
  const params: Array<{ serie: string; spa: string }> = [];
  const series = Object.keys(SPAS);
  series.forEach((serie, index) => {
    const spas = Object.keys(SPAS[series[index]]);
    spas.forEach(spa => params.push({ serie, spa }));
  })

  return params;
}