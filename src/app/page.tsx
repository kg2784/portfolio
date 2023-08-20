import styles from './page.module.scss'

// TODO: ペンで絵をかけるように
// TODO: ペンの色や選択した色を背景に適用する
// TODO: そのためのカラーパレット
export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__mainTextArea}>
        <h1 className={styles.Home__mainText}>k2784 is</h1>
        <div className={styles.Home__line} />
        {/* TODO: 入力したものを下線の下に表示出来るようにする */}
        {/* <label>
          <input type="text" />
        </label> */}
      </div>
    </div>
  )
}
