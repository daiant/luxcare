import styles from '@/styles/home.module.css';
import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero src="/test.jpg">
        <div className={styles.center}>
          <h1>Simplemente perfecto</h1>
          <button className={styles.primary}>Contacta</button>
        </div>
      </Hero>
      <Hero>
        <div className={styles.left}>
          <p>Exigirnos día a día los mejores resultados nos ha permitido jugar con el agua, entenderla, moldearla y experimentar hasta un nivel tan alto que incluso se ha convertido en nuestra pasión.</p>
          <p className='italic'>- Luxcare</p>
        </div>
      </Hero>
      <Link href="/next">
        <Parallax src='/test.jpg'>
          <div className={styles.parallax_content}>
            <p className={styles.parallax_title}>Serie title</p>
            <p className={styles.parallax_subtitle}>Marquis featured spa</p>
          </div>
        </Parallax>
      </Link>
      <Link href="/next">
        <Parallax src='/test.jpg'>
          <div className={styles.parallax_content}>
            <p className={styles.parallax_title}>Serie title</p>
            <p className={styles.parallax_subtitle}>Marquis featured spa</p>
          </div>
        </Parallax>
      </Link>
      <Link href="/next">
        <Parallax src='/test.jpg'>
          <div className={styles.parallax_content}>
            <p className={styles.parallax_title}>Serie title</p>
            <p className={styles.parallax_subtitle}>Marquis featured spa</p>
          </div>
        </Parallax>
      </Link>
    </main>
  )
}
