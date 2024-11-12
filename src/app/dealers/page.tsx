/* eslint-disable @typescript-eslint/no-unsafe-function-type */
'use client';

import FadComponent from '@/components/dealers/fad/fad';
import InputDealers from '@/components/dealers/input-dealers/input-dealers';
import HomeContactForm from '@/components/home/contact/home-contact';
import { fetchImage } from '@/lib/fetch-image';
import styles from '@/styles/dealers.module.css';
import { useReCaptcha } from 'next-recaptcha-v3';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DealerContactClickRequest } from '../api/v1/dealer-contact-click/route';
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@/components/ui/accordion';

export type Dealer = {
  id: number;
  latitude: number;
  longitude: number;
}

export default function DealersPage() {
  const [showDialog, setShowDialog] = React.useState(true);
  const [dealers, setDealers] = React.useState<Dealer[]>([]);
  const [customerLocation, setCustomerLocation] = React.useState<google.maps.places.PlaceResult | null>(null)
  const { executeRecaptcha } = useReCaptcha();

  async function onSearchLocation(value: google.maps.places.PlaceResult | null) {
    const token = executeRecaptcha('dealer_search_location');
    const url = '/api/v1/dealer-search-location';
    const result: { value: Dealer[] } = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, value })
    }).then(response => response.ok ? response.json() : { value: [] });

    setCustomerLocation(value);
    setDealers(result.value);
    setShowDialog(true);
  }


  return <main className={styles.wrapper}>
    <section className={styles.header}>
      <div className={styles.content}>
        <h1><code>Conecta</code> con verdaderos distribuidores</h1>
        <p>Nuestros distribuidores oficiales están dedicados a
          ofrecer una calidad de servicio y experiencia incomparables. Están comprometidos a satisfacer todas tus necesidades LuxCare y se enorgullecen de brindar un servicio excelente y personalizado.</p>
      </div>
    </section>
    <section className={styles.fad}>
      <h1>Busca tu distribuidor más cercano</h1>
      <div className={styles.content}>
        <aside>
          <InputDealers onSearch={onSearchLocation} />
          <DealerDialog
            dealers={dealers}
            show={showDialog}
            customerLocation={customerLocation}
            onHide={() => setShowDialog(false)}
          ></DealerDialog>
          {dealers.length <= 0 && <p style={{ margin: '8px 0 0 8px' }}>
            Introduce tu código postal y te mostraremos los distribuidores más cercanos a tu posición.
          </p>}
        </aside>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.3544375550764!2d-0.48548649999999993!3d39.5290576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605b0182fdcc49%3A0xd8c7da9f1666849b!2sGrupo%20Aquarea%20S.%20L.!5e0!3m2!1ses!2ses!4v1717006596896!5m2!1ses!2ses" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    <section className={styles.about_cta}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Tu destino preferido: una experiencia spa de alta gama</h1>
          <p>Nos esforzamos por fusionar la estética con la funcionalidad, creando un mundo de sensaciones y emociones.</p>
          <Button>
            <a href="/about">Sobre nosotros</a>
          </Button>
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
    <section className={styles.fad_wrapper}>
      <FadComponent></FadComponent>
    </section>
    <section className={styles.contact}>
      <HomeContactForm />
    </section>
  </main>
}

function DealerDialog({ dealers, show, onHide, customerLocation }: { dealers: Dealer[], show: boolean, onHide: Function, customerLocation: google.maps.places.PlaceResult | null }) {
  const { executeRecaptcha } = useReCaptcha();
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleContactClick(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const token = await executeRecaptcha('dealer_contact_click');
    const url = '/api/v1/dealer-contact-click';
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    fetch(url, {
      method: 'POST', body: JSON.stringify({
        token, dealers: dealers, customer_location: customerLocation, customer_info: {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
        }
      } as DealerContactClickRequest),
    })
      .then(() => setSuccess(true))
      .finally(() => setLoading(false));

  }
  const getTitle = () => {
    return success ? '¡Informacion enviada!' : 'Has encontrado el nirvana, casi';
  }

  const getDescription = () => {
    return success ? 'Hemos enviado la informacion de los distribuidores mas cercanos a ti a tu correo. Si no lo encuentras, no olvides comprobar la carpeta de spam, o contactar con nosotros' : 'Para saber con qué distribuidores puedes conectarte, introduce tu correo electrónico, o deja que te llamemos';
  }
  return <Dialog open={show} onOpenChange={(open) => !open ? onHide() : undefined}>
    <DialogContent>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogDescription>{getDescription()}</DialogDescription>

      <div className='flex flex-row-reverse gap-8'>
        {!success && <form className='flex flex-col justify-center gap-y-3 grow' onSubmit={handleContactClick}>
          <div className="grid gap-y-1">
            <label>Nombre</label>
            <Input type='text' name='name' />
          </div>
          <div className="grid gap-y-1">
            <label>Teléfono</label>
            <Input type='tel' name='phone' />
          </div>
          <div className="grid gap-y-1">
            <label>Correo electrónico</label>
            <Input type='email' name='email' />
          </div>
          <DialogFooter className='mt-2'>
            <Button type="submit" disabled={loading}>Quiero saber más</Button>
          </DialogFooter>
        </form>}
      </div>
      {success && <DialogFooter>
        <Button type="submit" onClick={() => onHide()}>Seguir navegando</Button>
      </DialogFooter>}
    </DialogContent>
  </Dialog>
}