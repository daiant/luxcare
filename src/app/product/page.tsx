import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Featured from "./components/featured/featured";
import Info, { ProductInfo } from "./components/product-info/info";

export type Product = 'kiero';
export default function Product(props: Product) {
  const info: ProductInfo[] = [
    { title: 'Medidas', subtitle: 'CM', content: '229 x 229 x 90' },
    { title: 'Capacidad', subtitle: 'Personas', content: '6' },
    { title: 'Features', subtitle: '', content: 'idk' }
  ];
  return <main>
    <Hero src="/test.jpg">
      <h1>series crown</h1>
      <h2>Marquis deep sea</h2>
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
    <div className="showcase">
      <img src="/test.jpg" alt="" />
      <img src="/test.jpg" alt="" />
      <button className="secondary">Explora mas caracteristicas</button>
    </div>
    <Featured
      title="Featured text"
      subtitle="La nueva colección Crown de Marquis es una obra maestra de innovación. Combina nuestras funciones de terapia más avanzadas y comodidades de lujo con el sistema de hidromasaje más elegante y flexible del mercado."
    />
    <ul className="gallery">
      <li>
        <img src="/test.jpg" />
        <p>El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".</p>
      </li>
      <li>
        <img src="/test.jpg" />
        <p>El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".</p>
      </li>
      <li>
        <img src="/test.jpg" />
        <p>El flujo laminar optimiza el flujo de agua al eliminar la turbulencia entre las bombas y los chorros. Como resultado, experimenta una penetración más profunda del tejido muscular sin causar molestias en la piel. En otras palabras, "¡Alto flujo, sin picadura!".</p>
      </li>
      <button>Contacta con un proveedor</button>
    </ul>
  </main >
}