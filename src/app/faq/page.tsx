import styles from "@/styles/dealers.module.css";
import HomeContactForm from "@/components/home/contact/home-contact";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const faqs = [
  {
    question: '¿Los Spas LuxCare son de interior o exterior?',
    answer: ['Los Spas LuxCare están diseñados para instalarse tanto en el interior como en el exterior.'],
  },
  {
    question: '¿Qué necesito tener para instalar un Spa LuxCare?',
    answer: [
      'Para su instalación, es necesario contar con un suelo nivelado, un punto de desagüe, una toma de agua para el llenado y una conexión eléctrica adecuada al consumo del Spa.',
      'Si deseas instalarlo en una terraza, es fundamental solicitar un informe de resistencia del suelo, ya que un Spa puede superar los 1.500 kg.'
    ],
  },
  {
    question: '¿Debo de poner alguna base en el suelo?',
    answer: [
      'El Spa debe descansar sobre su base. La base actúa como una barrera contra la humedad del suelo. Debe ser plana, resistente y nivelada. Los materiales más recomendados son hormigón, grava, madera u otro material sólido.',
    ],
  },
  {
    question: '¿Qué instalación eléctrica se necesita?', answer: [
      'Es aconsejable instalar una línea y un diferencial independientes desde el cuadro eléctrico.'
    ]
  },
  {
    question: '¿Cuánto va a consumir el Spa?', answer: [
      'Los detalles específicos variarán según el modelo y su potencia. Para conocer el consumo exacto, revisa las fichas técnicas de cada Spa.'
    ]
  },
  {
    question: '¿Cómo se llena y se vacía el Spa?',
    answer: ['Llenar el Spa es muy sencillo: solo necesitas conectar una manguera al punto de llenado y dejar que se llene hasta el nivel adecuado, marcado en el interior del Spa bajo el nombre ‘’Water Level’’.', 'Para vaciar tu Spa, solo tendrás que conectar una manguera al punto de desagüe y dirigirla hacia un área apropiada. Como segunda opción, podrías vaciarlo manualmente con una bomba de agua.']
  },
  {
    question: '¿Cómo se mantiene el agua del Spa?',
    answer: ['Nuestros Spas están equipados con un sistema de filtración y desinfección automático. Al complementarlo con pastillas de bromo, recomendadas para el mantenimiento, podrás conservar el agua en perfecto estado durante varios meses.']
  },
  {question: '¿El Spa incluye una cubierta?', answer: ['Sí, todos nuestros Spas vienen con una cubierta.']},
  {
    question: '¿El IVA está incluido en los precios?',
    answer: ['Sí, todos nuestros precios incluyen el IVA. Para envíos a Canarias, Ceuta, Melilla o al extranjero, contáctanos y te proporcionaremos un presupuesto personalizado.']
  },
  {
    question: '¿Ofrecéis servicio técnico en caso de avería?',
    answer: ['Sí, contamos con servicio técnico disponible en todas las provincias, incluidas las Islas Baleares y Canarias.']
  }
]

export default function FAQPage() {
  return <main style={{paddingInline: 'var(--padding)'}}>
    <h1 className='mt-24 mb-12 text-5xl font-medium'>Preguntas frecuentes</h1>
    <Accordion type='multiple' className='max-w-[900px] mx-auto mb-12 px-4 rounded'>
      {faqs.map((faq) => (
        <AccordionItem value={faq.question} key={faq.question}>
          <AccordionTrigger className='text-2xl'>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer.map(a => <p className='text-lg' key={a}>{a}</p>)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    <section className={styles.contact}>
      <HomeContactForm/>
    </section>
  </main>
}