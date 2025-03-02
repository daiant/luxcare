import { fetchImage } from "./fetch-image";

export type Spa = {
  title: string;
  serie: string;
  header: string;
  detail?: string;
  video: string;
  description: string;
  certifications: Array<{ title: string; type: string; src: string }>;
  specifications: Array<{ title: string; value: string }>;
  maker: { title: string; href: string };
  details: Array<{ title: string; src: string }>;
  landing_cards: Array<{ title: string; href: string; src: string }>;
  variants: Array<{
    title: string;
    type: string;
    options: Array<{ title: string; src: string }>;
  }>;
  materials: Array<{ type: string; value: string }>;
  design: { title: string; value: string; src: string; aside_src: string };
};

export const design_landing_cards = [
  {
    title: "Extreme Isolation",
    href: "/microsilk",
    src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
  },
  {
    title: "Desinfección UV",
    href: "/microsilk",
    src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
  },
  {
    title: "Silent Wave Eco",
    href: "/microsilk",
    src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
  },
]

const design_by_riviera = {
  title: "Riviera Pool",
  value:
    "El Strato 2.1 y el Strato 2.4 presentan diseños elegantes, modernos y lineales que elevan esta serie de piscinas a un punto destacado de tu baño. Estas piscinas son sensacionales donde sea que las coloques, ya sea en interiores o en el jardín. Utilizamos un acrílico sanitario blanco de alta calidad para que el agua parezca fresca y azul. El revestimiento de la piscina está disponible en tres colores y dos opciones diferentes.",
  src: fetchImage("/images/spas/strato/rivierapool.webp"),
  aside_src: fetchImage("/images/spas/strato/header.webp"),
};

const design_by_DESIGN = {
  title: "WaterWave Spas",
  value:
    "Cada modelo WaterWave ha sido diseñado para ofrecer el máximo confort y rendimiento. Con bombas de alta potencia que optimizan el flujo del agua, cada chorro está estratégicamente ubicado para proporcionar un masaje terapéutico eficaz. Sus asientos están pensados para satisfacer diversas necesidades, desde relajación profunda hasta hidroterapia. Además, varios de sus modelos cuentan con opciones de entretenimiento avanzadas, como conectividad Bluetooth y altavoces de calidad, permitiendo que disfrutes de una experiencia inigualable en compañía de tus seres queridos.",
  src: fetchImage("/images/spas/strato/rivierapool.webp"),
  aside_src: fetchImage("/images/spas/strato/header.webp"),
};

const design_by_marquis = {
  title: "Marquis Spas",
  value:
    "Cada Marquis está diseñado para rendir al máximo. Debajo de los paneles, potentes bombas canalizan el agua optimizada para un flujo máximo. Estas bombas empujan grandes cantidades de agua hacia los asientos diseñados; cada uno pensado para funciones específicas. Desde la hidroterapia hasta la relajación, hay un lugar en un Marquis para ti. Si tu objetivo es pasar tiempo con tu familia y amigos, Marquis ofrece opciones de entretenimiento de primera categoría, incluyendo conexiones Bluetooth y altavoces de la más alta calidad y opciones de acoplamiento.",
  src: fetchImage("/images/marquis.jpg"),
  aside_src: fetchImage("/images/spas/crown/summit/summit_design.webp"),
};

const materials = [
  { type: "Interior", value: "Casco en acrílico" },
  { type: "Exterior", value: "Cabinete PVC" },
];

const variants = [
  {
    title: "Colores Cabina",
    type: "selector",
    options: [
      {
        title: "Granito",
        src: fetchImage("/images/spas/options/colors/granito.webp"),
      },
      {
        title: "Madera",
        src: fetchImage("/images/spas/options/colors/madera.webp"),
      },
    ],
  },
  {
    title: "Colores Casco",
    type: "selector",
    options: [
      {
        title: "Alba",
        src: fetchImage("/images/spas/options/colors/alba.webp"),
      },
      {
        title: "Glaciar",
        src: fetchImage("/images/spas/options/colors/glaciar.webp"),
      },
      {
        title: "Medianoche",
        src: fetchImage("/images/spas/options/colors/medianoche.webp"),
      },
      {
        title: "Plata Esterlina",
        src: fetchImage("/images/spas/options/colors/plata-esterlina.webp"),
      },
      {
        title: "Sol Toscano",
        src: fetchImage("/images/spas/options/colors/sol-toscano.webp"),
      },
      {
        title: "Solsticio",
        src: fetchImage("/images/spas/options/colors/solsticio.webp"),
      },
    ],
  },
];

