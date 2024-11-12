import HomeContactForm from '@/components/home/contact/home-contact';
import ModelSliderComponent from '@/components/models/model-slider/model-slider';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { SERIES } from '@/lib/series.data';
import { SPAS } from '@/lib/spas.data';
import styles from '@/styles/spa.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function SpaPage({ params }: { params: { serie: string, spa: string } }) {
  const serie = SPAS[params.serie];
  if (!serie) { notFound(); }

  const spa = serie[params.spa];
  if (!spa) notFound()

  const getSpecification = (value: string): string => { return spa.specifications.find(d => d.title.toLowerCase() === value.toLowerCase())?.value ?? ''; };

  return <main className={styles.main}>
    <section className={styles.banner}>
      <div className={styles.banner_highlights}>
        <p>{getSpecification('asientos')}</p>
        <p>{getSpecification('jets')}</p>
      </div>
      <div className={styles.banner_title}>
        <h1>{spa.title}</h1>
        <Button>
          <a href="/contact">Solicita presupuesto</a>
        </Button>
      </div>
      <Image className={styles.banner_img} src={spa.header} alt='SPA' loading='eager' fill />
    </section>
    <section className={styles.description}>
      <div className={styles.description_content}>
        <h2>{spa.description.split('.').at(0)}</h2>
        <p>{spa.description.split('.').slice(1).join('.')}</p>
        <ul className={styles.specifications}>
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
      </div>
      <Image src={spa.detail ?? spa.header} alt='Detalle Hot Tub'
        width={640} height={400} className={styles.description_img} style={{ width: '100%' }}></Image>
    </section>
    <section className={styles.video}>
      <video src={spa.video} autoPlay loop muted playsInline></video>
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
          <img src={card.src} alt={card.title} className={styles.img} />
          <p className={styles.title}>{card.title}</p>
          <Button className={styles.link} variant='outline'>
            <a href={card.href}>Descubre más</a>
          </Button>
        </article>
      ))}
    </section>
    <section className={styles.datasheet}>
      <Accordion type='multiple' className='max-w-[900px] mx-auto'>
        <AccordionItem value='specifications'>
          <AccordionTrigger className='text-lg'>Especificaciones</AccordionTrigger>
          <AccordionContent>
            <ul>
              {spa.specifications.map(spec => <li key={spec.title} className='flex gap-x-4 text-base px-4'>
                <p className='font-semibold'>{spec.title}</p>
                <p>{spec.value}</p>
              </li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='certifications'>
          <AccordionTrigger className='text-lg'>Certificaciones</AccordionTrigger>
          <AccordionContent>
            <ul>
              {spa.certifications.map(cert => <li key={cert.title} >
                <Button variant='link'>
                  <a href={cert.src} className='text-base'>{cert.title}</a>
                </Button>
              </li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='materials'>
          <AccordionTrigger className='text-lg'>Materiales</AccordionTrigger>
          <AccordionContent>
            <ul>
              {spa.materials.map(material => <li key={material.value} className='flex gap-x-4 text-base px-4'>
                <p className='font-semibold'>{material.type}</p>
                <p>{material.value}</p>
              </li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='variants'>
          <AccordionTrigger className='text-lg'>Variedades</AccordionTrigger>
          <AccordionContent>
            <ul className='grid gap-4'>
              {spa.variants.map(variant => <li className='text-base px-4' key={variant.title}>
                <p>{variant.title}</p>
                <ul className='flex gap-x-4'>
                  {variant.options.map(option => <li key={option.title}>
                    <img src={option.src} alt={option.title} title={option.title} className='aspect-square w-12' />
                  </li>)}
                </ul>
              </li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='maker'>
          <AccordionTrigger className='text-lg'>Design by</AccordionTrigger>
          <AccordionContent>
            <Button variant='link'>
              <a href={spa.maker.href} target='_blank' className='text-base'>{spa.maker.title}</a>
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
    <section className={styles.section}>
      <h2 className={styles.title}>Productos relacionados</h2>
      <SeriesSliderComponent models={SERIES['crown'].models} padding={0} />
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