import styles from '@/styles/home.module.css';
import Button from '@/components/button/button';
import Carousel from '@/components/carousel/carousel';
import Hero from '@/components/hero/hero';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { series } from '@/lib/spas.data';
import NewsSummary from '@/components/news/summary/news-summary';


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
        <Carousel series={series} element='#splash' />
        <div className={styles.splash} id='splash'>
          <p>nunca has</p>
          <p>estado tan</p>
          <p>cerca de experimentar</p>
          <p>una sensación tan <code>simplemente perfecta</code></p>
        </div>
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
