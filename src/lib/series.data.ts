import { fetchImage } from "./fetch-image";

export const crown = {
  title: "Crown",
  adjective: "Autenticidad",
  adjectives: "Grandeza. Exclusividad.",
  header: fetchImage("/images/spas/crown/header.webp"),
  cta_img: fetchImage("/images/spas/crown/crown_3.webp"),
  cta_2_img: fetchImage("/images/spas/crown/crown_4.webp"),
  url: "/series/crown",
  summary: {
    top: "Una experiencia simple",
    bottom: "mente perfecta",
    content:
      "Descubre la Serie Crown de Marquis Spas, una obra maestra de innovación en el mundo del spa. Esta colección redefine el estándar de lujo y rendimiento en hidromasaje, fusionando nuestras características terapéuticas más avanzadas con comodidades de primer nivel, dando lugar al sistema de hidromasaje más elegante y versátil del mercado.",
  },
  video: fetchImage("/images/spas/crown/broll.mp4"),
  mission: [
    { spa: "SUMMIT", content: "Llega hasta la cumbre." },
    { spa: "EPIC", content: "Conviértete en leyenda." },
    { spa: "EUPHORIA", content: "Expresión del buen gusto." },
    { spa: "DESTINY", content: "El escenario perfecto." },
    { spa: "RESORT", content: "Acapara las miradas." },
    { spa: "WISH", content: "Un sueño hecho realidad." },
    { spa: "SPIRIT", content: "Precisión en los detalles." },
  ],
  multimedia: {
    left: "Serie Crown: redefine el estándar de lujo y rendimiento en hidromasaje",
    right:
      "Descubre una experiencia de hidromasaje incomparable con su avanzada tecnología y características exclusivas.",
    right_src: fetchImage("/images/spas/crown/crown_2.webp"),
  },
  left: {
    top: "Cada spa de la Serie Crown presenta líneas y contornos suaves que no solo añaden un toque de sofisticación, sino que también mejoran la ergonomía y la comodidad del usuario.\n\nLos materiales de alta calidad seleccionados garantizan una durabilidad excepcional, mientras que los acabados realzan la belleza estética de cada modelo.",
    bottom:
      "Su construcción se basa en tecnología de vanguardia y artesanía experta, garantizando un rendimiento óptimo y una larga vida útil.\n\nSus sistemas de terapia y controles de última generación se integran de manera impecable, ofreciendo una experiencia de hidromasaje sin igual.",
  },
  steps: [
    {
      title: "MICROSILK",
      content:
        "Sumergirte en un jacuzzi Marquis con MicroSilk equivale a un tratamiento facial de oxígeno para todo tu cuerpo. Este innovador sistema hidrata y humecta simultáneamente, dejando tu piel suave como la seda y disminuyendo visiblemente las líneas de expresión y arrugas.",
    },
    {
      title: "CONSTANTCLEAN+",
      content:
        "ConstantClean+™ destaca como el sistema de gestión de agua más eficiente. Incluido de serie en todos los jacuzzis de la Colección Crown, este sistema garantiza una limpieza más completa del agua en un lapso notablemente breve.",
    },
    {
      title: "CONTROL DE FLUJO DINÁMICO",
      content:
        "Al girar la palanca hacia el rojo, activas los jets de la Zona H.O.T. rojos; hacia el azul, los jets azules. En cualquier punto intermedio, todos los jets de tu asiento se activan. Además, un control de aire intuitivo te permite ajustar la sensación perfecta.",
    },
    {
      title: "H.O.T. ZONES",
      content:
        "Estas áreas están diseñadas para dirigirse a zonas específicas del cuerpo. Funcionan como las manos expertas de un masajista, ideales para relajar grupos musculares tensos que necesitan un tratamiento especial.",
    },
  ],

  models: [
    {
      title: "Resort",
      serie: "Crown",
      capacity: "5 personas",
      jets: "50 jets",
      src: fetchImage("/images/spas/crown/models/resort.webp"),
      href: "/series/crown/resort",
    },
    {
      title: "Summit",
      serie: "Crown",
      capacity: "7 personas",
      jets: "65 jets",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/crown/summit",
    },
    {
      title: "Epic",
      serie: "Crown",
      capacity: "6 personas",
      jets: "53 jets",
      src: fetchImage("/images/spas/crown/models/epic.webp"),
      href: "/series/crown/epic",
    },
    {
      title: "Euphoria",
      serie: "Crown",
      capacity: "7 personas",
      jets: "53 jets",
      src: fetchImage("/images/spas/crown/models/euphoria.webp"),
      href: "/series/crown/euphoria",
    },
    {
      title: "Destiny",
      serie: "Crown",
      capacity: "7 personas",
      jets: "41 jets",
      src: fetchImage("/images/spas/crown/models/destiny.webp"),
      href: "/series/crown/destiny",
    },
    {
      title: "Wish",
      serie: "Crown",
      capacity: "5 personas",
      jets: "29 - 30 jets",
      src: fetchImage("/images/spas/crown/models/wish.webp"),
      href: "/series/crown/wish",
    },
    {
      title: "Spirit",
      serie: "Crown",
      capacity: "3 personas",
      jets: "32 jets",
      src: fetchImage("/images/spas/crown/models/spirit.webp"),
      href: "/series/crown/spirit",
    },
  ],
  other_series: [
    {
      title: "Serie Vector",
      subheading: "Potencia. Distinción.",
      content:
        "Flujo y una fuerza nunca antes vistos: un control y una versatilidad incomparables en cualquier otro concepto de sistema avanzado. Comando y control individuales, perfectamente diseñados para transportar una experiencia completa de spa.",
      url: "/series/vector",
      src: fetchImage("/images/spas/vector.webp"),
    },
    {
      subheading: "Elegancia. Diseño.",
      title: "Serie Strato",
      content:
        "El diseño de esta serie destaca por su elegancia, modernidad y líneas limpias. Los escalones de entrada central facilitan el acceso, mientras que el equipamiento de chorros y las áreas de masaje garantizan una experiencia única.",
      url: "/series/strato",
      src: fetchImage("/images/spas/strato/strato_3.webp"),
    },
  ],
};

