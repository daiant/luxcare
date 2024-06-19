'use client';
import FadComponent from '@/components/dealers/fad/fad';
import InputDealers from '@/components/dealers/input-dealers/input-dealers';
import HomeContactForm from '@/components/home/contact/home-contact';
import { fetchImage } from '@/lib/fetch-image';
import styles from '@/styles/dealers.module.css';
import { useReCaptcha } from 'next-recaptcha-v3';
import React from 'react';
const dealers = [
  {
    name: 'LuxCare La Cañada',
    type: 'Distribuidor',
    location: 'Ejemplo de calle, No4, 46980',
    timetable: 'Lunes - Viernes: 09:00h 14:00h - 16:00h 19:30h',
    contact: 'Ver contacto',
    realContact: '12345678',
  }
]
export default function DealersPage() {
  const [showDealers, setShowDealers] = React.useState(false);
  const [customerLocation, setCustomerLocation] = React.useState<any>()
  const { executeRecaptcha } = useReCaptcha();
  async function onSearchLocation(value: google.maps.places.PlaceResult | null) {
    const token = executeRecaptcha('dealer_search_location');
    const host = 'https://luxcare-backoffice.vercel.app'
    const url = host + '/api/v1/dealer-search-location';
    await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, value })
    });
    setCustomerLocation(value);
    setShowDealers(true);
  }

  function handleContactClick(dealer: { name: string; type: string; location: string; timetable: string; contact: string; realContact: string; }) {
    const token = executeRecaptcha('dealer_contact_click');
    const host = 'https://luxcare-backoffice.vercel.app'
    const url = host + '/api/v1/dealer-contact-click';
    fetch(url, {
      method: 'POST', body: JSON.stringify({ token, dealer: dealer.name, customer_location: customerLocation })
    });
  }

  return <main className={styles.wrapper}>
    <section className={styles.header}>
      <div className={[styles.object, styles.left].join(' ')}>
        <img src={fetchImage('/images/dealers/mobile.png')}></img>
      </div>
      <div className={styles.content}>
        <h1><code>Conecta</code> con verdaderos distribuidores</h1>
        <p>Nuestros distribuidores oficiales están dedicados a
          ofrecer una calidad de servicio y experiencia incomparables. Están comprometidos a satisfacer todas tus necesidades LuxCare y se enorgullecen de brindar un servicio excelente y personalizado.</p>
      </div>
      <div className={[styles.object, styles.right].join(' ')}>
        <img src={fetchImage('/images/dealers/mobile.png')}></img>
      </div>
    </section>
    <section className={styles.fad}>
      <h1>Busca tu distribuidor más cercano</h1>
      <div className={styles.content}>
        <aside>
          <InputDealers onSearch={onSearchLocation} />
          {showDealers && <>
            <ul>
              {dealers.map(dealer => <DealerInfo dealer={dealer} onClick={() => handleContactClick(dealer)} />)}
            </ul>
          </>}
          {!showDealers && <p style={{ margin: '8px 0 0 8px' }}>
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
        <img src={fetchImage("/images/spas/crown.webp")} alt="" />
      </div>
    </section>
    <section className={styles.keys}>
      <h1>Buscamos inspirar la vida de nuestros clientes, creando conexiones significativas y duraderas.</h1>
      <div className={styles.main}>
        <aside>
          <img src={fetchImage("/images/spas/crown.webp")} alt="" />
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
const DealerInfo = ({ dealer, onClick }: { onClick: Function, dealer: { name: string; type: string; location: string; realContact: string; contact: string; timetable: string; } }) => {
  const [hasClicked, setHasClicked] = React.useState(false);
  return <li key={dealer.name}>
    <div>
      <p className={styles.name}>{dealer.name}</p>
      <p className={styles.type}>{dealer.type}</p>
    </div>
    <p className={styles.link_wrapper}>
      {dealer.location}
    </p>
    <p className={styles.link_wrapper}>
      {hasClicked && <>
        <a href={"tel:+" + dealer.realContact} target='_blank'>{dealer.realContact}</a>
      </>}
      {!hasClicked && <>
        <a href={"tel:+" + dealer.contact} target='_blank' onClick={e => { e.preventDefault(), setHasClicked(true); onClick() }}>{dealer.contact}</a>
      </>}
    </p>
    <p>{dealer.timetable}</p>
  </li>
}