import { useState } from 'react'

const EstadosVariableLocal = (props) => {
  const [state, setState] = useState('')
  const [count, setCount] = useState(0)

  // const notState = ''

  const handleClickEstado = () => {
    setState('soy un estado')
  }

  const handleClickNoEstado = () => {
    setState('no soy un estado')
  }

  const handleClickCount = (n) => {
    setCount(n => n + 1)
  }
  return (
    <div>
      <h1>Diferencias entre variables locales y estados</h1>
      <button onClick={() => handleClickEstado()}>Cambiar estado</button>
      <button onClick={() => handleClickNoEstado()}>Cambiar no estado</button>
      <button onClick={() => handleClickCount()}>Modificar contador</button>
      <p>Estado: {state}</p>
      <p>Local: {state}</p>
      <p>Contador:{count}</p>
    </div>
  )
}

export default EstadosVariableLocal