export const vector = {
  title: "Vector",
  adjective: "Potencia",
  adjectives: "Potencia. Ergonomía.",
  header: "/images/spas/vector/vector_6.webp",
  cta_img: "/images/spas/vector/header.webp",
  cta_2_img: "/images/spas/vector/vector_3.webp",
  url: "/series/vector",
  summary: {
    top: "La nueva visión",
    bottom: "de entender el arte",
    content:
      "La serie Vector21 ofrece un flujo y una fuerza nunca antes vistos en el arte de los spas: un control y una versatilidad incomparables en cualquier otro concepto de sistema avanzado: un comando y control individuales, pero perfectamente diseñados para transportar una experiencia completa: un nuevo vehículo para transportar cuerpo, mente y alma.",
  },
  video: "/images/spas/vector/broll.webm",
  mission: [
    { spa: "V94", content: "La potencia importa. " },
    { spa: "V94L", content: "La esencia del poder." },
    { spa: "V84", content: "Autoridad indiscutible." },
    { spa: "V84L", content: "Presencia imponente." },
    { spa: "V77L", content: "Despierta emociones." },
    { spa: "V65L", content: "Capta la total atención." },
  ],
  multimedia: {
    left: "Serie Vector: spas que transportan mente, cuerpo y alma.",
    right:
      "Flujo y una fuerza nunca antes vistos. Un control y una versatilidad incomparables en cualquier otro concepto de sistema avanzado.",
    right_src: "/images/spas/vector/vector_2.webp",
  },
  left: {
    top: "El diseño de los spas Vector21 fusiona una estética contemporánea con funcionalidad avanzada. Cada modelo presenta líneas limpias y modernas, combinadas con una ergonomía excepcional para garantizar la máxima comodidad del usuario.",
    bottom:
      "La construcción se realiza con los más altos estándares de calidad. Se utilizan técnicas de fabricación de última generación y una mano de obra experta. Vector21, donde la calidad, el rendimiento y la innovación se unen para ofrecer una experiencia de spa única en su clase.",
  },
  steps: [
    {
      title: "MICROSILK",
      content:
        "Sumergirte en un jacuzzi Marquis con MicroSilk equivale a un tratamiento facial de oxígeno para todo tu cuerpo. Este innovador sistema hidrata y humecta simultáneamente, dejando tu piel suave como la seda y disminuyendo visiblemente las líneas de expresión y arrugas.",
    },
    {
      title: "CONSTANTCLEAN+",
      content:
        "ConstantClean+™ destaca como el sistema de gestión de agua más eficiente. Incluido de serie en todos los jacuzzis de la Colección Vector, este sistema garantiza una limpieza más completa del agua en un lapso notablemente breve.",
    },
    {
      title: "CONTROL DE FLUJO DINÁMICO",
      content:
        "Con un incremento de hasta un 40% en el volumen de flujo, el sistema V-O-L-T™ está meticulosamente diseñado para lograr un flujo alto con una presión baja. Esto implica la minimización de corrientes cruzadas, remolinos y turbulencias del agua que se desplazan perpendicularmente a la dirección del flujo.",
    },
    {
      title: "H.O.T. ZONES",
      content:
        "Estas áreas están diseñadas para dirigirse a zonas específicas del cuerpo. Funcionan como las manos expertas de un masajista, ideales para relajar grupos musculares tensos que necesitan un tratamiento especial.",
    },
  ],

  models: [
    {
      title: "V94",
      serie: "Vector",
      capacity: "7 personas",
      jets: "41 jets",
      src: "/images/spas/vector/models/V94.webp",
      href: "/series/vector/v94",
    },
    {
      title: "V94L",
      serie: "Vector",
      capacity: "7 personas",
      jets: "44 jets",
      src: "/images/spas/vector/models/V94L.webp",
      href: "/series/vector/v94l",
    },
    {
      title: "V84",
      serie: "Vector",
      capacity: "6 personas",
      jets: "37 jets",
      src: "/images/spas/vector/models/V84L.webp",
      href: "/series/vector/v84l",
    },
    {
      title: "V84L",
      serie: "Vector",
      capacity: "5 personas",
      jets: "36 jets",
      src: "/images/spas/vector/models/V84L.webp",
      href: "/series/vector/v84l",
    },
    {
      title: "V77L",
      serie: "Vector",
      capacity: "5 personas",
      jets: "27 jets",
      src: "/images/spas/vector/models/V77L.webp",
      href: "/series/vector/v77l",
    },
    {
      title: "V65L",
      serie: "Vector",
      capacity: "3 personas",
      jets: "22 jets",
      src: "/images/spas/vector/models/V65L.webp",
      href: "/series/vector/v65l",
    },
  ],
  other_series: [
    {
      title: "Serie Crown",
      subheading: "Elegancia. Exclusividad.",
      content:
        "Redefine el estándar de lujo y rendimiento en hidromasaje. Nacida de la galardonada Serie Signature y potenciada por las mejores características terapéuticas, la Serie Crown representa una arquitectura de sistema completamente nueva.",
      url: "/series/crown",
      src: "/images/spas/crown.webp",
    },
    {
      subheading: "Elegancia. Diseño.",
      title: "Serie Strato",
      content:
        "El diseño de esta serie destaca por su elegancia, modernidad y líneas limpias. Los escalones de entrada central facilitan el acceso, mientras que el equipamiento de chorros y las áreas de masaje garantizan una experiencia única.",
      url: "/series/strato",
      src: "/images/spas/strato/strato_3.webp",
    },
  ],
};

