import HomeContactForm from '@/components/home/contact/home-contact';
import SeriesSliderComponent from '@/components/series/slider/series-slider';
import { fetchImage } from '@/lib/fetch-image';
import { SERIES } from '@/lib/series.data';
import styles from '@/styles/marquis-landings.module.css';
export default function FlowControlPage() {
  return <>
    <header className={styles.header}>
      <div className={styles.title_wrapper}>
        <h2>Marquis Spas</h2>
        <h1>Flow Control</h1>
      </div>

      <div className={styles.subheading_wrapper}>
        <span>Imagen</span>
        <p>Haz que tu piel se sienta sedosa gracias a su rápida regeneración</p>
      </div>
    </header>
    <main>
      <section className={styles.parallax}>
        <p className={styles.fixed}>Elimina todas tus preocupaciones</p>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
      </section>
      <section className={styles.details}>
        <div className={styles.content_wrapper}>
          <p className={styles.title}>Experimenta el poder de las microburbujas</p>
          <div className={styles.content}>
            <p>Una burbuja MicroSilk es aproximadamente 50 a 100 veces más
              pequeña que una burbuja típica de una bañera de hidromasaje.</p>
            <p>Las burbujas creadas no solo son mucho más pequeñas, sino que también están cargadas negativamente.</p>
            <p>Se cree que los iones cargados negativamente aumentan la producción de serotonina en los seres humanos, que es responsable de la estabilidad emocional, una sensación de bienestar y promueve el sueño reparador.</p>
          </div>
        </div>
        <div className={styles.details_wrapper}>
          <p className={styles.detail}>Aumento del metabolismo de la piel</p>
          <p className={styles.detail}>Crecimiento de las células de la piel</p>
          <p className={styles.detail}>Limpieza más profunda en los poros</p>
          <p className={styles.detail}>Reducción de líneas finas y arrugas</p>
        </div>
      </section>
      <section className={styles.video}>
        <video src={fetchImage("/images/marquis-landings/broll.webm")} loop muted playsInline autoPlay></video>
      </section>
      <section className={[styles.details, styles.details_secondary].join(' ')}>
        <div className={styles.content_wrapper}>
          <p className={styles.title}>Los beneficios antiedad son perceptibles</p>
          <div className={styles.content}>
            <p>Con efectos reales y tangibles, sin cirugía y sin tiempo de recuperación, hay muchas razones por las que la hidroterapia MicroSilk® es el tratamiento antienvejecimiento de elección para la mujer o el hombre moderno y sofisticado.</p>
          </div>
        </div>
        <div className={styles.details_wrapper}>
          <div className={styles.detail}>
            <div className={styles.image}></div>
            <p>Mayor hidratación</p>
          </div>
          <div className={styles.detail}>
            <div className={styles.image}></div>
            <p>Niveles terapéuticos</p>
          </div>
          <div className={styles.detail}>
            <div className={styles.image}></div>
            <p>Radicales libres</p>
          </div>
          <div className={styles.detail}>
            <div className={styles.image}></div>
            <p>Alivia eccemas y psoriasis</p>
          </div>
        </div>
      </section>
      <section className={styles.series}>
        <article>
          <h1>MicroSilk en Serie Crown</h1>
          <SeriesSliderComponent models={SERIES['crown'].models} />
        </article>
        <article>
          <h1>MicroSilk en Serie Vector</h1>
          <SeriesSliderComponent models={SERIES['vector'].models} />
        </article>
      </section>
      <section className={styles.faq}>
        <h1>Preguntas <br />más frecuentes</h1>
        <div className={styles.questions}>
          <details>
            <summary>Lorem</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Ipsum</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Dolor</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Sit</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Gamet</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Lorem</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Lorem</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Lorem</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
          <details>
            <summary>Lorem</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, adipisci. Animi et nesciunt laborum. Iusto nobis exercitationem sequi, incidunt impedit eveniet minima esse ut, accusamus harum nemo consequuntur ullam aperiam.</p>
          </details>
        </div>
      </section>
      <section className={styles.contact}>
        <HomeContactForm />
      </section>
    </main>
  </>
}