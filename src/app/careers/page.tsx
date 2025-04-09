/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';
import { fetchImage } from '@/lib/fetch-image';
import styles from '@/styles/careers.module.css';
import Caret from '@/public/images/icons/CaretRight.svg';
import React from 'react';

export default function Careers() {
  const [active, setActive] = React.useState(-1);
  React.useEffect(() => {
    if (active < 0) return;
    const carousel = document.querySelector('#carousel')
    const next = carousel?.children[active];
    next?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

  }, [active]);
  function scroll_next() {
    const carousel = document.querySelector('#carousel');
    if (!carousel) return;
    const gap = getComputedStyle(carousel).gap.replace('px', '');
    const next = carousel.children[0]?.getBoundingClientRect();
    document.querySelector('#carousel')?.scrollTo({
      left: carousel.scrollLeft + next.width + Number(gap),
      behavior: 'smooth'
    })
  }
  return <main className={styles.main}>
    <section className={styles.carousel_wrapper}>
      <p role='heading' aria-level={1}>Trabaja con nosotros</p>
      <div className={styles.carousel} id='carousel'>
        <div className={styles.item}>
          <p className={styles.title}>Nuestra herencia</p>
          <p className={styles.content}>En LuxCare Spas, creemos en la fuerza de las personas para cambiar el mundo. Nos esforzamos por crear un entorno propicio donde nuestros empleados puedan prosperar y alcanzar su máximo potencial.</p>
          <p className={styles.action} onClick={scroll_next}>Nuestra apuesta</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Nuestra apuesta</p>
          <p className={styles.content}>Apostamos por el aprendizaje, la innovación y el desarrollo del talento de cada individuo en nuestra empresa. Nuestro objetivo es simple: queremos ser la empresa de tus sueños, donde nuestros equipos se sientan valorados, inspirados y motivados para alcanzar el éxito. Y lo lograremos con pasión, compromiso, confianza, emoción e innovación en cada paso del camino.</p>
          <p className={styles.action} onClick={scroll_next}>Nuestro objetivo</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Nuestro objetivo</p>
          <p className={styles.content}>Unirse a LuxCare Spas es formar parte de un proyecto con una trayectoria en la industria del bienestar. Con más de 25 años, seguimos evolucionando y transformando la experiencia de nuestros clientes en todo el país.  Al unirte a nosotros, te integrarás en un equipo de profesionales apasionados que comparten el compromiso de brindar lo mejor en relajación y confort a cada hogar.</p>
          <p className={styles.action} onClick={scroll_next}>Únete</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Trabaja con nosotros</p>
          <p className={styles.content}>En LuxCare Spas, tenemos un compromiso absoluto
            con nuestros clientes. Nos esforzamos constantemente por comprender sus necesidades y ofrecerles el mejor servicio posible, para que cada interacción con nosotros tenga un significado especial y sea valorada por ellos.</p>
          <br />
          <p className={styles.content}> Para nosotros, el servicio al cliente es nuestra razón de ser. Trabajar en LuxCare Spas significa formar parte de un entorno lleno de posibilidades. Es ser parte de un proyecto empresarial sólido, dinámico y flexible, que apuesta continuamente por la innovación y está comprometido con la sociedad.</p>
          <a href='mailto:web@luxcare.es' className={styles.action}>Trabaja con nosotros</a>
        </div>
      </div>
      {/* <video src={fetchImage('/images/burbuja.webm')} className={styles.video} autoPlay loop muted playsInline ></video> */}
      <ul className={styles.controls}>
        <li aria-selected={active <= 0} onClick={() => setActive(0)}>Herencia</li>
        <li aria-selected={active == 1} onClick={() => setActive(1)}>Apuesta</li>
        <li aria-selected={active == 2} onClick={() => setActive(2)}>Objetivo</li>
        <li aria-selected={active == 3} onClick={() => setActive(3)}>Únete</li>
      </ul>
    </section>
    <section className={styles.list}>
      <aside>
        <img src={fetchImage('/images/spas/crown.webp')} alt="" />
      </aside>
      <main>
        <div className={styles.item}>
          <p className={styles.title}>Superarnos cada día</p>
          <p className={styles.content}>Nuestro compromiso se basa en el desarrollo continuo del conocimiento, las habilidades y el intercambio de experiencias entre todos los miembros de nuestra compañía.</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Igualdad de oportunidades</p>
          <p className={styles.content}>
            Nos comprometemos a impulsar la diversidad y la inclusión en todos los aspectos de nuestra empresa. Nuestros procesos están diseñados para celebrar las diferencias y fomentar un ambiente profesional e inclusivo donde todas las personas sean valoradas y respetadas.
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Determinación imparable</p>
          <p className={styles.content}>
            Somos personas motivadas, creativas, con una mentalidad abierta y una determinación imparable. Nos enorgullece nuestra eficacia y agilidad en todo lo que hacemos.  Contamos con un equipo excepcional que trabaja con pasión y dedicación para ofrecer la mejor experiencia posible.
          </p>
        </div>
      </main>
    </section>
    <section className={styles.video_wrapper}>
      <header>
        <h1>Contamos contigo</h1>
        <div>
          <p>
            Te invitamos a formar parte de una de las principales empresas nacionales en el mundo del bienestar y la relajación. Ofrecemos el mejor servicio posible, para que cada interacción con nosotros tenga un significado especial. Para nosotros, el servicio al cliente es nuestra razón de ser.
          </p>
          <p>
            Trabajar en LuxCare Spas significa formar parte de un entorno lleno de posibilidades.  Es ser parte de un proyecto empresarial sólido, dinámico y flexible, que apuesta continuamente por la innovación y está comprometido con la sociedad.</p>
        </div>
      </header>
      <video src={fetchImage('/images/burbuja.webm')} autoPlay loop playsInline muted></video>
      <footer>
        <p>Cada una de las personas que forman parte de LuxCare Spas aporta su pasión, dinamismo y dedicación a nuestro proyecto común.</p>
      </footer>
    </section>
    <section className={styles.trajectory}>
      <header>
        <h1>Más de 25 años <u>de historia</u></h1>
        <p>Con más de 25 años, seguimos evolucionando y transformando la experiencia de nuestros clientes en todo el país.</p>
      </header>
      <main>
        <div>
          <p>Somos un equipo de profesionales apasionados</p></div>
        <div>
          <p>Mejoramos la calidad de vida de nuestros clientes</p></div>
        <div>
          <p>Comprendenos las necesidades de nuestros clientes</p></div>
      </main>
    </section>
    <section className={styles.cta}>
      <h1>Desarrolla todo tu talento con Luxcare Spas</h1>
      <main>
        <p>Conoce a tu próximo equipo de
          trabajo. Comparte el compromiso
          de brindar lo mejor en relajación y
          confort a cada hogar.</p>
        <div className={styles.contact}>
          <p className={styles.title}>Contáctanos</p>
          <p className={styles.subtitle}>Cuéntanos tu visión y tus conocimientos</p>
          <a href="mailto:info@luxcare.es">
            <span>info@luxcare.es</span>
            <Caret />
          </a>
        </div>
      </main>
    </section>
  </main >
}