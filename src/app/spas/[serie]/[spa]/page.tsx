import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Featured from "./components/featured/featured";
import Info, { ProductInfo } from "./components/product-info/info";
import Showcase from "./components/showcase/showcase";
import Gallery from "./components/gallery/gallery";
import { getSpa } from "@/lib/spa.utils";

export default async function Product(props: { params: { serie: string, spa: string } }) {
  const spa = getSpa(props.params.serie, props.params.spa);

  const info: ProductInfo[] = [
    { title: 'Medidas', subtitle: 'CM', content: '229 x 229 x 90' },
    { title: 'Capacidad', subtitle: 'Personas', content: '6' },
    { title: 'Features', subtitle: '', content: 'idk' }
  ];
  return <main>
    <Hero src={spa?.img}>
      <h1 className="hero__subtitle">{spa?.title}</h1>
      <h2 className="hero__title">{spa?.subtitle}</h2>
    </Hero>
    <Featured
      title="Una verdadera leyenda"
      subtitle="Con asientos esculpidos de varios niveles para seis personas, incluida una silla Adirondack de cuerpo completo para una poderosa terapia de cuello a pies. El asiento de remojo súper profundo envuelve en calidez, dirigido a su cuello, hombros y columna vertebral."
      action="Contacta"
    />
    <Info info={info} />
    <Parallax src='/test.jpg'></Parallax>
    <Featured
      title="Featured text"
      subtitle="La nueva colección Crown de Marquis es una obra maestra de innovación. Combina nuestras funciones de terapia más avanzadas y comodidades de lujo con el sistema de hidromasaje más elegante y flexible del mercado."
    />
    <Showcase
      images={[{ src: '/test.jpg', height: 804, width: 716, alt: '' }, { src: '/test.jpg', height: 804, width: 716, alt: '' }]}
      button="Explora mas caracteristicas"
      buttonAction="#"
    ></Showcase>
    <Featured
      title="Featured text"
      subtitle="La nueva colección Crown de Marquis es una obra maestra de innovación. Combina nuestras funciones de terapia más avanzadas y comodidades de lujo con el sistema de hidromasaje más elegante y flexible del mercado."
    />
    <Gallery images={[
      { src: "/test.jpg", content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
      { src: '/test.jpg', content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
      { src: '/test.jpg', content: 'El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".' },
    ]}></Gallery>
  </main >
}