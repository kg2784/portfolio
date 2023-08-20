import styles from './page.module.scss'
import Image from 'next/image'
import { HistoryItem } from '~/components/HistoryItem'

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__baseInfo}>
        <Image width={400} height={400} src="/0nkon.png" alt="れんこん" />
        <section className={styles.About__section}>
          <h1 className={styles.About__name}>舟橋 紀絵</h1>
          <p className={styles.About__text}>1995年生まれ、フロントエンドエンジニア</p>
        </section>
        <section className={styles.About__section}>
          <h2 className={styles.About__header}>Skills</h2>
          <p className={styles.About__text}>HTML / CSS / SCSS</p>
          <p className={styles.About__text}>JavaScript / TypeScript</p>
          <p className={styles.About__text}>React / Next.js / Vue.js</p>
          <p className={styles.About__text}>Storybook / Webpack</p>
          <p className={styles.About__text}>Jest / React Testing Library</p>
          <p className={styles.About__text}>VSCode / GitHub</p>
          <p className={styles.About__text}>Figma / CLIP STUDIO PAINT / Lightroom</p>
        </section>
      </div>
      <div className={styles.About__history}>
        <ul className={styles.About__historyList}>
          <HistoryItem title="商品詳細フロント開発、共通UIライブラリ開発" skills={['HTML', 'SCSS', 'TypeScript', 'React', 'Next.js', 'Recoil']} start="2023" className={styles.About__historyItem} />
          <HistoryItem title="共通UIライブラリ開発、PayPay日用品ミニアプリ開発" skills={['HTML', 'SCSS', 'TypeScript', 'React', 'Next.js', 'Recoil']} start="2022" end="2023" className={styles.About__historyItem} />
          <HistoryItem title="Yahoo! ショッピングのカートフロント開発" skills={['HTML', 'SCSS', 'TypeScript', 'React', 'Next.js', 'GraphQL', 'Apollo Client']} start="2021" end="2022" className={styles.About__historyItem} />
          <HistoryItem title="PayPayモールのフロントエンド開発" skills={['HTML', 'SCSS', 'JavaScript', 'React', 'Vue.js']}  start="2020" end="2021" className={styles.About__historyItem} />
          <HistoryItem title="ヤフー株式会社 入社" text="主にマークアップ業務を担当" skills={['HTML', 'CSS', 'JavaScript', 'jQuery']} start="2019" className={styles.About__historyItem} />
          <HistoryItem title="名古屋大学大学院 情報学研究科 数理情報学専攻 入学" skills={['数理最適化', 'C++']} start="2017" end="2019" className={styles.About__historyItem} />
          <HistoryItem title="名古屋大学 情報文化学部 自然情報学科 入学" start="2013" end="2017" className={styles.About__historyItem} />
          <HistoryItem title="愛知県生まれ" start="1995" className={styles.About__historyItem} />
        </ul>
      </div>
    </div>
  )
}

export default About