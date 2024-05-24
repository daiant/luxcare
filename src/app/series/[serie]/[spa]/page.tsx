import HomeContactForm from '@/components/home/contact/home-contact';
import styles from '@/styles/spa.module.css';
export default function SpaPage() {
  return <main className={styles.main}>
    <section className={styles.product}>
      <div className={styles.footer}>
        <p>Serie Crown</p>
        <p>Modelo Euphoria</p>
        <p>213x213x90 cm</p>
        <p>7 personas</p>
        <a href="/contact" className={styles.link}>Contacta</a>
      </div>
      <div className={styles.title_wrapper}>
        <div className={styles.content}>
          <h2 className={styles.serie}>Serie Crown</h2>
          <h1 className={styles.model}>Modelo Euphoria</h1>
        </div>
        <div className={styles.configurator}>
          <p className={styles.title}>Variantes</p>
          <div className={styles.configuration} id='colors'>
            <p className={styles.configuration_title}>Colores</p>
            <ul className={styles.configuration_options}>
              <li title='negro'></li>
              <li title='rojo'></li>
              <li title='blanco'></li>
            </ul>
          </div>
        </div>
        <div className={styles.actions}>
          <a href="/dealers" className={styles.link_secondary}>Encuentra tu distribuidor</a>
        </div>
      </div>
      <ul className={styles.product_images}>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
      </ul>
      <div className={styles.product_info}>
        <details>
          <summary>Descripción</summary>
          <p>Lest faccabore quas eatio occum, odisit inihilit dolupta simuscil ipsam ut assit, core si cus, qui dolore volorro rumque volut aut facesserora pratem.  Uditati asitempore eatinum volorpori ut et, nist dolection rem dusant et dolorro odipissim quiae. Luptae volupta tquatquod quamus alitate volupidus excepernam autatas ut volla coriant occus ut vel ipsantium ium as explaccae nisciis ulpa aut dolorum, commos et pelia apiet excersp erorehenia consecum.</p>
        </details>
        <details>
          <summary>Certificaciones</summary>
          <p>Lest faccabore quas eatio occum, odisit inihilit dolupta simuscil ipsam ut assit, core si cus, qui dolore volorro rumque volut aut facesserora pratem.  Uditati asitempore eatinum volorpori ut et, nist dolection rem dusant et dolorro odipissim quiae. Luptae volupta tquatquod quamus alitate volupidus excepernam autatas ut volla coriant occus ut vel ipsantium ium as explaccae nisciis ulpa aut dolorum, commos et pelia apiet excersp erorehenia consecum.</p>
        </details>
        <details>
          <summary>Especificaciones</summary>
          <p>Lest faccabore quas eatio occum, odisit inihilit dolupta simuscil ipsam ut assit, core si cus, qui dolore volorro rumque volut aut facesserora pratem.  Uditati asitempore eatinum volorpori ut et, nist dolection rem dusant et dolorro odipissim quiae. Luptae volupta tquatquod quamus alitate volupidus excepernam autatas ut volla coriant occus ut vel ipsantium ium as explaccae nisciis ulpa aut dolorum, commos et pelia apiet excersp erorehenia consecum.</p>
        </details>
        <details>
          <summary>Descripción</summary>
          <p>Lest faccabore quas eatio occum, odisit inihilit dolupta simuscil ipsam ut assit, core si cus, qui dolore volorro rumque volut aut facesserora pratem.  Uditati asitempore eatinum volorpori ut et, nist dolection rem dusant et dolorro odipissim quiae. Luptae volupta tquatquod quamus alitate volupidus excepernam autatas ut volla coriant occus ut vel ipsantium ium as explaccae nisciis ulpa aut dolorum, commos et pelia apiet excersp erorehenia consecum.</p>
        </details>
        
      </div>
    </section>
    <HomeContactForm />
  </main>
}