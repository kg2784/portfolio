'use client'
import Link from "next/link"
import styles from './style.module.scss'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

const PAGE_NAMES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
}

type NavigationProps = {
  className?: string
}

const Navigation = ({className}: NavigationProps) => {
  const pathname = usePathname()

  return (
    <nav className={classNames(styles.Navigation, className)}>
      <ul className={styles.Navigation__list}>
        {Object.entries(PAGE_NAMES).map((pageName) => (
          <li key={pageName[0]} className={classNames(styles.Navigation__item, pathname === pageName[1] ? styles['Navigation__item--active'] : undefined)}>
            <Link href={pageName[1]}>{pageName[0]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navigation }