export const strato = {
  title: "Strato",
  adjective: "Diseño",
  adjectives: "Diseño. Minimalismo.",
  header: "/images/spas/strato/header.webp",
  cta_img: "/images/spas/strato/strato_2.webp",
  cta_2_img: "/images/spas/strato/strato_4.webp",
  url: "/series/strato",
  summary: {
    top: "Tu destino preferido",
    bottom: "en interiores y exteriores",
    content:
      "El elegante, moderno y lineal diseño eleva esta serie de spas al máximo nivel de confort. Los prácticos escalones de entrada central, el inteligente equipamiento de chorros y las sofisticadas áreas de masaje garantizan una experiencia de bienestar pura.",
  },
  video: "/images/spas/strato/broll.mp4",
  mission: [
    { spa: "Strato 2.1", content: "Redefine el concepto." },
    { spa: "Strato 2.4", content: "Supera las expectativas." },
  ],
  multimedia: {
    left: "Serie Strato: El Strato 2.1 y el nuevo Strato 2.4 son spas portátiles con 5 asientos, que destacan por su diseño contemporáneo de vanguardia.",
    right:
      "Nuestros spas ofrecen una combinación única de estilo y funcionalidad, diseñados para satisfacer las necesidades de los usuarios más exigentes. ",
    right_src: "/images/spas/strato/strato_3.webp",
  },
  left: {
    top: "",
    bottom:
      "Se utilizan paneles de aluminio de alta calidad para garantizar una estructura resistente y duradera, capaz de soportar las demandas del uso diario y resistir los elementos exteriores.\n\nAdemás, cuentan con una cubierta rígida patentada que proporciona protección adicional y asegura la seguridad del agua en todo momento.",
  },
  steps: [
    {
      title: "CONTROL REMOTO",
      content:
        "En los Spas Riviera tendrás a tu disposición un control remoto para encender y apagar tus bombas desde dentro del Spa. Y si quieres cambiar las luces y relajarte con la cromoterapia, ¡También!",
      link: "",
    },
    {
      title: "ACABADOS EXTERIORES",
      content:
        "Seguro que te ha llamado la atención. Tanto su cubierta multiusos como las imitaciones de madera exteriores están preparadas para durar muchos muchos años, además de ofrecerte un perfecto aislamiento térmico para mantener tu spa a la temperatura que deseas.",
      link: "",
    },
    {
      title: "DISEÑO EUROPEO",
      content:
        "Y por supuesto, fabricación 100% Made In Europe. Déjate llevar por la tranquilidad de tener el fabricante de tu spa cerca de casa. En LuxCare Spas ya te cuidamos nosotros, pero también te cuidará siempre Riviera Spa.",
      link: "",
    },
  ],

  models: [
    {
      title: "Strato 2.1",
      serie: "Strato",
      capacity: "4 personas",
      jets: "30 jets",
      src: "/images/spas/strato/models/strato_21.webp",
      href: "/series/strato/strato-21",
    },
    {
      title: "Strato 2.4",
      serie: "Strato",
      capacity: "5 personas",
      jets: "36 jets",
      src: "/images/spas/strato/models/strato_24.webp",
      href: "/series/strato/strato-24",
    },
  ],
  other_series: [
    {
      title: "Serie Crown",
      subheading: "Elegancia. Exclusividad.",
      content:
        "Redefine el estándar de lujo y rendimiento en hidromasaje. Nacida de la galardonada Serie Signature y potenciada por las mejores características terapéuticas, la Serie Crown representa una arquitectura de sistema completamente nueva.",
      url: "/series/crown",
      src: "/images/spas/crown.webp",
    },
    {
      title: "Serie Vector",
      subheading: "Potencia. Distinción.",
      content:
        "Flujo y una fuerza nunca antes vistos: un control y una versatilidad incomparables en cualquier otro concepto de sistema avanzado. Comando y control individuales, perfectamente diseñados para transportar una experiencia completa de spa.",
      url: "/series/vector",
      src: "/images/spas/vector.webp",
    },
  ],
};

