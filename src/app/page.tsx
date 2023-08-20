import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__mainTextArea}>
        <p className={styles.Home__mainText}>k2784 is</p>
        <div className={styles.Home__line} />
        {/* <label>
          <input type="text" />
        </label> */}
      </div>
    </div>
  )
}
