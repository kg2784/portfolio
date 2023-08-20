import styles from './page.module.scss'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <a href="https://twitter.com/Dejin_rom" className={styles.Contact__link}><Image src="/twitter.svg" width="20" height="20" alt="Twitter" /><p className={styles.Contact__text}>@Dejin_rom</p></a>
    </div>
  )
}

export default Contact