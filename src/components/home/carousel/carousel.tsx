'use client';
import crown from '@/public/home/crown.webp';
import vector from '@/public/home/vector.webp';
import strato from '@/public/home/strato.webp';
import styles from './carousel.module.css';
import React from 'react';

let pos = { x: 0, y: 0, left: 0, top: 0 }
export default function HomeCarouselComponent() {
  const slider = React.useRef<HTMLDivElement>(null);

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
  return <div className={styles.carousel} onMouseDown={handleMouseDown} ref={slider}>
    <div className={styles.item}>
      <img draggable="false" alt="crown" src={crown.src} />
      <p><strong>Innovación, bienestar, experiencia</strong>: te ofrecemos un oasis de relajación y rejuvenecimiento con una variedad de servicios diseñados para revitalizar tanto tu cuerpo como tu mente.</p>
    </div>
    <div className={styles.item}>
      <img draggable="false" alt="vector" src={vector.src} />
      <p><strong>Nuestro objetivo es simple</strong>: continuar innovando para estar cada día más cerca de nuestros clientes. Queremos ofrecer soluciones y productos que hagan que su vida sea más relajada y confortable.</p>
    </div>
    <div className={styles.item}>
      <img draggable="false" alt="strato" src={strato.src} />
      <p><strong>En LuxCare</strong>, cada compra se convierte en una experiencia sensorial auténtica. Nos comprometemos con la perfección y nos respaldamos por sólidas garantías</p>
    </div>
    <div className={styles.item}>
      <img draggable="false" alt="vector" src={vector.src} />
      <p>Buscamos <strong>conectar con las emociones</strong> mientras garantizamos la más alta calidad. Somos sinónimo de compromiso y autenticidad: nos esforzamos por ofrecer algo más que un producto, creamos una experiencia única donde cada detalle cuenta.</p>
    </div>
    <div className={styles.item}>
      <img draggable="false" alt="crown" src={crown.src} />
      <p> Ofrecemos una selección exclusiva de spas de primera calidad, cuidadosamente seleccionados por su calidad, diseño y características innovadoras. Cada cliente es recibido con una atención individualizada, donde se les escucha atentamente para comprender sus necesidades específicas.</p>
    </div>
    <div className={styles.item}>
      <img draggable="false" alt="crown" src={crown.src} />
      <p> Es por eso que nos esforzamos por crear un ambiente donde cada detalle destaque por su <strong>autenticidad y perfección</strong>, respaldado por sólidas garantías que refuerzan nuestro compromiso de calidad.</p>
    </div>
  </div>
}