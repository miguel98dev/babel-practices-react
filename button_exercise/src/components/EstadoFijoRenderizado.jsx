import { useState } from 'react'

const EstadoFijoRenderizado = () => {
  const [number, setNumber] = useState(0)

  const handleClick = () => {
    // setNumber(number + 1) // valor fijo
    setNumber(n => n + 1) // trabajando con funciones
    // setNumber(n => n + 1)
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => handleClick()}>+3</button>
    </>
  )
}

export default EstadoFijoRenderizado
