import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__mainTextArea}>
        <h1 className={styles.Home__mainText}>k2784 is</h1>
        <div className={styles.Home__line} />
        {/* <label>
          <input type="text" />
        </label> */}
      </div>
    </div>
  )
}
