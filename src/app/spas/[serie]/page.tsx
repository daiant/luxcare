'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { useEffect, useState } from 'react';
import { ProductInfo } from "./[spa]/components/product-info/info";
import { SerieDetailProps } from "@/components/series/detail/detail";
import styles from './series.module.css';
import Button from "@/components/button/button";

export default function Series({ params }: { params: { serie: string } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  useEffect(() => {
    const data = getSerie(params.serie);
    setSerie(data);
  }, []);
  const info: ProductInfo[] = [
    { title: 'Medidas', subtitle: 'CM', content: '229 x 229 x 90' },
    { title: 'Capacidad', subtitle: 'Personas', content: '6' },
    { title: 'Features', subtitle: '', content: 'idk' }
  ];
  const details: SerieDetailProps = {
    details: [
      {
        title: "Test",
        image: "/test.jpg",
        text: 'tes test test est tes test set tes tset es'
      }, {
        title: "Test",
        image: "/test.jpg",
        text: 'tes test test est tes test set tes tset es'
      }
    ]
  }
  return (
    <>
      {serie && <section className={styles.wrapper}>
        <header>
          <h1>{serie.title}</h1>
          <img src="/test.jpg" alt="Foto de un spa muy bonito" />
          <section>
            <ul>
              <li>v94</li>
              <li>v94l</li>
              <li>v84</li>
              <li>v84l</li>
              <li>v77l</li>
              <li>v65l</li>
            </ul>
          </section>
        </header>
        <main>
          <section className={styles.intro}>
            <aside>
              <img src="/intro.png" alt="" />
            </aside>
            <main>
              <p>Spas</p>
              <p>Serie</p>
              <p>Vector</p>
              <footer>
                <p>
                  La Serie Vector evoca elegancia con su diseño sofisticado y su ambiente relajante, creando un oasis de tranquilidad para los sentidos.
                </p>
              </footer>
            </main>
          </section>
          <section className={styles.splash}>
            <img src="/boat.jpg" alt="Barco" />
            <header className={styles.header}>
              <p>Elegancia.</p>
              <p>Perfección.</p>
              <p>Armonía.</p>
            </header>
          </section>
          <section className={styles.actions}>
            <h2>Serie vector</h2>
            <div className={styles.flex}>
              <p>La Serie Vector evoca elegancia con su diseño sofisticado y su ambiente relajante, creando un oasis de tranquilidad para los sentidos.</p>
              <div>
                <Button handleAction="/contact" variant="secondary">Explorar productos</Button>
              </div>
            </div>
          </section>
        </main>
      </section>}
    </>
  )
}