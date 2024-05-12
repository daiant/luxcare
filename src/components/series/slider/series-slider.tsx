'use client';

import styles from './slider.module.css'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


let pos = { x: 0, y: 0, left: 0, top: 0 }
export default function SeriesSliderComponent() {

  const slider = React.useRef<HTMLUListElement>(null);

  function handleMouseDown(e: React.MouseEvent) {
    if (!slider.current) return;

    pos = {
      // The current scroll
      left: slider.current.scrollLeft,
      top: slider.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    }
    document.addEventListener('mousemove', mouseMoveHandler as any);
    document.addEventListener('mouseup', mouseUpHandler as any);
    slider.current.style.cursor = 'grabbing';
    slider.current.style.userSelect = 'none';
  }
  function mouseMoveHandler(e: React.MouseEvent) {
    if (!slider.current) return;
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    slider.current.scrollTop = pos.top - dy;
    slider.current.scrollLeft = pos.left - dx;
  }
  function mouseUpHandler(e: React.MouseEvent) {
    document.removeEventListener('mousemove', mouseMoveHandler as any);
    document.removeEventListener('mouseup', mouseUpHandler as any);

    if (!slider.current) return;
    slider.current.style.cursor = 'grab';
    slider.current.style.removeProperty('user-select');
  }
  return <div className={styles.slider}>
    <ul ref={slider} onMouseDown={handleMouseDown}>
      <li>
        <div className={styles.content}>
          <Image src={'/spa.png'} alt={''} width={250} height={250} className={styles.spa}></Image>
          <p>The Resort</p>
          <p>Crown</p>
        </div>
        <div className={styles.info_wrapper} >
          <div className={styles.info}>
            <Link className={styles.title} href={'/series/crown/the-resort'}>Lorme iprussm dolor si</Link>
            <div className={styles.details}>
              <div className={styles.detail}>
                <p>Serie</p>
                <p>Crown</p>
              </div>
              <div className={styles.detail}>
                <p>Capacidad</p>
                <p>7 Personas</p>
              </div>
              <div className={styles.detail}>
                <p>Jets</p>
                <p>64 Jets</p>
              </div>
              <Link className={styles.detail} href={'/series/crown/the-resort'}>Descubre más</Link>

            </div>
          </div>
        </div>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
}