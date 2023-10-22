'use client';

import React from 'react';
import { getSpaSeries } from "@/lib/spa.utils"
import { Serie } from '@/app/types/spa.types';
import styles from './carousel.module.css';
import Button from '../button/button';


export default function Carousel() {
  const [series, setSeries] = React.useState<Serie[]>([]);
  const [activeLi, setActiveLi] = React.useState(0);
  const listRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    setSeries(getSpaSeries());
  }, []);

  function scrollTo(index: number) {
    if (!listRef.current) return;
    const rect = listRef.current.children[index]?.getBoundingClientRect();
    const listRect = listRef.current.getBoundingClientRect();
    listRef.current.scrollBy({
      top: 0,
      left: rect.left,
      behavior: 'smooth'
    });
  }

  function handlePrevious() {
    if (!listRef.current) return;
    let next = activeLi - 1;
    if (next < 0) next = listRef.current.children.length - 1;

    setActiveLi(next);
    scrollTo(next);
  }
  function handleNext() {
    if (!listRef.current) return;
    let next = activeLi + 1;
    if (next > listRef.current.children.length - 1) next = 0;

    setActiveLi(next);
    scrollTo(next);
  }

  return <main className={styles.carousel}>
    <ul ref={listRef}>
      {series.map((serie, index) => {
        return <li key={index}>
          <div className={styles.info}>
            <p>{serie.title}</p>
            <Button classname={styles.action} handleAction={serie.url} >Explora</Button>
          </div>
          <img src={serie.img} alt={serie.title} />
        </li>
      })}
    </ul>
    <div className={styles.carousel_actions}>
      <button className={styles.previous} onClick={handlePrevious}>
        <img src="/next.svg" alt="previous" />
      </button>
      <button className={styles.next} onClick={handleNext}>
        <img src="/next.svg" alt="next" />
      </button>
    </div>
  </main>
}