export const design = {
  title: "Design",
  adjective: "Perfección.",
  adjectives: "Pureza. Perfección.",
  header: fetchImage("/images/spas/design/header.webp"),
  cta_img: fetchImage("/images/spas/crown/crown_3.webp"),
  cta_2_img: fetchImage("/images/spas/crown/crown_4.webp"),
  url: "/series/design",
  summary: {
    top: "Cada corazón",
    bottom: "latirá más rápido",
    content:
      "Las líneas rectas, impecables en su pureza, combinadas con tumbonas y asientos ergonómicos, elevan la estética y funcionalidad a un nivel inigualable, convirtiendo cada experiencia en un deleite para los sentidos.",
  },
  video: fetchImage("/images/spas/design/videos/design-video.mp4"),
  mission: [
    { spa: "ALASKA", content: "No dejes deseos por cumplir." },
    { spa: "COLUMBUS", content: "Lleno de innovaciones." },
    { spa: "JACKSON", content: "Garantiza las mejores vistas." },
    { spa: "NIZZA", content: "Extravagancia en estado puro." },
    { spa: "NIZZA II", content: "Una declaración de intereses." },
    { spa: "RICHMOND", content: "Una experiencia incomparable." },
  ],
  multimedia: {
    left: "Serie Design: redefine la pureza y sofisticación en cada línea.",
    right:
      "Lleva el diseño a un nuevo nivel, donde la perfección se combina con una experiencia de lujo.",
    right_src: fetchImage("/images/spas/crown/crown_2.webp"),
  },
  left: {
    top: "",
    bottom:
      "Cada spa de la Serie Design está diseñado con líneas rectas y precisas que reflejan la pureza en su forma, aportando una sensación de modernidad y elegancia a cualquier espacio.\n" +
      "\n" +
      "Los materiales de primera calidad empleados aseguran no solo una durabilidad sobresaliente, sino también una estética impecable que resalta en cualquier entorno.\n" +
      "\n" +
      "Su construcción se basa en la fusión de tecnología avanzada y un diseño refinado, garantizando un rendimiento excepcional y una experiencia inigualable.\n" +
      "\n" +
      "Equipados con sistemas de terapia de última generación y controles intuitivos, los spas de la Serie Design brindan una experiencia de hidromasaje única y placentera.\n",
  },
  steps: [
    {
      title: "EXTREME ISOLATION",
      content:
        "Mejora significativamente los beneficios de la hidroterapia. Un aislamiento de alta calidad que mantenga bajo control el consumo de energía incluso en climas fríos es lo más importante. El aislamiento Xtreme es único en el mercado.",
    },
    {
      title: "DESINFECCIÓN UV",
      content:
        "Destruye casi el 100% de las bacterias en el acto. odos los Spas de la Serie Design by Waterwave incluyen una lámpara de desinfección ultravioleta para facilitar el cuidado del agua. Esto hace que el cuidado del agua sea un juego de niños. El uso de productos químicos para el cuidado del agua se reduce al mínimo. La irradiación con luz UV concentrada puede destruir casi el 100% de todos los virus y bacterias en el acto.",
    },
    {
      title: "AIRBLOWER + AROMATERAPIA",
      content:
        "Agua cristalina, caliente y una fragancia relajante.  Añade fragancias estimulantes o calmantes en función de tus preferencias. Estas fragancias  liberan tensión física y mental cuando se inhalan. A través de la Serie Design by Waterwave Spas, el aroma se libera a través de los jets de aire o Airblowers.",
    },
  ],
  models: [
    {
      title: "Alaska",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/resort.webp"),
      href: "/series/design/alaska",
    },
    {
      title: "Columbus",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/design/columbus",
    },
    {
      title: "Jackson",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/design/jackson",
    },
    {
      title: "Nizza",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/design/nizza",
    },
    {
      title: "Nizza II",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/design/nizzaII",
    },
    {
      title: "Richmond",
      serie: "Design",
      capacity: "Placeholder",
      jets: "Placeholder",
      src: fetchImage("/images/spas/crown/models/summit.webp"),
      href: "/series/design/richmond",
    },
  ],
  other_series: [
    {
      title: "Serie Vector",
      subheading: "Potencia. Distinción.",
      content:
        "Flujo y una fuerza nunca antes vistos: un control y una versatilidad incomparables en cualquier otro concepto de sistema avanzado. Comando y control individuales, perfectamente diseñados para transportar una experiencia completa de spa.",
      url: "/series/vector",
      src: fetchImage("/images/spas/vector.webp"),
    },
    {
      subheading: "Elegancia. Diseño.",
      title: "Serie Strato",
      content:
        "El diseño de esta serie destaca por su elegancia, modernidad y líneas limpias. Los escalones de entrada central facilitan el acceso, mientras que el equipamiento de chorros y las áreas de masaje garantizan una experiencia única.",
      url: "/series/strato",
      src: fetchImage("/images/spas/strato/strato_3.webp"),
    },
  ],
};

export const SERIES = {
  crown,
  vector,
  strato,
  design,
};
