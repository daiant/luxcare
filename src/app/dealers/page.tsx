'use client';
import HomeContactForm from '@/components/home/contact/home-contact';
import styles from '@/styles/dealers.module.css';

export default function DealersPage() {
  return <main className={styles.wrapper}>
    <section className={styles.header}>
      <div className={[styles.object, styles.left].join(' ')}>
        <img src='/images/dealers/mobile.png'></img>
      </div>
      <div className={styles.content}>
        <h1><code>Conecta</code> con verdaderos distribuidores</h1>
        <p>Nuestros distribuidores oficiales están dedicados a
          ofrecer una calidad de servicio y experiencia incomparables. Están comprometidos a satisfacer todas tus necesidades LuxCare y se enorgullecen de brindar un servicio excelente y personalizado.</p>
      </div>
      <div className={[styles.object, styles.right].join(' ')}>
        <img src='/images/dealers/mobile.png'></img>
      </div>
    </section>
    <section className={styles.fad}>
      <h1>Busca tu distribuidor más cercano</h1>
      <div className={styles.content}>
        <aside>
          <input placeholder="Introduce tu código postal" type="search" name="zipCode" id="zipCode" />
          <ul>
            <li>
              <div>
                <p className={styles.name}>Luxcare Mallorca</p>
                <p className={styles.type}>Distribuidor</p>
              </div>
              <p className={styles.link_wrapper}>
                <a href="https://maps.google.com" target='_blank'>Ejemplo de calle, No4, 46980</a>
              </p>
              <p className={styles.link_wrapper}>
                <a href="tel:+349126598712" target='_blank'>91 265 987</a>
              </p>
              <p>Lunes - Viernes: 09:00h 14:00h - 16:00h 19:30h</p>
              <a href="#">Explorar distribuidor</a>
            </li>
          </ul>
        </aside>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.3544375550764!2d-0.48548649999999993!3d39.5290576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605b0182fdcc49%3A0xd8c7da9f1666849b!2sGrupo%20Aquarea%20S.%20L.!5e0!3m2!1ses!2ses!4v1717006596896!5m2!1ses!2ses" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    <section className={styles.about_cta}>
      <div className={styles.content}>
        <h1>Tu destino preferido: una experiencia spa de alta gama</h1>
        <p>Nos esforzamos por fusionar la estética con la funcionalidad, creando un mundo de sensaciones y emociones.</p>
        <a href="/about">Sobre nosotros</a>
      </div>
      <img src="" alt="" />
    </section>
    <section className={styles.keys}>
      <h1>Buscamos inspirar la vida de nuestros clientes, creando conexiones significativas y duraderas.</h1>
      <div className={styles.main}>
        <aside>
          <img src="/images/spas/crown.webp" alt="" />
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
      {/* <FadComponent></FadCompon> */}
    </section>
    <section className={styles.contact}>
      <HomeContactForm />
    </section>
  </main>
}