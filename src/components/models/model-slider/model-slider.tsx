'use client';

import Image from 'next/image';
import styles from './model-slider.module.css'
import React from 'react';


let pos = { x: 0, y: 0, left: 0, top: 0 }
export default function ModelSliderComponent({ items }: { items: { src: string, title: string }[] }) {
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
  function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler as never);
    document.removeEventListener('mouseup', mouseUpHandler as never);

    if (!slider.current) return;
    slider.current.style.cursor = 'grab';
    slider.current.style.removeProperty('user-select');
  }
  return <div className={styles.slider}>
    <ul ref={slider} onMouseDown={handleMouseDown}>
      {items.map((item) => (
        <li key={item.title}>
          <div className={styles.content}>
            <Image src={item.src} draggable="false" alt={item.title} width={250} height={250} className={styles.spa} />
            <p>{item.title}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
}