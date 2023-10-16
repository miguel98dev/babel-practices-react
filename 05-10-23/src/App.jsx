import useToogle from './hooks/useToogle'
import { ThemeContext } from './hooks/context/ThemeContext'
import { useState } from 'react'
import ListaSimple from './components/ListaSimple'

function App () {
  const [state, toogle] = useToogle()
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext>
        <button onClick={() => toogle()}>{state ? 'Apagar' : 'Encender'} </button>
      </ThemeContext>
      {/* <ListaSimple /> */}
    </>
  )
}

export default App
