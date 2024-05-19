import styles from '@/styles/not-found.module.css';
import Border from '@/public/images/404/border.png';
import Logo from '@/public/images/404/404.png';
import Link from 'next/link';
import Caret from '@/public/images/icons/CaretRight.svg';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <img src={Border.src} alt="" className={styles.border} />
        <img src='/images/404/disk.svg' alt="" className={[styles.border, styles.disk].join(' ')} />
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