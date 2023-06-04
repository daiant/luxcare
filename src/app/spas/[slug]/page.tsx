import styles from '@/styles/home.module.css';
import Hero from "@/components/hero/hero";
import Parallax from "@/components/parallax/parallax";
import { getSerie } from "@/lib/spa.utils";
import Link from "next/link";

export default function Series({ params }: { params: { slug: string } }) {
  const data = getSerie(params.slug);
  return <>
    {data && <>
      <Hero src="/test.jpg">
        <h1 className="hero__subtitle">{data?.title}</h1>
        <h2 className="hero__title">{data?.subtitle}</h2>
      </Hero>
      {data.items.map((spa, index) => {
        return <Link href={`/spas/${data.url}/${spa.url}`} key={spa.title}>
          <Parallax src={spa.img}>
            <div className={styles.parallax_content}>
              <p className={styles.parallax_title}>{spa.title}</p>
            </div>
          </Parallax>
        </Link>
      })}
    </>}
  </>
}