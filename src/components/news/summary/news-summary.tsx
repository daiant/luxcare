'use client';

import React from 'react'
import styles from './news-summary.module.css';
import Caret from '../../../../public/icons/CaretRight.svg';

export default function NewsSummary() {
  const [img, setImg] = React.useState(0);
  const news = [
    {
      title: 'Prueba',
      subtitle: 'Subtitulo prueba',
      src: '/news/ghost.png',
      url: '/news/ghost/',
    },
    {
      title: 'Prueba 1',
      subtitle: 'Subtitulo prueba',
      src: '/news/ghost.png',
      url: '/news/ghost/',
    },
    {
      title: 'Prueba 2',
      subtitle: 'Subtitulo prueba',
      src: '/news/ghost.png',
      url: '/news/ghost/',
    }
  ]
  function handleOver(index: number): void {
    setImg(index);
  }
  return <section className={styles.wrapper}>
    <aside className={styles.img}>
      <img aria-hidden={img !== 0} src={'/news/ghost.png'} loading='lazy' alt='' width={960} height={960} />
      <img aria-hidden={img !== 1} src={'/home/beach.jpg'} loading='lazy' alt='' width={960} height={960} />
      <img aria-hidden={img !== 2} src={'/home/crown.webp'} loading='lazy' alt='' width={960} height={960} />
      <img aria-hidden={img !== 3} src={'/home/strato.webp'} loading='lazy' alt='' width={960} height={960} />
    </aside>
    <main className={styles.posts}>
      <div className={styles.post} onMouseOver={() => handleOver(0)}>
        <p role='title'>
          <span>Tu piscina sufre</span>
          <Caret className={styles.caret} />
        </p>
        <p role='subtittle'>LuxCare conoce la solución a todos tus problemas</p>
      </div>
      <div className={styles.post} onMouseOver={() => handleOver(1)}>
        <p role='title'>
          <span>Tu piscina sufre</span>
          <Caret className={styles.caret} />
        </p>
        <p role='subtittle'>LuxCare conoce la solución a todos tus problemas</p>
      </div>
      <div className={styles.post} onMouseOver={() => handleOver(2)}>
        <p role='title'>
          <span>Tu piscina sufre</span>
          <Caret className={styles.caret} />
        </p>
        <p role='subtittle'>LuxCare conoce la solución a todos tus problemas</p>
      </div>
      <div className={styles.post} onMouseOver={() => handleOver(3)}>
        <p role='title'>
          <span>Tu piscina sufre</span>
          <Caret className={styles.caret} />
        </p>
        <p role='subtittle'>LuxCare conoce la solución a todos tus problemas</p>
      </div>
    </main>
    <a className={styles.link} href={'/blog'}>
      <span>Ir al blog</span>
      <span>{'>'}</span>
    </a>

  </section>
}