import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Featured from "./components/featured/featured";

export type Product = 'no kiero';
export default function Product(props: Product) {
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
    <ul className="info">
      <li>
        <p className="title">Medidas <span>CM</span></p>
        <p className="content">229 x 229 x 90</p>
      </li>
      <li>
        <p className="title">Capacidad <span>Personas</span></p>
        <p className="content">6</p>
      </li>
      <li>
        <p className="title">Features <span></span></p>
        <p className="content">Idk</p>
      </li>
      <li>
        <button className="secondary">More info</button>
      </li>
    </ul>
    <Parallax src='/test.jpg'></Parallax>
    <div className="featured">
      <p className="title">Featured text</p>
      <p className="subtitle">La nueva colección Crown de Marquis es una obra maestra de innovación. Combina nuestras funciones de terapia más avanzadas y comodidades de lujo con el sistema de hidromasaje más elegante y flexible del mercado.</p>
    </div>
    <div className="showcase">
      <img src="/test.jpg" alt="" />
      <img src="/test.jpg" alt="" />
      <button className="secondary">Explora mas caracteristicas</button>
    </div>
    <div className="featured">
      <p className="title">Featured text</p>
      <p className="subtitle">La nueva colección Crown de Marquis es una obra maestra de innovación. Combina nuestras funciones de terapia más avanzadas y comodidades de lujo con el sistema de hidromasaje más elegante y flexible del mercado.</p>
    </div>
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
  </main>
}