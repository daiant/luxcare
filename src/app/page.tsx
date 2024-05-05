import styles from '@/styles/home.module.css';
import beach from '../../public/home/beach.jpg';
import crown from '../../public/home/crown.jpg';
import vector from '../../public/home/vector.jpg';
import strato from '../../public/home/strato.jpg';
import NewsSummary from '@/components/news/summary/news-summary';
import InputAutocomplete from '@/components/form/input-autocomplete/input-autocomplete';
import RecommendationsSummary from '@/components/recommendations/summary/summary';
export default function Home() {
  return (
    <main className={`snap ${styles.main}`}>
      <section className={styles.banner}>
        <img className={styles.title} src='/home/luxcare.svg' alt='Luxcare' />
        <img className={styles.background} src={beach.src} alt="" />
        <p className={styles.scroll_indicator}>Scroll</p>
      </section>
      <section className={styles.mission}>
        <div role='heading'>
          <p>Simplemente</p>
          <p>perfecto</p>
        </div>
        <div role='contentinfo'>
          <p>LuxCare es el arte de ofrecer una experiencia única de compra, donde la creación de sensaciones auténticas, garantías sólidas, compromiso con la perfección y la búsqueda de la excelencia se combinan para ofrecer una experiencia simplemente perfecta.</p>
          <a href="/contact">Contacta</a>
        </div>
      </section>
      <section className={styles.series}>
        <article className={styles.serie}>
          <div role='contentinfo'>
            <p className={styles.subtitle}>Visión. Equilibrio.</p>
            <p className={styles.title}>Serie Crown</p>
            <a href="/series/crown">Acapara las miradas</a>
          </div>
          <img src={crown.src} alt="Crown" />
        </article>
        <article className={styles.serie}>
          <div role='contentinfo'>
            <p className={styles.subtitle}>Distinción. Diseño.</p>
            <p className={styles.title}>Serie Vector</p>
            <a href="/series/vector">Despierta emociones</a>
          </div>
          <img src={vector.src} alt="Vector" />
        </article>
        <article className={styles.serie}>
          <div role='contentinfo'>
            <p className={styles.subtitle}>La cumbre. El icono.</p>
            <p className={styles.title}>Serie Strato</p>
            <a href="/series/crown">Supera las expectativas</a>
          </div>
          <img src={strato.src} alt="Strato" />
        </article>
      </section>
      <section className={styles.cta}>
        <p role='heading'>Tu destino preferido</p>
        <div role='contentinfo'>
          <p>Creamos sensaciones únicas y garantizamos perfección y compromiso en cada detalle.</p>
          <p>En LuxCare Spas, somos más que un producto; somos parte de tu estilo de vida. Nos acompañamos en tus momentos de relajación, en tus celebraciones especiales y en tu búsqueda de bienestar.</p>
        </div>
        <div className={styles.carousel}>
          <img alt="crown" src={crown.src} />
          <img alt="vector" src={vector.src} />
          <img alt="strato" src={strato.src} />
        </div>
      </section>
      <section className={styles.keys}>
        <p role='heading'>Las claves del éxito</p>
        <div role='list'>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/SketchLogo.svg'} alt="" />
            <p className={styles.title}>Exclusividad</p>
            <p className={styles.subtitle}>La exclusividad de LuxCare Spas se manifiesta en cada detalle, desde la atmósfera cuidadosamente diseñada hasta los procesos personalizados que ofrecen una experiencia única para cada cliente.</p>
          </div>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/Lightbulb.svg'} alt="" />
            <p className={styles.title}>Diseño</p>
            <p className={styles.subtitle}>LuxCare entiende que cada cliente es único, por lo que ofrece una amplia gama de opciones de personalización para adaptarse a diferentes gustos y preferencias.</p>
          </div>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/Target.svg'} alt="" />
            <p className={styles.title}>Atención</p>
            <p className={styles.subtitle}>LuxCare valora a cada cliente como único y trata a cada uno con la atención individualizada que se merece. El equipo de LuxCare está siempre disponible para proporcionar orientación y apoyo personalizado.</p>
          </div>
        </div>
        <a href="/contact">Contacta ahora</a>
      </section>
      <section className={styles.news}>
        <p role='heading' className={styles.title}>Últimas noticias</p>
        <NewsSummary />
      </section>
      <section className={styles.news}>
        <RecommendationsSummary />
      </section>
      <section className={styles.cta_form}>
        <p role='heading'>Contacta con nosotros</p>
        <p>Encuentra tu proveedor más cercano</p>
        <form>
          <InputAutocomplete
            required={true} label='Ubicación' name='zipcode' type='text' icon='/icons/location.svg'></InputAutocomplete>
          <a href='/contact'>Contactar</a>
        </form>

      </section>
    </main>
  )
}
