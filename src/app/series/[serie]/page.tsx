import CaretRight from '@/public/icons/CaretRight.svg';

import SeriesSliderComponent from '@/components/series/slider/series-slider';
import styles from '@/styles/individual-serie.module.css';
import Link from 'next/link';
import HomeContactForm from '@/components/home/contact/home-contact';

export default function IndividualSeriePage({ params }: { params: { serie: string } }) {
  return <div className={styles.container}>
    <section className={styles.banner}>
      <header>
        <h1>Serie Crown</h1>
        <h2>Autenticidad</h2>
      </header>
      <img src="/home/crown.webp" alt="Serie Crown" />
    </section>
    <section className={styles.mission}>
      <div className={styles.title}>
        <p className={styles.dynamic_content}>Acapara las miradas.</p>
        <p className={styles.static_content}>Trasciende lo ordinario.</p>
      </div>
      <p className={styles.spa}>Summit</p>
    </section>
    <section className={styles.media_wrapper}>
      <div className={styles.media}>
        <video src="/home/watermarked_preview.webm" autoPlay loop muted playsInline></video>
        <p>ium, quInti te non pratus repudiam
          vol orion non poreius</p>
      </div>
      <div className={styles.media}>
        <img src="/home/beach.jpg" alt="" />
        <p>ium, quInti te non pratus repudiam
          vol orion non poreius</p>
      </div>
    </section>
    <section className={styles.right}>
      <div className={styles.media}>
        <img src="/home/crown.webp" alt="Crown" />
        <div className={styles.content}>
          <p className={styles.details}>Elegancia. Exclusividad.</p>
          <p className={styles.title}>Serie Crown</p>
          <Link className={styles.link} href='#models'>Descubre los modelos</Link>
        </div>
      </div>
    </section>
    <section className={styles.left}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, unde. Delectus doloremque accusamus mollitia distinctio tenetur, hic praesentium sapiente molestiae ipsam. Fugit tenetur consequatur quaerat corrupti modi, accusamus provident expedita!</p>
      <span>Diseño y construcción</span>
      <div className={styles.media}>
        <img src="/home/crown.webp" alt="Crown" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, unde. Delectus doloremque accusamus mollitia distinctio tenetur, hic praesentium sapiente molestiae ipsam. Fugit tenetur consequatur quaerat corrupti modi, accusamus provident expedita!</p>
      <span>Diseño y construcción</span>
      <div className={styles.call}>
        <span>En LuxCare hablamos</span>
        <span>de sensaciones.</span>
      </div>
    </section>
    <section className={styles.steps}>
      <header>
        <h1>Gent dolupTat et, apiendu</h1>
      </header>
      <div className={styles.step}>
        <div className={styles.number}>01</div>
        <div className={styles.separator}></div>
        <div className={styles.content}>
          <p role='heading'>Ium, quInti te</p>
          <p role='subheading'>Ium, quInti te non pratus repudiam vol orion non poreiusEl ipsusciisi int. Aborepelent volesti untur?Ibus ute deriste lam quatis eatecatus eturibus sit eatint dolorum</p>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>02</div>
        <div className={styles.separator}></div>
        <div className={styles.content}>
          <p role='heading'>Ium, quInti te</p>
          <p role='subheading'>Ium, quInti te non pratus repudiam vol orion non poreiusEl ipsusciisi int. Aborepelent volesti untur?Ibus ute deriste lam quatis eatecatus eturibus sit eatint dolorum</p>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>03</div>
        <div className={styles.separator}></div>
        <div className={styles.content}>
          <p role='heading'>Ium, quInti te</p>
          <p role='subheading'>Ium, quInti te non pratus repudiam vol orion non poreiusEl ipsusciisi int. Aborepelent volesti untur?Ibus ute deriste lam quatis eatecatus eturibus sit eatint dolorum</p>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>04</div>
        <div className={styles.separator}></div>
        <div className={styles.content}>
          <p role='heading'>Ium, quInti te</p>
          <p role='subheading'>Ium, quInti te non pratus repudiam vol orion non poreiusEl ipsusciisi int. Aborepelent volesti untur?Ibus ute deriste lam quatis eatecatus eturibus sit eatint dolorum</p>
        </div>
      </div>
    </section>
    <section className={styles.models} id='models'>
      <header>
        <p>Conoce <span>todos los</span> <br /><span>modelos</span> Crown</p>
      </header>
      <SeriesSliderComponent />
      <div className={styles.video}>
        <video src="/home/beach.webm" autoPlay loop muted playsInline></video>
      </div>
    </section>
    <section className={styles.other_series}>
      <header>
        <p role='title'>Descubre <span>todas nuestras</span> series</p>
      </header>
      <ul>
        <li>
          <img src="/home/vector.webp" alt="Serie vector" />
          <div role='contentinfo'>
            <p className={styles.subheading}>Elegancia. Exclusividad.</p>
            <p className={styles.heading}>Serie Vector</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quibusdam officiis cum, illum in ratione quaerat delectus aut assumenda dolores rerum.</p>
            <Link href='/series/vector'>
              <span>Descubre la colección</span>
              <CaretRight />
            </Link>
          </div>
        </li>
        <li>
          <img src="/home/strato.webp" alt="Serie strato" />
          <div role='contentinfo'>
            <p className={styles.subheading}>Elegancia. Exclusividad.</p>
            <p className={styles.heading}>Serie Strato</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quibusdam officiis cum, illum in ratione quaerat delectus aut assumenda dolores rerum.</p>
            <Link href='/series/strato'>
              <span>Descubre la colección</span>
              <CaretRight />
            </Link>
          </div>
        </li>
      </ul>
    </section>
    <section className={styles.contact_cta}>
      <HomeContactForm />
    </section>
  </div>

}