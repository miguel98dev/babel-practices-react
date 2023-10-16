import { createContext } from 'react'
import useToggle from '../useToogle'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
})

export { ThemeContext }

function ThemeContextProvider ({ children }) {
  const [state, toggle] = useToggle(true)

  const contextValue = {
    theme: state ? 'dark' : 'light',
    toggleTheme: toggle
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider }

/*
Insertar esto en el main
<React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,

*/
