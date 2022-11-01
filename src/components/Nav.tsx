import styles from './Nav.module.css'
import logo from '../assets/Logo.svg'

export function Nav() {
  return (
    <header className={styles.navBar}>
      <img src={logo} alt="ToDo List Logo"/>
    </header>
  )
}