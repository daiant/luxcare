'use client';
import styles from '@/styles/home.module.css';
import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import { getSerie } from "@/lib/spa.utils";
import Link from "next/link";
import { Serie } from '@/app/types/spa.types';
import { useEffect, useState } from 'react';

export default function Series({ params }: { params: { serie: string } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  useEffect(() => {
    const data = getSerie(params.serie);
    setSerie(data);
  }, []);
  return <>
    {serie && <>
      <Hero src="/test.jpg">
        <h1 className="hero__subtitle">{serie?.title}</h1>
        <h2 className="hero__title">{serie?.subtitle}</h2>
      </Hero>
      {serie.items.map((spa, index) => {
        return <Link href={`/spas/${serie.url}/${spa.url}`} key={spa.title}>
          <Parallax src={spa.img}>
            <div className={styles.parallax_content}>
              <p className={styles.parallax_title}>{spa.title}</p>
            </div>
          </Parallax>
        </Link>
      })}
    </>}
  </>
}