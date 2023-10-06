import useToogle from './hooks/useToogle'
import { ThemeContext } from './hooks/context/ThemeContext'
import { useState } from 'react'

function App () {
  const [state, toogle] = useToogle()
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext>
        <button onClick={() => toogle()}>{state ? 'Apagar' : 'Encender'} </button>
      </ThemeContext>
    </>
  )
}

export default App
