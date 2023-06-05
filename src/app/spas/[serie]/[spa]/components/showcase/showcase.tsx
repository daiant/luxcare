'use client';

import Image from 'next/image';
import styles from './showcase.module.css';
import Button from '@/components/button/button';
export type ShowcaseImage = {
  src: string;
  height: number;
  width: number;
  alt: string;
}
export default function Showcase(props: { images: ShowcaseImage[], button: string, buttonAction: string }) {
  return <div className={styles.wrapper}>
    <ul className={styles.list}>

      {props.images.map((image, index) => (
        <li key={index} className={styles.item} style={{ '--width': image.width, '--height': image.height } as React.CSSProperties}>
          <Image className={styles.image} src={image.src} fill alt={image.alt}></Image>
        </li>
      ))}
    </ul>
    <div className={styles.actions}>
      <Button handleAction={props.buttonAction} variant='secondary'>{props.button}</Button>
    </div>
  </div>
}