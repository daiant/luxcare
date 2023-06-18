'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { useEffect, useState } from 'react';
import SerieHero from '@/components/series/hero/hero';
import SerieText from "@/components/series/text/text";
import Button from "@/components/button/button";
import Info, { ProductInfo } from "./[spa]/components/product-info/info";
import Showcase from "./[spa]/components/showcase/showcase";
import Parallax from "@/components/parallax/parallax";
import Gallery from "./[spa]/components/gallery/gallery";
import SerieDetail, { SerieDetailProps } from "@/components/series/detail/detail";

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
  return <>
    {serie && <section className="main-section">
      <SerieHero image='/test.jpg' title='Spas Serie Crown' subttitle='Redefine la comodidad' />
      <SerieText>
        <h1 className="article__title">Texto texto</h1>
        <p className="article__content">Texto texto <b>color de acento</b>, texto texto <b>color de acento</b></p>
        <Button handleAction="ei">Contacta</Button>
      </SerieText>
      <Info info={info}></Info>
      <Parallax src='/test.jpg'></Parallax>
      <SerieText>
        <h1 className="article__title">Texto texto</h1>
        <p className="article__content">Texto texto <b>color de acento</b>, texto texto <b>color de acento</b></p>
        <Button handleAction="ei" variant="secondary">Contacta</Button>
      </SerieText>
      <Gallery images={[
        { src: "/test.jpg", content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
        { src: '/test.jpg', content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
        { src: '/test.jpg', content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
      ]}></Gallery>
      <SerieDetail details={details.details}></SerieDetail>
      <SerieText>
        <h1 className="article__title">Texto texto</h1>
        <p className="article__content">Texto texto <b>color de acento</b>, texto texto <b>color de acento</b></p>
        <Button handleAction="ei">Contacta</Button>
      </SerieText>
    </section >}
  </>
}