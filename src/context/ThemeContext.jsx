import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )


  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      htmlElement.style.backgroundColor = 'grey'
    } else {
      htmlElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      htmlElement.style.backgroundColor = 'beige'
    }

  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = {
    isDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider