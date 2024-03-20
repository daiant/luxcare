import styles from '@/styles/home.module.css';
import Button from '@/components/button/button';
import Carousel from '@/components/carousel/carousel';
import Hero from '@/components/hero/hero';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';


export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.home}>
        <Carousel />
        <div className={styles.intro}>
          <aside>
            <img src="intro.png" alt="" />
          </aside>
          <section>
            {/* <p>Simple,</p>
            <p>Mente,</p>
            <p>Perfecto</p> */}
            <img src="/icons/logo.svg" alt="Simplemente perfectop" />
            <footer>
              <p>
                A través de los tiempos, el ser humano siempre ha buscado el éxito y la perfección de la forma más simple.
              </p>
              <p>
                Después de 4000 millones de años de vida, <code>luxcare</code> ha encontrado la forma de hacerlo posible.
              </p>
            </footer>
          </section>
        </div>
        <div className={styles.splash}>
          <p>nunca has</p>
          <p>estado tan</p>
          <p>cerca de experimentar</p>
          <p>una sensación tan <code>simplemente perfecta</code></p>
        </div>
        <Hero src="/test.webp">
          <h1>Serie Vector</h1>
          <Button handleAction={'/spas/vector'}>Explora</Button>
        </Hero>
      </main>
      <Footer></Footer>
    </>
  )
}
