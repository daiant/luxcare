import styles from '@/styles/not-found.module.css';
import Border from '@/public/404/border.png';
import Logo from '@/public/404/404.png';
import Link from 'next/link';
import Caret from '@/public/icons/CaretRight.svg';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <img src={Border.src} alt="" className={styles.border} />
        <img src={Logo.src} alt="" className={styles.logo + ' not-found-rotate'} />
      </div>
      <Link href={'/'}>
        <span>Volver al inicio
        </span>
        <Caret className={styles.caret} />
      </Link>
    </div>
  )
}