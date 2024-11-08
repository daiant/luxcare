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
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import Button from "@/components/button/button";

export type DealerResponse = {
	id: number;
	latitude: number;
	longitude: number;
}

export default function DealersPage() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [dealers, setDealers] = React.useState<DealerResponse[]>([]);
  const [customerLocation, setCustomerLocation] = React.useState<google.maps.places.PlaceResult | null>(null)
  const { executeRecaptcha } = useReCaptcha();

  async function onSearchLocation(value: google.maps.places.PlaceResult | null) {
    const token = executeRecaptcha('dealer_search_location');
    const url = '/api/v1/dealer-search-location';
    const result: { value: DealerResponse[] } = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, value })
    }).then(response => response.ok ? response.json() : {value: []});

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
          <a href="/about">Sobre nosotros</a>
        </div>
        <img alt='' src={fetchImage("/images/spas/crown.webp")}/>
      </div>
    </section>
    <section className={styles.keys}>
      <h1>Buscamos inspirar la vida de nuestros clientes, creando conexiones significativas y duraderas.</h1>
      <div className={styles.main}>
        <aside>
          <img alt='' src={fetchImage("/images/spas/crown.webp")}/>
        </aside>
        <div className={styles.list}>
          <details>
            <summary>Autenticidad</summary>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime ducimus debitis reiciendis quis culpa et a quidem quisquam eveniet. Nesciunt inventore minima adipisci. Nostrum accusantium amet earum corrupti nobis?</p>
          </details>
          <details>
            <summary>Garantías sólidas</summary>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime ducimus debitis reiciendis quis culpa et a quidem quisquam eveniet. Nesciunt inventore minima adipisci. Nostrum accusantium amet earum corrupti nobis?</p>
          </details>
          <details>
            <summary>Compromiso</summary>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime ducimus debitis reiciendis quis culpa et a quidem quisquam eveniet. Nesciunt inventore minima adipisci. Nostrum accusantium amet earum corrupti nobis?</p>
          </details>
        </div>
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

export function DealerDialog({dealers, show, onHide, customerLocation}: {dealers: DealerResponse[], show: boolean, onHide: Function, customerLocation: google.maps.places.PlaceResult | null }) {
  const { executeRecaptcha } = useReCaptcha();
  const [email, setEmail] = React.useState('');

  async function handleContactClick(event: unknown) {
    (event as Event).preventDefault();

    const token = executeRecaptcha('dealer_contact_click');
    const url = '/api/v1/dealer-contact-click';

    const contact = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, dealers: dealers, customer_location: customerLocation, customer_info:  email}),
    }).then(response => response.ok ? response.json() : null);

    // if(contact?.value) {
    //   setDealerContact(contact.value);
    //   setHasClicked(true);
    // }
  }

  return <Dialog open={show}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Has encontrado el nirvana, casi</DialogTitle>
        <DialogDescription>Para saber con qué distribuidores puedes conectarte, introduce tu correo electrónico, o deja que te llamemos</DialogDescription>
      </DialogHeader>
      <label>Correo electrónico</label>
      <input type='email' name='email' />
      <DialogFooter>
        <button type="submit" onClick={(e) => onHide()}>Save changes</button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}