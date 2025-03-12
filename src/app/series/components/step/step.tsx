import styles from "@/styles/individual-serie.module.css";
import CaretRight from "@/public/images/icons/CaretRight.svg";

export type StepsProps = { steps: { title: string, content: string, link: string }[] };
export default function Steps({steps}: StepsProps) {
  return <section className={styles.steps}>
    <header>
      <div className={styles.call}>
        <span>En LuxCare hablamos</span>
        <span>de sensaciones.</span>
      </div>
    </header>
    {steps.map((step, index) => (<div className={styles.step} key={step.title}>
      <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
      <div className={styles.separator}></div>
      <div className={styles.content}>
        <p role='heading' aria-level={1}>{step.title}</p>
        <p role='subheading'>{step.content}</p>
        {Boolean(step.link) && <a href={step.link}>
            <span>Conocer más</span>
            <CaretRight/>
        </a>}
      </div>
    </div>))}

  </section>
}
