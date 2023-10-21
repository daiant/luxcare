'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { useEffect, useRef, useState } from 'react';
import { ProductInfo } from "./[spa]/components/product-info/info";
import { SerieDetailProps } from "@/components/series/detail/detail";
import styles from './series.module.css';
import Button from "@/components/button/button";

export default function Series({ params }: { params: { serie: string } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [spas, setSpas] = useState(['v94', 'v94l', 'v84', 'v84l', 'v77l', 'v65l']);
  const [selected, setSelected] = useState(spas[1]);
  const spaNameRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const data = getSerie(params.serie);
    setSerie(data);
  }, []);



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
  function handleSpaSelected(spa: string) {
    spaNameRef.current?.classList.add(styles.hide);
    setTimeout(() => {
      setSelected(spa);
      spaNameRef.current?.classList.remove(styles.hide);
    }, 800)
  }
  return (
    <>
      {serie && <section className={styles.wrapper} >
        <section className={styles.navigation} >
          <ul>
            {spas.map(spa => <li onClick={() => handleSpaSelected(spa)} key={spa} aria-selected={spa === selected}>{spa}</li>)}
          </ul>
        </section>
        <header>
          <div className={styles.title}>
            <h1>{serie.title}</h1>
            <h2 className={styles.spa_name} ref={spaNameRef}>{selected}</h2>
          </div>
          <img src="/test.jpg" alt="Foto de un spa muy bonito" />
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
            <div>
              <p>La Serie Vector evoca elegancia con su diseño sofisticado y su ambiente relajante, creando un oasis de tranquilidad para los sentidos.</p>
              <Button handleAction="/contact" variant="secondary" classname={styles.button}>Contacta con un proveedor</Button>
            </div>
          </section>
        </main>
      </section>}
    </>
  )
}