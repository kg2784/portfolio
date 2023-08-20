import styles from './style.module.scss'
import classNames from 'classnames'

type HistoryItemProps = {
  title: string;
  text?: string;
  skills?: string[];
  start?: string;
  end?: string;
  className?: string;
}

const HistoryItem = ({title, text, skills, start, end, className}: HistoryItemProps) => {
  return (
    <li className={classNames(styles.HistoryItem, className)}>
      <p className={styles.HistoryItem__term}>
        {start ? (
          <span className={styles.HistoryItem__start}>{start}</span>
        ) : null}
        <span className={styles.HistoryItem__line} />
        {end ? (
          <span className={styles.HistoryItem__end}>{end}</span>
        ) : null}
      </p>
      <div>
        <p>{title}</p>
        {text ? <p className={styles.HistoryItem__text}>{text}</p> : null}
        {skills && skills.length > 0 ? <p className={styles.HistoryItem__text}>{skills.join(' / ')}</p> : null}
      </div>
    </li>
  )
}

export { HistoryItem }