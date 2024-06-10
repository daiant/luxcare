import styles from './fad.module.css';
export default function FadComponent() {
  return <div className={styles.main}>
    <div className={styles.content}>
      <p role="title">Somos la nueva visión. La nueva forma de entender los spas.</p>
      <ul>
        <li>
          <p role="title">Somos expertos</p>
          <p role="contentinfo">
            Proporcionamos un ambiente tranquilo a través de la programación de citas individuales en nuestra exposición. Nosotros nos encargaremos de todo.
          </p>
        </li>
        <li>
          <p role="title">Distribuye LuxCare</p>
          <p role="contentinfo">
            Nuestros distribuidores oficiales están dedicados a ofrecer una calidad de servicio y experiencia inigualables, comprometiéndose desde el primer momento a satisfacer todas tus necesidades.
          </p>
        </li>
        <li>
          <p role="title">Marca la diferencia</p>
          <p role="contentinfo">
            Comprendemos tus necesidades y deseos mejor que cualquiera.  Ofrecemos recomendaciones personalizadas que se adptan a todas tus preferencias.
          </p>
        </li>
      </ul>
    </div>
  </div >
}