export const SPAS: { [key: string]: { [key: string]: Spa } } = {
  crown: {
    summit: {
      title: "Summit",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/summit/hero.jpeg"),
      video: fetchImage("/images/spas/crown/summit/summit_video.mp4"),
      description:
        "El modelo Summit es el refugio definitivo para relajarse y disfrutar del máximo confort.\nTres sillones Adirondack uno al lado del otro miman cada centímetro de tu cuerpo. En el lado opuesto, cuatro asientos de hidromasaje adyacentes brindan un alivio reconfortante, con fácil acceso al jet Regal Whitewater-4™.\n Cuatro zonas H.O.T. proporcionan control y flexibilidad específicos, y su diseño abierto ofrece mucho espacio para estirar las piernas.\nEl Summit no solo ofrece una experiencia de spa de alta gama, sino que también se distingue por su diseño inteligente y su atención al detalle, garantizando que cada sesión de spa sea una experiencia de lujo y relajación incomparable.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/summit.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "239 x 239 x 90 cm" },
        { title: "Asientos", value: "7 personas" },
        { title: "Jets", value: "65 jets" },
        { title: "Bombas", value: "2 x 1817 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1779 L" },
        { title: "Peso", value: "499 / 2277 kg" },
      ],
      maker: {
        title: "El modelo Summit pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Potente",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Reconfortante",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Duradero",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Impactante",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    epic: {
      title: "Epic",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/epic/epic.webp"),
      video: fetchImage("/images/spas/crown/epic/epic_video.mp4"),
      description:
        "El Epic es una verdadera leyenda. Con asientos esculpidos de varios niveles para seis personas, que incluyen una silla Adirondack de cuerpo completo para una terapia potente de pies a cabeza.\nEl asiento de remojo súper profundo te envuelve en calor, apuntando a tu cuello, hombros y columna vertebral.\nCon cinco Zonas H.O.T. - Lumbar, Hombros y Pies - incluyendo un jet Regal Whitewater-4, sin duda recordarás este jacuzzi por generaciones.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/epic.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "229 x 229 x 90 cm" },
        { title: "Asientos", value: "6 personas" },
        { title: "Jets", value: "53 jets" },
        { title: "Bombas", value: "2 x 1817 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1476 L" },
        { title: "Peso", value: "386 / 1814 kg" },
      ],
      maker: {
        title: "El modelo Epic pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Potente",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Reconfortante",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Duradero",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Impactante",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    euphoria: {
      title: "Euphoria",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/euphoria/euphoria.wepb"),
      video: fetchImage("/images/spas/crown/euphoria/euphoria_video.mp4"),
      description:
        "El modelo Euphoria es una celebración real en ciernes.\nPresenta un diseño equilibrado y simétrico con siete asientos de varios niveles, incluyendo dos asientos de terapia extra profunda posicionados uno al lado del otro con masaje de cuerpo completo.\nCada asiento puede acceder al potente jet Regal Whitewater-4 para una terapia intensa en piernas y pies.\n¡Con cinco Zonas H.O.T., tú y tus invitados os sumergiréis en una euforia sin límites!",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/euphoria.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "229 x 229 x 90 cm" },
        { title: "Asientos", value: "7 personas" },
        { title: "Jets", value: "53 jets" },
        { title: "Bombas", value: "2 x 1817 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1438 L" },
        { title: "Peso", value: "374 / 1812 kg" },
      ],
      maker: {
        title:
          "El modelo Euphoria pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Equilibrado",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Simétrico",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Armonioso",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Exuberante",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    destiny: {
      title: "Destiny",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/destiny/destiny.webp"),
      video: fetchImage("/images/spas/crown/destiny/destiny_video.mp4"),
      description:
        "Bienvenidos al modelo Destiny, donde la relajación es inevitable.\nEste santuario cuenta con una configuración de siete asientos de hidromasaje, dispuestos para fomentar conexiones significativas y conversaciones profundas.\nEntre ellos, dos asientos profundos ofrecen alivio específico para las Zonas H.O.T. Estratégicamente posicionado, un asiento de terapia masajea cada músculo a lo largo de tu espalda.\nPotenciado por el formidable jet Regal Whitewater-4, el spa Destiny presenta con orgullo un total de cuatro Zonas H.O.T. Además, los asientos elevados aseguran que cada invitado descubra su propio oasis de comodidad.\nAbraza tu destino, donde te aguarda la tranquilidad!",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/destiny.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 216 x 90 cm" },
        { title: "Asientos", value: "7 personas" },
        { title: "Jets", value: "41 jets" },
        { title: "Bombas", value: "2 x 1514 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1173 L" },
        { title: "Peso", value: "318 / 1492 kg" },
      ],
      maker: {
        title: "El modelo Destiny pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Profundo",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Amplio",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Diligente",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Acogedor",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Duradero",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Cómodo",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    resort: {
      title: "Resort",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown.webp"),
      detail: fetchImage("/images/spas/crown/resort/resort.webp"),
      video: fetchImage("/images/spas/crown/resort/resort_video.mp4"),
      description:
        "Bienvenidos al Spa Resort, un lugar digno de realeza.\nSu diseño singularmente curvilíneo combina elegancia con comodidad y ofrece una hidroterapia excepcional.\nCon asientos de varios niveles para cinco personas, que incluyen dos Sillas Adirondack dobles: una equipada con jets para la Zona H.O.T. lumbar, la otra con jets para la Zona H.O.T. de los hombros, y ambas con poderosos jets para piernas y pies.\nDos asientos de terapia profunda y un asiento de entrada/refrigeración completan el diseño.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/resort.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 216 x 90 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: "Jets", value: "50 jets" },
        { title: "Bombas", value: "2 x 1514 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1363 L" },
        { title: "Peso", value: "345 / 1706 kg" },
      ],
      maker: {
        title: "El modelo Resort pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Realeza",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Curvilíneo",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Singular",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Acogedor",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Completo",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Revitalizante",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    wish: {
      title: "Wish",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/wish/wish.webp"),
      video: fetchImage("/images/spas/crown/wish/wish_video.mp4"),
      description:
        " El spa Wish es el reflejo de tus metas en forma de spa.\nCuatro asientos de varios niveles se adaptan a cada tipo de cuerpo, incluido un asiento elevado para calentarse o refrescarse. Además, un lounge de cuerpo completo con espacio generoso para acunarlo en confort cuenta con jets de la Zona H.O.T. lumbar. Un asiento de terapia profunda ofrece jets de la Zona H.O.T. de los hombros.\nAdemás, dos asientos únicos y un asiento de enfriamiento también pueden aprovechar el jet Regal Whitewater-4.\n\nUna parte de los ingresos de la venta del modelo Wish se dona a Make-A-Wish® para ayudar a cumplir los deseos de niños con condiciones de salud críticas.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/wish.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "196 x 196 x 90 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: "Jets", value: "29 / 30 jets" },
        { title: "Bombas", value: "1 x 908 / 2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "1 filtro" },
        { title: "Capacidad", value: "984 L" },
        { title: "Peso", value: "273 / 1257 kg" },
      ],
      maker: {
        title: "El modelo Wish  pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Rejuvenecedor",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Personalizado",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Único",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Solidario",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Confortable",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Terapéutico",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    spirit: {
      title: "Spirit",
      serie: "Serie Crown",
      header: fetchImage("/images/spas/crown/spirit/spirit.webp"),
      video: fetchImage("/images/spas/crown/spirit/spirit_video.mp4"),
      description:
        "El Spirit se desliza libremente con su terapia curativa. La entrada frontal curva ofrece un enfoque elegante, con cuatro asientos de hidromasaje para hasta tres personas.\nEl relajante lounge con jets de la Zona H.O.T. de los hombros ofrece terapia de cuerpo completo. El asiento de terapia profunda con jets de la Zona H.O.T. lumbar trabaja todos los músculos de tu espalda.\nAdemás, un asiento de enfriamiento eleva tu corazón por encima del nivel del agua y facilita la entrada y salida.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/crown/datasheets/spirit.pdf"),
        },
        {
          title: "Garantía Serie Crown - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/crown/datasheets/crown.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "168 x 216 x 90 cm" },
        { title: "Asientos", value: "4 personas" },
        { title: "Jets", value: "32 jets" },
        { title: "Bombas", value: "1 x 908 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/32A/3PH" },
        { title: "Filtración", value: "1 filtro" },
        { title: "Capacidad", value: "1003 L" },
        { title: "Peso", value: "209 / 1211 kg" },
      ],
      maker: {
        title: "El modelo Wish  pertenece a la Serie Crown, de Marquis Spas.",
        href: "/series/crown",
      },
      details: [
        {
          title: "Curativo",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Fluido",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Accesible",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Estilizado",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Equilibrado",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
  },
  vector: {
    v94: {
      title: "V94",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v94/v94.webp"),
      video: fetchImage("/images/spas/vector/v94/v94_video.mp4"),
      description:
        "¿Buscas un spa grande? ¡El V94 es una verdadera bestia: con 94 pulgadas cuadradas, ofrece todo el espacio que necesitas!\nEl jet Whitewater-4 ofrece una erupción volcánica de terapia revitalizante.\nCon 40 Jetpods y dos bombas de doble velocidad, tienes un spa dinámico diseñado para la multitud.\nEste spa incluye cuatro asientos de masaje especializados, tres asientos de masaje estándar, un banco de enfriamiento, jetpods intercambiables con recubrimiento de acero inoxidable, sistema V-O-L-T™ de alta fluidez, cinco válvulas de control V3 Throttle y ConstantClean™ con SmartClean™.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v94.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "239 x 239 x 91 cm" },
        { title: "Asientos", value: "7 personas" },
        { title: "Jets", value: "41 jets" },
        { title: "Bombas", value: "2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x32A o fase 3" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1514  L" },
        { title: "Peso", value: "381 / 1894 kg" },
      ],
      maker: {
        title: "El modelo V94 pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Amplio",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Robusto",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Dinámico",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Preciso",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    v94l: {
      title: "V94L",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v94l/v94l.webp"),
      video: fetchImage("/images/spas/vector/v94/v94_video.mp4"),
      description:
        " ¿Buscas un spa grande con un asiento tipo lounge? ¡El V94L es el hermano del modelo V94, con capacidad para siete personas pero con un lounge de cuerpo completo añadido!\nEl jet Whitewater-4 ofrece una erupción volcánica de terapia revitalizante, especialmente para tus piernas y pies.\nCuenta con 44 Jetpods, dos bombas de doble velocidad y cinco válvulas de control V3 Throttle, cinco asientos de masaje especializados, dos asientos de masaje estándar y el sistema ConstantClean™ con SmartClean™.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v94l.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "239 x 239 x 91 cm" },
        { title: "Asientos", value: "7 personas" },
        { title: "Jets", value: "44 jets" },
        { title: "Bombas", value: "2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x32A o fase 3" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1685 L" },
        { title: "Peso", value: "381 / 2066 kg" },
      ],
      maker: {
        title: "El modelo V94L pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Espacioso",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Relajado",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Vitalizante",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Indulgente",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Eficiente",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Versátil",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    v84: {
      title: "V84",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v84/v84.webp"),
      video: fetchImage("/images/spas/vector/v84/v84_video.mp4"),
      description:
        "El spa V84 para seis personas te permite disfrutar con tu familia durante todo el año.\nPerfecto para un grupo, con un asiento elevado que te permite sentir todo el poder del jet Whitewater-4. Un total de 36 Jetpods con el sistema V-O-L-T proporcionan un masaje personalizado.\nAdemás, las cinco válvulas de control V3 Throttle te permiten dirigir la terapia a las áreas problemáticas.\nAdemás, hay que añadirle sus cinco asientos de masaje especializados más un asiento de masaje estándar, un banco de enfriamiento y el sistema ConstantClean™ con SmartClean™.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v84.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "213 x 213 x 91 cm" },
        { title: "Asientos", value: "6 personas" },
        { title: "Jets", value: "37 jets" },
        { title: "Bombas", value: "2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x32A o fase 3" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1211 L" },
        { title: "Peso", value: "318 / 1530 kg" },
      ],
      maker: {
        title: "El modelo V84 pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Innovador",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Duradero",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Eficiente",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Satisfactorio",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    v84l: {
      title: "V84L",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v84l/v84l.webp"),
      video: fetchImage("/images/spas/vector/v84/v84_video.mp4"),
      description:
        "El spa V84L para cinco personas te asegura una experiencia revitalizante junto a tus amigos.\nEncuentra fácilmente tu asiento de terapia perfecto, además de un lounge tipo commander que ofrece alivio de la cabeza a los pies.\nCon un total de 35 Jetpods, un potente jet Whitewater-4 y cuatro válvulas de control V3 Throttle, tendrás el control que necesitas",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v84l.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "213 x 213 x 91 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: "Jets", value: "36 jets" },
        { title: "Bombas", value: "2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x16A o 1x32A o fase 3" },
        { title: "Filtración", value: "2 filtros" },
        { title: "Capacidad", value: "1287 L" },
        { title: "Peso", value: "318 / 1605 kg" },
      ],
      maker: {
        title: "El modelo V84L pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Versátil",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Robusto",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Adaptable",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Revitalizante",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Acogedor",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    v77l: {
      title: "V77L",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v77l/v77l.webp"),
      video: fetchImage("/images/spas/vector/v77l/v77l_video.mp4"),
      description:
        "El spa V77L para cinco personas es el lugar perfecto para conversaciones en familia. Ofrece múltiples posiciones de asiento para acomodar a tu grupo, con espacio suficiente para moverse cómodamente.\nEl lounge tipo Commander de cuerpo completo te permite estirar las piernas.\nUn total de 27 Jetpods con el sistema V-O-L-T proporciona un masaje profesional y tres válvulas de control V3 Throttle ponen la acción al alcance de tus manos.\n\n(El sistema MicroSilk está disponible como opción en la versión V77L de una bomba. No está disponible en la versión V77L de dos bombas).",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v77l.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "196 x 196 x 91 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: "Jets", value: "27 jets" },
        { title: "Bombas", value: "1x 606LPM/ 2 x 1211 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x16A o 1x32A o fase 3" },
        { title: "Filtración", value: "1 filtro" },
        { title: "Capacidad", value: "1022 L" },
        { title: "Peso", value: "249 / 1272 kg" },
      ],
      maker: {
        title: "El modelo V77L pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Personalizable",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Interactivo",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Práctico",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Innovador",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
    v65l: {
      title: "V65L",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/vector/v65l/v65l.webp"),
      video: fetchImage("/images/spas/vector/v65l/v65l_video.mp4"),
      description:
        "El modelo V65L es tu oasis personal en casa. Este spa para tres personas, de diseño futurista, se adapta a espacios reducidos gracias a su tamaño compacto. Un cómodo lounge tipo Commander te permite relajarte completamente.\nCon un total de 22 Jetpods, aliviarás los músculos cansados.\nAdemás, el conveniente sistema de 120 voltios Plug-and-Play te permite ubicarlo en cualquier lugar.\nCuenta con tres asientos de masaje especializados, un asiento de enfriamiento, el sistema de alta fluidez V-O-L-T™ con tres válvulas de control V3 Throttle y el sistema ConstantClean™ con SmartClean™.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/vector/datasheets/v65l.pdf"),
        },
        {
          title: "Garantía Serie Vector - Marquis Spas",
          type: "link",
          src: fetchImage("/images/spas/vector/datasheets/vector.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "165 x 213 x 75 cm" },
        { title: "Asientos", value: "3 personas" },
        { title: "Jets", value: "22 jets" },
        { title: "Bombas", value: "1x 454 / 606 LPM" },
        { title: "Electricidad", value: "50 Hz, 230V/1x16A o 1x32A o fase 3" },
        { title: "Filtración", value: "1 filtro" },
        { title: "Capacidad", value: "795 L" },
        { title: "Peso", value: "200 / 994 kg" },
      ],
      maker: {
        title: "El modelo V77L pertenece a la Serie Vector, de Marquis Spas.",
        href: "/series/vector",
      },
      details: [
        {
          title: "Moderno",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Elegante",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Futurista",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Práctico",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Personalizable",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Versátil",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [
        {
          title: "MicroSilk",
          href: "/microsilk",
          src: fetchImage("/images/spas/crown/summit/microsilk.webp"),
        },
        {
          title: "ConstantClean+",
          href: "/constant-clean",
          src: fetchImage("/images/spas/crown/summit/constantclean.webp"),
        },
        {
          title: "Flow Control",
          href: "/flow-control",
          src: fetchImage("/images/spas/crown/summit/flow-control.webp"),
        },
      ],
      variants,
      materials,
      design: design_by_marquis,
    },
  },
  strato: {
    "strato-21": {
      title: "Strato 2.1",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/strato/strato21/strato21.webp"),
      video: fetchImage("/images/spas/strato/strato21/strato_video.mp4"),
      description:
        "El Strato 2.1 - totalmente renovado - es el spa perfecto para tu baño o terraza, con dimensiones compactas que lo hacen ideal.\nSu diseño moderno y minimalista lo convierte en el centro encantador de tu espacio de baño. La entrada central incluye el skimmer, creando una elegante simetría. Un spa portátil, elegante y moderno en todos los sentidos.\nCon paneles de aluminio y una cubierta patentada Hardtop, este spa se convierte en el nuevo punto destacado, ya sea en el interior de la vivienda o en el jardín.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato21.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 216 x 93 cm" },
        { title: "Asientos", value: "2 personas" },
        { title: "Jets", value: "30 jets" },
        { title: "Bombas", value: "1x 2,5 CV" },
        { title: "Capacidad", value: "1200 L" },
        { title: "Peso", value: "380 / 1580 kg" },
      ],
      maker: {
        title: " El modelo 2.1 pertenece a la Serie Strato, de Riviera Pool.",
        href: "/series/strato",
      },
      details: [
        {
          title: "Moderno",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Simétrico",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Compacto",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Comodidad",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Estética",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [],
      variants,
      materials,
      design: design_by_riviera,
    },
    "strato-24": {
      title: "Strato 2.4",
      serie: "Serie Vector",
      header: fetchImage("/images/spas/strato/strato24/strato24.webp"),
      video: fetchImage("/images/spas/strato/strato21/strato_video.mp4"),
      description:
        "Su diseño moderno y lineal convierte este spa en el encantador centro de atención de tu área de baño. La cómoda entrada central también incorpora el skimmer, creando así una elegante simetría.\nUn spa portátil, tan moderno y elegante como puede ser. Gracias a los paneles de aluminio modernos, esta piscina se convierte en el nuevo punto culminante, ya sea en el interior o en el jardín.\nDiferentes boquillas de masaje tienen diferentes efectos.\nCada zona del cuerpo tiene sus problemas específicos. Por lo tanto, es importante que el equipamiento de boquillas de cada lugar de masaje esté adaptado al cuerpo. Un baño de hidromasaje de 15 minutos aumenta su nivel de oxígeno en sangre en aproximadamente un 10 %.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "236 x 236 x 92 cm" },
        { title: "Asientos", value: "4 personas" },
        { title: "Jets", value: "36 jets" },
        { title: "Reposacabezas", value: "5" },
        { title: "Bombas", value: "1x 2,5 CV" },
        { title: "Capacidad", value: "1660 L" },
        { title: "Peso", value: "410 / 2070 kg" },
      ],
      maker: {
        title: " El modelo 2.4 pertenece a la Serie Strato, de Riviera Pool.",
        href: "/series/strato",
      },
      details: [
        {
          title: "Moderno",
          src: fetchImage("/images/spas/crown/summit/details/1.webp"),
        },
        {
          title: "Simétrico",
          src: fetchImage("/images/spas/crown/summit/details/2.webp"),
        },
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/crown/summit/details/3.webp"),
        },
        {
          title: "Compacto",
          src: fetchImage("/images/spas/crown/summit/details/4.webp"),
        },
        {
          title: "Comodidad",
          src: fetchImage("/images/spas/crown/summit/details/5.webp"),
        },
        {
          title: "Estética",
          src: fetchImage("/images/spas/crown/summit/details/6.webp"),
        },
      ],
      landing_cards: [],
      variants,
      materials,
      design: design_by_riviera,
    },
  },
  design: {
    alaska: {
      title: "Alaska",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/alaska/alaska-hero.webp"),
      detail: fetchImage("/images/spas/design/alaska/alaska-detail.webp"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Alaska de la serie Design de Waterwave Spas combina elegancia y lujo con tecnología avanzada. Con un diseño refinado y un revestimiento de aluminio, este spa ofrece una experiencia incomparable de relajación. Equipado con 67 chorros de agua, dos asientos ergonómicos y dos tumbonas, proporciona un masaje completo para el cuerpo. Además, su iluminación ambiental crea una atmósfera tranquila y sofisticada, ideal para disfrutar de momentos de puro bienestar en tu propio hogar.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "230 x 230 x 92 cm" },
        { title: "Asientos", value: "4 personas" },
        { title: 'Capacidad', value: '2 asientos y 2 tumbonas'},
        { title: "Jets", value: "67 jets" },
        { title: "Reposacabezas", value: "5" },
        { title: "Bombas", value: "1 x 3 PS 2 velocidades + 2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1819 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '2 x 50 sq'},
        { title: "Peso", value: "380 / 2199 kg" },
      ],
      maker: {
        title: " El modelo Alaska pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details2-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details3-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details17-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details5-Serie-Design.jpg"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details18-Serie-Design.jpg"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
    columbus: {
      title: "Columbus",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/columbus/columbus-hero.png"),
      detail: fetchImage("/images/spas/design/columbus/columbus-detail.png"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Columbus combina tecnología avanzada y diseño ergonómico para ofrecer una experiencia de spa versátil. Con capacidad para 3 personas en una combinación de asientos y tumbonas, este spa garantiza comodidad y relajación. Sus 33 chorros ajustables proporcionan una terapia personalizada para aliviar tensiones musculares, mientras que el sistema de iluminación LED y otras características modernas añaden un toque de lujo. Ideal para disfrutar en familia o con amigos, el Columbus es una opción completa y sofisticada.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 165 x 74 cm" },
        { title: "Asientos", value: "3 personas" },
        { title: 'Capacidad', value: '1 asiento y 2 tumbonas'},
        { title: "Jets", value: "33 jets" },
        { title: "Bombas", value: "2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1100 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '1 x 50 sq'},
        { title: "Peso", value: "270 / 1370 kg" },
      ],
      maker: {
        title: "El modelo Columbus pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details2-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details3-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details17-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details5-Serie-Design.jpg"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/alaska/options/Alaska-Details18-Serie-Design.jpg"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
    jackson: {
      title: "Jackson",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/jackson/jackson-hero.jpg"),
      detail: fetchImage("/images/spas/design/jackson/jackson-detail.jpg"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Jackson es un spa compacto diseñado para combinar comodidad y funcionalidad, ideal para espacios más pequeños. Con capacidad para 5 personas, ofrece tres tumbonas y dos asientos ergonómicos que maximizan la relajación. Su sistema de chorros ajustables proporciona una experiencia de hidroterapia personalizada, mientras que características como la iluminación LED crean un ambiente acogedor. Perfecto para quienes buscan un spa eficiente y de alta calidad para disfrutar en casa.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 216 x 92 cm" },
        { title: "Asientos", value: "3 personas" },
        { title: 'Capacidad', value: '3 asientos y 2 tumbonas'},
        { title: "Jets", value: "62 jets" },
        { title: "Bombas", value: "2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1474 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '1 x 50 sq'},
        { title: "Peso", value: "320 / 1794 kg" },
      ],
      maker: {
        title: "El modelo Jackson pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details2-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details3-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details7-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details8-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details19-Serie-Design.jpg"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/jackson/options/Jackson-Details23-Serie-Design.jpg"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
    nizza: {
      title: "Nizza",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/nizza/nizza-hero.jpg"),
      detail: fetchImage("/images/spas/design/nizza/nizza-detail.jpg"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Nizza es un spa diseñado para combinar estilo y funcionalidad, con capacidad para 5 personas, incluyendo una cómoda tumbona. Equipado con un sistema de chorros ajustables y una iluminación LED ambiental, ofrece una experiencia de hidroterapia relajante y personalizable. Su diseño espacioso y materiales de alta calidad lo convierten en una excelente opción para quienes buscan confort y rendimiento en su hogar.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "220 x 220 x 96 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: 'Capacidad', value: '4 asientos y 1 tumbona'},
        { title: "Jets", value: "54 jets" },
        { title: "Bombas", value: "1 x 3 PS 2 velocidades + 2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1500 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '2 x 50 sq'},
        { title: "Peso", value: "350 / 1850 kg" },
      ],
      maker: {
        title: "El modelo Nizza pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/nizza/options/Nizza-Details2-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/nizza/options/Nizza-Details3-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/nizza/options/Nizza-Details4-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/nizza/options/Nizza-Details-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/nizza/options/NizzaDetails1-Serie-Design.jpg"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/nizza/options/NizzaTop-Serie-Design.png"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
    nizzaII: {
      title: "Nizza II",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/nizzaII/nizzaII-hero.jpg"),
      detail: fetchImage("/images/spas/design/nizzaII/nizzaII-detail.jpg"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Nizza II es una versión mejorada con capacidad para 5 personas, incluyendo una doble tumbona reclinable. Diseñado para maximizar la relajación, incorpora chorros ajustables para hidroterapia personalizada, iluminación LED y un sistema de eficiencia energética. Su diseño moderno y materiales duraderos lo convierten en una opción ideal para disfrutar de lujo y confort en cualquier espacio exterior.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "230 x 230 x 92 cm" },
        { title: "Asientos", value: "5 personas" },
        { title: 'Capacidad', value: '4 asientos y 1 tumbona'},
        { title: "Jets", value: "42 jets" },
        { title: "Bombas", value: "1 x 3 PS 2 velocidades + 2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1500 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '2 x 50 sq'},
        { title: "Peso", value: "350 / 1850 kg" },
      ],
      maker: {
        title: "El modelo Nizza II pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/nizzaII/options/Nizza2-Cascada5-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/nizzaII/options/Nizza2-Details2-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/nizzaII/options/Nizza2-Details-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/nizzaII/options/Nizza2-GeneralView2-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/nizzaII/options/Nizza2-TopView-Serie-Design.png"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/nizza/options/Nizza-Details-Serie-Design.jpg"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
    richmond: {
      title: "Richmond",
      serie: "Serie Design",
      header: fetchImage("/images/spas/design/richmond/richmond-hero.jpg"),
      detail: fetchImage("/images/spas/design/richmond/richmond-detail.jpg"),
      video: fetchImage("/images/spas/design/videos/design-video.mp4"),
      description: "El modelo Richmond ofrece un diseño espacioso para hasta 3 personas, con 1 asiento ergonómico y dos tumbonas para mayor comodidad. Equipado con chorros ajustables para una experiencia de hidroterapia personalizada, destaca por su iluminación LED y un sistema energético eficiente. Su combinación de lujo y funcionalidad lo hace ideal para transformar cualquier espacio exterior en un oasis de relajación.",
      certifications: [
        {
          title: "Ficha técnica",
          type: "document",
          src: fetchImage("/images/spas/strato/datasheets/strato24.pdf"),
        },
      ],
      specifications: [
        { title: "Medidas", value: "216 x 165 x 82 cm" },
        { title: "Asientos", value: "3 personas" },
        { title: 'Capacidad', value: '1 asiento y 2 tumbonas'},
        { title: "Jets", value: "41 jets" },
        { title: "Bombas", value: "2 x 3 PS 1 velocidad" },
        { title: "Volumen", value: "1100 L" },
        { title: "Electricidad", value: "230 V" },
        {title: 'Filtración', value: '2 x 50 sq'},
        { title: "Peso", value: "270 / 1370 kg" },
      ],
      maker: {
        title: "El modelo Nizza II pertenece a la Serie Design, de WaterWave Spas",
        href: "/series/design",
      },
      details: [
        {
          title: "Sofisticado",
          src: fetchImage("/images/spas/design/richmond/options/Richmond-Cascada2-Serie-Design.jpg"),
        },
        {
          title: "Ergonómico",
          src: fetchImage("/images/spas/design/richmond/options/Richmond-Details4-Serie-Design.jpg"),
        },
        {
          title: "Relajante",
          src: fetchImage("/images/spas/design/richmond/options/Richmond-Details6-Serie-Design.jpg"),
        },
        {
          title: "Potente",
          src: fetchImage("/images/spas/design/richmond/options/Richmond-Details7-Serie-Design.jpg"),
        },
        {
          title: "Exclusivo",
          src: fetchImage("/images/spas/design/richmond/options/Richmond-Details13-Serie-Design.jpg"),
        },
        {
          title: "Funcional",
          src: fetchImage("/images/spas/design/richmond/options/RichmondTop-Serie-Design.png"),
        },
      ],
      landing_cards: design_landing_cards,
      variants,
      materials: [
        { type: "Interior", value: "Casco en Acrílico + Estructura de Acero" },
        { type: "Exterior", value: "Revestimiento PVC" },
      ],
      design: design_by_DESIGN,
    },
  },

};
