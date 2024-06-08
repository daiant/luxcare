'use client';
import styles from '@/styles/careers.module.css';
import React from 'react';

export default function Careers() {
  const [active, setActive] = React.useState(-1);
  React.useEffect(() => {
    if (active < 0) return;
    const carousel = document.querySelector('#carousel')
    const next = carousel?.children[active];
    console.log(next);
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
        <li aria-selected={active == 0} onClick={() => setActive(0)} role='button'>Herencia</li>
        <li aria-selected={active == 1} onClick={() => setActive(1)} role='button'>Apuesta</li>
        <li aria-selected={active == 2} onClick={() => setActive(2)} role='button'>Objetivo</li>
        <li aria-selected={active == 3} onClick={() => setActive(3)} role='button'>Únete</li>
      </ul>
    </section>
  </main >
}