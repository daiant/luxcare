import styles from '@/styles/home.module.css';
import Button from '@/components/button/button';
import Carousel from '@/components/carousel/carousel';
import Hero from '@/components/hero/hero';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { series } from '@/lib/spas.data';
import NewsSummary from '@/components/news/summary/news-summary';
import Slider from '@/components/slider/slider';
import Contact from './contact/page';


export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.home}>
        <div className={styles.intro}>
          <aside>
            <img src="/home/intro.webp" alt="" />
          </aside>
          <section>
            <span className={styles.separator}></span>
            <img src="/icons/slogan.svg" alt="Simplemente perfecto" />
            <footer>
              <p>
                <code>LuxCare</code> es mucho más que un spa. Es el arte de ofrecer una experiencia única creada exclusivamente para ti.
              </p>
            </footer>
          </section>
        </div>
        <Carousel series={series} element='#philosophy' />
        {/* <div className={styles.splash} id='splash'>
          <p>nunca has</p>
          <p>estado tan</p>
          <p>cerca de experimentar</p>
          <p>una sensación tan <code>simplemente perfecta</code></p>
        </div> */}
        <section className={styles.philosophy} id='philosophy'>
          <div className={styles.cta}>
            <p>Si buscas lo mejor, simplemente</p>
            <img src="/icons/luxcare.svg" alt="" />
            <p> Llevamos 20 años creando experiencias Spa. Descubre quiénes somos.</p>
            <button>Ver más</button>
          </div>
          <Slider />
        </section>
        <section className={styles.benefits}>
          <p role='title'>Las claves de la perfección</p>
          <ul>
            <li>
              <div role='heading'>
                <img src="/icons/fish.svg" alt="Fish" />
                <p>Exclusividad</p>
              </div>
              <p>Ofrecemos un lore ipsum dolor sit amet lore ipsum dolor sit ametlore ipsum dolor sit amet</p>
            </li>
            <li>
              <div role='heading'>
                <img src="/icons/fish.svg" alt="Fish" />
                <p>Diseño</p>
              </div>
              <p>Ofrecemos un lore ipsum dolor sit amet lore ipsum dolor sit ametlore ipsum dolor sit amet</p>
            </li>
            <li>
              <div role='heading'>
                <img src="/icons/fish.svg" alt="Fish" />
                <p>Atención</p>
              </div>
              <p>Ofrecemos un lore ipsum dolor sit amet lore ipsum dolor sit ametlore ipsum dolor sit amet</p>
            </li>
          </ul>
        </section>
        <Hero src="/home/banner.jpg">
          <h1>Serie Strato</h1>
          <Button handleAction={'/spas/strato'}>Explora</Button>
        </Hero>
        <section>
          <NewsSummary />
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
