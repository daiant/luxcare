'use client';

import { FormEvent, useState } from 'react';
import styles from '../contact/contact.module.css';
import dealers from './dealers.module.css';
import Header from '@/components/header/header';
import ContactForm from '@/components/contact/contact-form';
import DealersForm from '@/components/contact/dealers-form';

export default function DealersPage() {
  const [zipCode, setZipCode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    (event.target as any).reset();
    setSubmitted(true);
  }
  function handleZipCodeSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const data = new FormData(event.target as HTMLFormElement)
      setZipCode(data.get('zipcode') as string)
      setLoading(false);
    }, 1500);
  }

  return <>
    <Header />
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <img src='/contact/banner.jpg' alt='contacto' />
      </header>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <div>
            <p>Encuentra tu dealer mas cercano</p>
            {Boolean(zipCode) && <ul className={dealers.list}>
              <li>
                <img src="/dealers/dealer.jpg" alt="Dealer" />
                <div className={dealers.info}>
                  <p>Charli</p>
                  <small>La Cañada, Valencia.</small>
                </div>
              </li>
            </ul>}
          </div>

          <h1>DEALERS</h1>
        </aside>
        {loading && <>Cargando...</>}
        {!loading && <>
          {!Boolean(zipCode) && <DealersForm className={styles.form} onSubmit={handleZipCodeSubmit} submitted={false} />}
          {Boolean(zipCode) && <ContactForm className={styles.form} onSubmit={handleSubmit} submitted={submitted} />}
        </>
        }
      </main>
    </div>
  </>
}