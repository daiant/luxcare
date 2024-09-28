'use client';

import Image from 'next/image';
import styles from './slider.module.css'
import React from 'react';


let pos = { x: 0, y: 0, left: 0, top: 0 }
export default function SeriesSliderComponent({ models }: { models: { src: string, title: string, serie: string, capacity: string, jets: string, href: string }[] }) {
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
    document.addEventListener('mousemove', mouseMoveHandler as never);
    document.addEventListener('mouseup', mouseUpHandler as never);
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
    e.preventDefault();
    document.removeEventListener('mousemove', mouseMoveHandler as never);
    document.removeEventListener('mouseup', mouseUpHandler as never);

    if (!slider.current) return;
    slider.current.style.cursor = 'grab';
    slider.current.style.removeProperty('user-select');
  }
  return <div className={styles.slider}>
    <ul ref={slider} onMouseDown={handleMouseDown}>
      {models.map((model) => (
        <li key={model.title}>
          <div className={styles.content}>
            <Image src={model.src} alt={model.title} width={250} height={250} className={styles.spa} />
            <p>{model.title}</p>
            <p>{model.serie}</p>
          </div>
          <div className={styles.info_wrapper} >
            <div className={styles.info}>
              <a className={styles.title} href={model.href}>{model.title}</a>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <p>Serie</p>
                  <p>{model.serie}</p>
                </div>
                <div className={styles.detail}>
                  <p>Capacidad</p>
                  <p>{model.capacity}</p>
                </div>
                <div className={styles.detail}>
                  <p>Jets</p>
                  <p>{model.jets}</p>
                </div>
                <a className={styles.detail} href={model.href}>Descubre más</a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
}