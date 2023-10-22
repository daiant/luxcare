'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { SerieDetailProps } from "@/components/series/detail/detail";
import styles from '../series.module.css';
import Button from "@/components/button/button";
const spas_const = [
  {
    title: 'v94',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v94l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v84',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v84l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v77l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v65l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  },
];

export default function Spas({ params }: { params: { serie: string | undefined, spa: string | undefined } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [spas, setSpas] = useState(spas_const);
  const [selected, setSelected] = useState<{ summary: string[], title: string } | undefined>(undefined);
  const spaNameRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [navigatorPosition, setNavigatorPosition] = useState({ bottom: 0, top: 'unset', position: 'absolute' } as React.CSSProperties);
  useEffect(() => {
    const data = getSerie(params.serie ?? '');
    setSelected(spas.find(spa => params.spa && spa.title.includes(params.spa)));
    setSerie(data);
    document.addEventListener('scroll', handleScroll);
  }, [params.serie, params.spa]);
  function handleScroll(event: Event) {
    if (!navRef.current) return;
    const top = navRef.current.getBoundingClientRect().top;
    if (top < 0) {
      setNavigatorPosition({ top: 0, bottom: 'unset', position: 'fixed', backdropFilter: 'blur(4px)' });
    }
    else if (top === 0 && document.scrollingElement) {
      const distance = document.scrollingElement.scrollTop + navRef.current.clientHeight;
      if (distance <= document.scrollingElement.clientHeight) {
        setNavigatorPosition({ top: 'unset', bottom: 0, position: 'absolute' });
      }
    }
  }
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
  function handleSpaSelected(spa: SetStateAction<{ summary: string[]; title: string; } | undefined>) {
    if (!spa) return;
    spaNameRef.current?.classList.add(styles.hide);
    setTimeout(() => {
      setSelected(spa);
      spaNameRef.current?.classList.remove(styles.hide);
    }, 800)
  }
  return (
    <>
      {<section className={styles.wrapper}>
        <section className={styles.navigation} ref={navRef} style={navigatorPosition} >
          <ul>
            {spas.map(spa => <li onClick={() => handleSpaSelected(spa)} key={spa.title} aria-selected={spa === selected}>{spa.title}</li>)}
          </ul>
        </section>
        <header>
          <div className={styles.title}>
            <div className={styles.header}>
              <h1>{serie?.title}</h1>
              <h2 className={styles.spa_name}>{selected?.title}</h2>
            </div>
            <div className={styles.spa_selected} ref={spaNameRef}>
              <ul className={styles.summary}>
                {selected?.summary.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
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