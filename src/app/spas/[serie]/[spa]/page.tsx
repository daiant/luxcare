'use client';
import { getSerie, getSpasFromSerie } from "@/lib/spa.utils";
import { Serie, Spa } from '@/app/types/spa.types';
import { useEffect, useRef, useState } from 'react';
import styles from '../series.module.css';
import Button from "@/components/button/button";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Spas() {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [spas, setSpas] = useState<Array<Spa> | undefined>();
  const [selected, setSelected] = useState<Spa | undefined>(undefined);
  const spaNameRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [navigatorPosition, setNavigatorPosition] = useState({ bottom: 0, top: 'unset', position: 'absolute' } as React.CSSProperties);
  const searchParams = useParams();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const serie = searchParams['serie'];
    if (!serie) return;
    const dataSerie = getSerie(serie);
    const spas = getSpasFromSerie(serie);
    setSerie(dataSerie);
    setSpas(spas);

    const handle = searchParams['spa'];
    if (!handle) return;
    if (!serie) return;

    setSelected(spas?.find(s => s.title.toLowerCase() === handle.toLowerCase()));
  }, [searchParams]);

  function handleScroll() {
    if (!navRef.current) return;
    const top = navRef.current.getBoundingClientRect().top;
    if (top < 0) {
      setNavigatorPosition({ top: 0, bottom: 'unset', position: 'fixed' });
    }
    else if (top === 0 && document.scrollingElement) {
      const distance = document.scrollingElement.scrollTop + navRef.current.clientHeight;
      if (distance <= document.scrollingElement.clientHeight) {
        setNavigatorPosition({ top: 'unset', bottom: 0, position: 'absolute' });
      }
    }
  }
  function getSerieTitle(): string {
    return serie?.url.split('/').at(-1) ?? '';
  }
  function getLink(spa: string): string {
    return `/spas/${searchParams['serie']}/${spa.toLowerCase()}`
  }
  return (
    <>
      {<section className={styles.wrapper}>
        <section className={[
          styles.navigation,
          navigatorPosition.top === 0 ? styles.sticky : '',
        ].join(' ')} ref={navRef} style={navigatorPosition} >
          <ul>
            {spas?.map(spa => <li key={spa.title} aria-selected={spa === selected}><Link href={getLink(spa.title)}>{spa.title}</Link></li>)}
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
          <img src={serie?.img} alt="Foto de un spa muy bonito" />
        </header>
        <main>
          <section className={styles.intro}>
            <aside>
              <img src="/intro.png" alt="" />
            </aside>
            <main>
              <p>Spas</p>
              <p>Serie</p>
              <p>{getSerieTitle()}</p>
              <footer>
                <p>
                  {serie?.description}
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
            <h2>Serie {getSerieTitle()}</h2>
            <div>
              <p>{serie?.description}</p>
              <Button handleAction="/contact" variant="secondary" classname={styles.button}>Contacta con un proveedor</Button>
            </div>
          </section>
        </main>
      </section>}
    </>
  )
}