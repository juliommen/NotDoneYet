import styles from './Nav.module.css'
import title from '../assets/title.svg'
import logo from '../assets/logo.png'

export function Nav() {
  return (
    <header className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="" />
      <img className={styles.title} src={title} alt="ToDo List Logo"/>
    </header>
  )
}