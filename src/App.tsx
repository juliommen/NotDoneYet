import styles from './App.module.css'
import { Nav } from './components/Nav'
import { Tasks } from './components/Tasks'


export function App() {
  return (
    <div className="App">
      <Nav />
      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </div>
  )
}
