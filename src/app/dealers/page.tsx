/* eslint-disable @typescript-eslint/no-unsafe-function-type */
'use client';

import HomeContactForm from '@/components/home/contact/home-contact';
import {fetchImage} from '@/lib/fetch-image';
import styles from '@/styles/dealers.module.css';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

export type Dealer = {
  id: number;
  latitude: number;
  longitude: number;
}

export default function DealersPage() {
  return <main className={styles.wrapper}>
    <section className={styles.header}>
      <div className={styles.content}>
        <h1><code>Conecta</code> con verdaderos distribuidores</h1>
        <p>Nuestros distribuidores oficiales están dedicados a
          ofrecer una calidad de servicio y experiencia incomparables. Están comprometidos a satisfacer todas tus necesidades LuxCare y se enorgullecen de brindar un servicio excelente y personalizado.</p>
      </div>
    </section>
    <section className={styles.about_cta}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Tu destino preferido: una experiencia spa de alta gama</h1>
          <p>Nos esforzamos por fusionar la estética con la funcionalidad, creando un mundo de sensaciones y emociones.</p>
        </div>
        <img alt='' src={fetchImage("/images/spas/crown.webp")} />
      </div>
    </section>
    <section className={styles.keys}>
      <h1>Buscamos inspirar la vida de nuestros clientes, creando conexiones significativas y duraderas.</h1>
      <div className={styles.main}>
        <aside>
          <img alt='' src={fetchImage("/images/spas/crown.webp")} />
        </aside>
        <Accordion type='single' collapsible className="w-full">
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-lg'>Autenticidad</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci neque doloribus cum magni, quo vel dolorem accusamus non ex labore aperiam, maxime ad vero optio sint, veniam at. Quos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-lg'>Garantías sólidas</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci neque doloribus cum magni, quo vel dolorem accusamus non ex labore aperiam, maxime ad vero optio sint, veniam at. Quos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-lg'>Compromiso</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci neque doloribus cum magni, quo vel dolorem accusamus non ex labore aperiam, maxime ad vero optio sint, veniam at. Quos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    <section className={styles.contact}>
      <HomeContactForm />
    </section>
  </main>
}
