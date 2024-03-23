import React from 'react'
import styles from './news-summary.module.css';
import Link from 'next/link';

export default function NewsSummary() {
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
  return <section className='main-section'>
    <p role='heading' className={styles.title}>Continue exploring</p>
    <ul className={styles.list}>
      {news.map(n => <li key={n.title}>
        <Link href={n.url}>
          <img src={n.src} alt={n.subtitle} />
          <p role='heading'>{n.title}</p>
          <p role='contentinfo'>{n.subtitle}</p>
        </Link>
      </li>)}
    </ul>
  </section>
}