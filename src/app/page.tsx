import styles from '@/styles/home.module.css';
import crown from '../../public/home/crown.webp';
import vector from '../../public/home/vector.webp';
import strato from '../../public/home/strato.webp';
import NewsSummary from '@/components/news/summary/news-summary';
import InputAutocomplete from '@/components/form/input-autocomplete/input-autocomplete';
import RecommendationsSummary from '@/components/recommendations/summary/summary';
import HomeContactForm from '@/components/home/contact/home-contact';
import HomeCarouselComponent from '@/components/home/carousel/carousel';
export default function Home() {
  return (
    <main className={`snap ${styles.main}`}>
      <section className={styles.banner}>
        <div className={styles.header}>
          <h1>LuxCare Spas</h1>
          <h2>
            <span>Simple</span>
            <span>Mente</span>
            <span>Perfecto</span>
          </h2>
        </div>
        <video src="/home/watermarked_preview.webm" loop muted playsInline autoPlay></video>
      </section>
      {/* <section className={styles.mission}>
        <div role='heading'>
          <p>Una sensación</p>
          <p>simplemente perfecta</p>
        </div>
        <div role='contentinfo'>
          <p</p>
          <a href="/contact">Contacta</a>
        </div>
      </section> */}
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
        <div role='contentinfo'>
          <p>Tu destino preferido</p>
          <p>LuxCare es el arte de ofrecer una experiencia única de compra, donde la creación de sensaciones auténticas, garantías sólidas, compromiso con la perfección y la búsqueda de la excelencia se combinan para ofrecer una experiencia simplemente perfecta.</p>
        </div>
        <HomeCarouselComponent />
      </section>
      <section className={styles.keys}>
        <div>
          <p role='heading'>LuxCare, nuestra forma de ser únicos.</p>
          <p>Vamos más allá de ofrecer productos de alta gama como Marquis Spas y Riviera Pool. Lo que nos hace destacar es la pasión que ponemos en cada recomendación que hacemos y en cada experiencia que proporcionamos. Nos esforzamos por entender las preferencias de nuestros clientes y reflejar su estilo en cada sugerencia, ofreciendo opciones que no solo son elegantes, sino que también brindan momentos de relajación y bienestar incomparables.</p>
          <a href="/contact">Contacta ahora</a>
        </div>
        <div role='list'>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/SketchLogo.svg'} alt="" />
            <div className={styles.content}>
              <p className={styles.title}>Exclusividad</p>
              <p className={styles.subtitle}>La exclusividad de LuxCare Spas se manifiesta en cada detalle, desde la atmósfera cuidadosamente diseñada hasta los procesos personalizados que ofrecen una experiencia única para cada cliente.</p>
            </div>
          </div>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/Lightbulb.svg'} alt="" />
            <div className={styles.content}>
              <p className={styles.title}>Diseño</p>
              <p className={styles.subtitle}>LuxCare entiende que cada cliente es único, por lo que ofrece una amplia gama de opciones de personalización para adaptarse a diferentes gustos y preferencias.</p>
            </div>
          </div>
          <div role='listitem'>
            <img className={styles.icon} src={'/icons/Target.svg'} alt="" />
            <div className={styles.content}>
              <p className={styles.title}>Atención</p>
              <p className={styles.subtitle}>LuxCare valora a cada cliente como único y trata a cada uno con la atención individualizada que se merece. El equipo de LuxCare está siempre disponible para proporcionar orientación y apoyo personalizado.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.news}>
        <p role='heading' className={styles.title}>Últimas noticias</p>
        <NewsSummary />
      </section>
      <section className={styles.news}>
        <RecommendationsSummary />
      </section>
      <section className={styles.news}>
        <HomeContactForm />
      </section>
      {/* <section className={styles.cta_form}>
        <p role='heading'>Contacta con nosotros</p>
        <p>Encuentra tu proveedor más cercano</p>
        <form>
          <InputAutocomplete
            required={true} label='Ubicación' name='zipcode' type='text' icon='/icons/location.svg'></InputAutocomplete>
          <a href='/contact'>Contactar</a>
        </form>
      </section> */}
    </main>
  )
}
