export const design_by_marquis = "Cada Marquis está diseñado para rendir al máximo. Debajo de los paneles, potentes bombas canalizan el agua optimizada para un flujo máximo. Estas bombas empujan grandes cantidades de agua hacia los asientos diseñados; cada uno pensado para funciones específicas. Desde la hidroterapia hasta la relajación, hay un lugar en un Marquis para ti. Si tu objetivo es pasar tiempo con tu familia y amigos, Marquis ofrece opciones de entretenimiento de primera categoría, incluyendo conexiones Bluetooth y altavoces de la más alta calidad y opciones de acoplamiento.";

export const SPAS = {
  summit: {
    title: 'Summit',
    serie: 'Serie Crown',
    header: '/images/spas/crown/summit/hero.jpeg',
    video: '/images/spas/crown/summit/summit_video.mp4',
    hightlight: {
      capacity: '7 personas',
      jets: '53 jets',
      dimensions: '239 x 239 x 90 cm',
    },
    variants: [
      {
        title: 'colores',
        type: 'selector',
        options: [{
          title: 'Negro',
          src: '/images/spas/options/black.webp',
        }],
      },
    ],
    description: 'El modelo Summit es el refugio definitivo para relajarse y disfrutar del máximo confort.\nTres sillones Adirondack uno al lado del otro miman cada centímetro de tu cuerpo. En el lado opuesto, cuatro asientos de hidromasaje adyacentes brindan un alivio reconfortante, con fácil acceso al jet Regal Whitewater-4™.\n Cuatro zonas H.O.T. proporcionan control y flexibilidad específicos, y su diseño abierto ofrece mucho espacio para estirar las piernas.\nEl Summit no solo ofrece una experiencia de spa de alta gama, sino que también se distingue por su diseño inteligente y su atención al detalle, garantizando que cada sesión de spa sea una experiencia de lujo y relajación incomparable.',
    certifications: [
      {
        title: 'Ficha técnica',
        type: 'document',
        src: '/spas/datasheets.pdf',
      },
      {
        title: 'Garantía Serie Crown - Marquis Spas',
        type: 'link',
        src: '#warranty'
      },
    ],
    specifications: [
      { title: 'Medidas', value: '239 x 239 x 90 cm' },
      { title: 'Asientos', value: '7 personas' },
      { title: 'Jets', value: '65' },
      { title: 'Bombas', value: '2 x 1817 LPM' },
      { title: 'Electricidad', value: '50 Hz, 230V/32A/3PH' },
      { title: 'Filtración', value: '2 filtros' },
      { title: 'Capacidad', value: '1779 litros' },
      { title: 'Peso', value: '499 / 2277 kg' },
    ],
    materials: [
      { type: 'Interior', value: 'Casco en acrílico' },
      { type: 'Exterior', value: 'Cabinete PVC' },
    ],
    maker: {
      title: "El modelo Summit pertenece a la Serie Crown, de Marquis Spas.",
      href: '/series/crown'
    },
    details: [
      { title: "Duradero", src: '/details/1.webp' },
      { title: "Ergonómico", src: '/details/2.webp' },
      { title: "Reconfortante", src: '/details/3.webp' },
      { title: "Elegante", src: '/details/4.webp' },
      { title: "Potente", src: '/details/5.webp' },
      { title: "Impactante", src: '/details/6.webp' },
    ],
    design: {
      title: 'Marquis Spas',
      value: design_by_marquis,
      src: '/images/marquis.jpg',
      aside_src: '/images/spas/crown/summit/summit_design.webp'
    }
  }
}