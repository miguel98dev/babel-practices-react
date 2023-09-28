import { useState } from 'react'

const EstadosVariableLocal = (props) => {
  const [state, setState] = useState('')

  // const notState = ''

  const handleClickEstado = () => {
    setState('soy un estado')
  }

  const handleClickNoEstado = () => {
    setState('no soy un estado')
  }
  return (
    <div>
      <h1>Diferencias entre variables locales y estados</h1>
      <button onClick={() => handleClickEstado()}>Cambiar estado</button>
      <button onClick={() => handleClickNoEstado()}>Cambiar no estado</button>

      <p>Estado: {state}</p>
      <p>Local: {state}</p>
    </div>
  )
}

export default EstadosVariableLocal
