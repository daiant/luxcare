'use client';

import FadComponent from '@/components/dealers/fad/fad';
import InputDealers from '@/components/dealers/input-dealers/input-dealers';
import HomeContactForm from '@/components/home/contact/home-contact';
import { fetchImage } from '@/lib/fetch-image';
import styles from '@/styles/dealers.module.css';
import { useReCaptcha } from 'next-recaptcha-v3';
import React from 'react';

export type Dealer = {
	id: number;
	name: string;
	type: number;
	website: string;
	description: string;
	timetable: string;
	direction: string;
	latitude: number;
	longitude: number;
}

export default function DealersPage() {
	const [dealers, setDealers] = React.useState<Dealer[]>([]);
  const [customerLocation, setCustomerLocation] = React.useState<google.maps.places.PlaceResult | null>(null)
  const { executeRecaptcha } = useReCaptcha();

  async function onSearchLocation(value: google.maps.places.PlaceResult | null) {
    const token = executeRecaptcha('dealer_search_location');
    const url = '/api/v1/dealer-search-location';
    const result: { value: Dealer[] } = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, value })
    }).then(response => response.ok ? response.json() : {value: []});

    setCustomerLocation(value);
		setDealers(result.value);
  }


  return <main className={styles.wrapper}>
    <section className={styles.header}>
      <div className={[styles.object, styles.left].join(' ')}>
        <img alt='' src={fetchImage('/images/dealers/mobile.png')} />
      </div>
      <div className={styles.content}>
        <h1><code>Conecta</code> con verdaderos distribuidores</h1>
        <p>Nuestros distribuidores oficiales están dedicados a
          ofrecer una calidad de servicio y experiencia incomparables. Están comprometidos a satisfacer todas tus necesidades LuxCare y se enorgullecen de brindar un servicio excelente y personalizado.</p>
      </div>
      <div className={[styles.object, styles.right].join(' ')}>
        <img alt='' src={fetchImage('/images/dealers/mobile.png')} />
      </div>
    </section>
    <section className={styles.fad}>
      <h1>Busca tu distribuidor más cercano</h1>
      <div className={styles.content}>
        <aside>
          <InputDealers onSearch={onSearchLocation} />
          {dealers.length > 0 && <>
            <ul>
              {dealers.map(dealer => <DealerInfo key={dealer.name} dealer={dealer} customerLocation={customerLocation} />)}
            </ul>
          </>}
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

const DealerInfo = ({ dealer, customerLocation }: { dealer: Dealer, customerLocation: unknown }) => {
	const [dealerContact, setDealerContact] = React.useState<string | null>(null);
  const [hasClicked, setHasClicked] = React.useState(false);
	const { executeRecaptcha } = useReCaptcha()

  async function handleContactClick(event: unknown) {
		(event as Event).preventDefault();

    const token = executeRecaptcha('dealer_contact_click');
    const url = '/api/v1/dealer-contact-click';

    const contact = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, dealer_id: dealer.id, customer_location: customerLocation }),
    }).then(response => response.ok ? response.json() : null);

		if(contact?.value) {
			setDealerContact(contact.value);
			setHasClicked(true);
		}
  }

	const formatTimetable = (timetable: string) => {
		return <>
			{timetable.split(';').map(day => <p key={day}>
				<span>{day.substring(0,1)}</span>
				<span>{': '}</span>
				<span>{day.substring(1, 3).padStart(2, '0')}</span>
				<span>{':'}</span>
				<span>{day.substring(3, 5).padStart(2, '0')}</span>
				<span>{'h - '}</span>
				<span>{day.substring(5, 7).padStart(2, '0')}</span>
				<span>{':'}</span>
				<span>{day.substring(7, 9).padStart(2, '0')}</span>
				<span>{'h'}</span>
			</p>)}
		</>
	}

  return <li key={dealer.name}>
    <div>
      <p className={styles.name}>{dealer.name}</p>
      <p className={styles.type}>{dealer.type}</p>
    </div>
    <p className={styles.link_wrapper}>
      {dealer.description}
    </p>
    <p className={styles.link_wrapper}>
      {dealer.direction}
    </p>
    <p className={styles.link_wrapper}>
      {hasClicked && <>
        <a href={"tel:+" + dealerContact} target='_blank'>{dealerContact}</a>
      </>}
      {!hasClicked && <>
        <a href="" onClick={handleContactClick}>Ver contacto</a>
      </>}
    </p>
    <div>{formatTimetable(dealer.timetable)}</div>
  </li>
}
