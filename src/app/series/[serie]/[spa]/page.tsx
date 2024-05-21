import HomeContactForm from '@/components/home/contact/home-contact';
import styles from '@/styles/spa.module.css';
import Image from 'next/image';
export default function SpaPage() {
  return <main className={styles.main}>
    <div className={styles.product}>
      <aside className={styles.media}>
        <Image alt='' src='' className={styles.main_image}></Image>
        <ul className={styles.image_list}>
          <li>
            <Image alt='li' src=''></Image>
          </li>
        </ul>
      </aside>
      <div className={styles.content}>
        <div role='contentinfo'>
          <p className={styles.title}>Modelo Euphoria</p>
          <p className={styles.serie}>Serie Crown</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit tempora, deleniti provident amet tempore delectus libero. Libero, mollitia quod modi ducimus recusandae id impedit cum veritatis unde deleniti temporibus?</p>
        </div>
        <ul className={styles.interior_selector}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className={styles.exterior_selector}>
          <li></li>
          <li></li>
        </ul>
        <section className={styles.details}>
          <article className={styles.detail}>
            <header className={styles.header}>Descargas</header>
            <ul>
              <li>Descarga 1</li>
              <li>Descarga 2</li>
            </ul>
          </article>
          <article className={styles.detail}>
            <header className={styles.header}>Especificaciones</header>
            <ul>
              <li>Especificacion 1</li>
              <li>Especificacion 2</li>
            </ul>
          </article>
          <article className={styles.detail}>
            <header className={styles.header}>Materiales</header>
            <ul>
              <li>Material 1</li>
              <li>Material 2</li>
            </ul>
          </article>
        </section>
        <a href='/dealers'>Encuentra a tu distribuidor</a>
      </div>
    </div>
    <div className={styles.section}>
      <div role='contentinfo'>
        <p>Disenio por</p>
        <p>Marquis Spas</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis fuga possimus quaerat corrupti repudiandae unde facilis. Voluptatem natus omnis ullam nisi voluptas blanditiis quia pariatur. Hic ex sapiente fuga.</p>
      </div>
      <Image src='' alt=''></Image>
    </div>
    <div className={styles.section}>
      <div role='contentinfo'>
        <p>Disenio por</p>
        <p>Marquis Spas</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis fuga possimus quaerat corrupti repudiandae unde facilis. Voluptatem natus omnis ullam nisi voluptas blanditiis quia pariatur. Hic ex sapiente fuga.</p>
      </div>
      <Image src='' alt=''></Image>
    </div>
    <HomeContactForm />
  </main>
}