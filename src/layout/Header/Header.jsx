import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import styles from './Header.module.scss'

function Header() {

  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  const isBackgroundLight = true;

  return (
    <div className={styles.Header}>
      <p>Header</p>
      <button onClick={() => toggleTheme()} style={{backgroundColor: isBackgroundLight ? 'lightColor' : 'darkColor'}}>Toggle Theme</button>
      <p>theme: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  )
}

export default Header