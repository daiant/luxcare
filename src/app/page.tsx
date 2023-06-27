import styles from '@/styles/home.module.css';
import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Link from 'next/link';
import { getSpaSeries } from '@/lib/spa.utils';
import Button from '@/components/button/button';

export default function Home() {
  const series = getSpaSeries();
  return (
    <main>
      <Hero src="/test.jpg">
        <div className={styles.center}>
          <h1>Simplemente perfecto</h1>
          <Button handleAction={'/contact'}>Contacta</Button>
        </div>
      </Hero>
      <Hero>
        <div className={styles.left}>
          <p>Exigirnos día a día los mejores resultados nos ha permitido jugar con el agua, entenderla, moldearla y experimentar hasta un nivel tan alto que incluso se ha convertido en nuestra pasión.</p>
          <p className='italic'>- Luxcare</p>
        </div>
      </Hero>
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
