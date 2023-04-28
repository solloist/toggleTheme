import './App.scss'
import Header from 'layout/Header'
import Content from 'layout/Content'
import Footer from 'layout/Footer'
import ThemeContextProvider from 'context/ThemeContext'

import { theme } from 'theme'

function App() {
  
  
  
    
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

export default App
