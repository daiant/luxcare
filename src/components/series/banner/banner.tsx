'use client';

import React from 'react';
import styles from './serie-banner.module.css';


export default function SerieBannerComponent({ data }: { data: { spa: string, content: string }[] }) {
  const [changing, setChanging] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const actual = React.useMemo(() => {
    return data[index]
  }, [data, index]);


  React.useEffect(() => {
    const interval = setInterval(() => {
      setChanging(true)

      setTimeout(() => { setChanging(false); setIndex((prev) => (prev + 1) % data.length); }, 800)
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return <section className={styles.mission} >
    <div className={styles.title}>
      <p className={styles.dynamic_content} style={{ opacity: changing ? 0 : 1 }}>{actual.content}</p>
      <p className={styles.static_content}>Trasciende lo ordinario.</p>
    </div>
    <p className={styles.spa} style={{ opacity: changing ? 0 : 1 }}>{actual.spa}</p>
  </section>
}