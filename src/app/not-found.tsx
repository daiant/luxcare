import styles from '@/styles/not-found.module.css';
import Border from '@/public/images/404/border.png';
import Logo from '@/public/images/404/404.png';
import Caret from '@/public/images/icons/CaretRight.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={Border.src} alt="" className={styles.border} />
        <Image src='/images/404/disk.svg' alt="" className={[styles.border, styles.disk].join(' ')} />
        <Image src={Logo.src} alt="" className={styles.logo + ' not-found-rotate'} />
      </div>
      <a href={'/'}>
        <span>Volver al inicio
        </span>
        <Caret className={styles.caret} />
      </a>
    </div>
  )
}