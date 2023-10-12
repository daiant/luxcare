import styles from '@/styles/home.module.css';
import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Link from 'next/link';
import { getSpaSeries } from '@/lib/spa.utils';
import Button from '@/components/button/button';

export default function Home() {
  const series = getSpaSeries();
  return (
    <main className={styles.home}>
      <Hero src="/test.jpg">
        <h1>Serie Vector</h1>
        <Button handleAction={'/contact'}>Explora</Button>
      </Hero>
      <div className={styles.intro}>
        <aside>
          <img src="intro.png" alt="" />
        </aside>
        <main>
          <p>Simple,</p>
          <p>Mente,</p>
          <p>Perfecto</p>
          <footer>
            <p>
              A través de los tiempos, el ser humano siempre ha buscado el éxito y la perfección de la forma más simple.
            </p>
            <p>
              Después de 4000 millones de años de vida, <code>luxcare</code> ha encontrado la forma de hacerlo posible.
            </p>
          </footer>
        </main>
      </div>
      <div className={styles.splash}>
        <p>nunca has</p>
        <p>estado tan</p>
        <p>cerca de experimentar</p>
        <p>una sensación tan <code>simplemente perfecta</code></p>
      </div>
      {series.map((serie => {
        return <Link href={`/spas/${serie.url}`} key={serie.title}>
          <Parallax src={serie.img}>
            <div className={styles.parallax_content}>
              <p className={styles.parallax_title}>{serie.title}</p>
              <p className={styles.parallax_subtitle}>{serie.subtitle}</p>
            </div>
          </Parallax>
        </Link>
      }))}
    </main>
  )
}
