'use client';

import React from 'react';
import styles from './slider.module.css';
import { fetchImage } from '@/lib/fetch-image';
import Image from 'next/image';

export default function Slider() {
  const list = React.useRef<HTMLUListElement | null>(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    list?.current?.scrollTo({
      left: 300 * index,
      behavior: 'smooth',
    });
  }, [list, index]);

  function handleNext() {
    if (!list.current) return;
    let newIndex = index + 1;
    if (newIndex >= list.current.children.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  function handlePrevious() {
    if (!list.current) return;
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = list.current.children.length - 1;
    }
    setIndex(newIndex);
  }
  return <div className={styles.slider}>
    <ul ref={list}>
      <li>
        <Image draggable='false' src={fetchImage("/home/intro.webp")} alt="" />
      </li>
      <li>
        <Image draggable='false' src={fetchImage("/home/vertical_marquis.png")} alt="" />
      </li>
    </ul>
    <div className={styles.actions}>
      <Image className={styles.previous} src='/icons/arrow_down.svg' onClick={handlePrevious} alt=''/>
      <Image className={styles.next} src='/icons/arrow_down.svg' onClick={handleNext} alt=''/>
    </div>
  </div>
}