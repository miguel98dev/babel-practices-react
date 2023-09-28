import { useState } from 'react'
// Crear un componente "Switch" que tenga al menos un párrafo y un botón. Se pide que el párrafo muestre "Activado" o "Desactivado" en función del estado del interruptor y que cuando el usuario pulse en el botón, este cambie de uno a otro.

// **Extra: los estilos del interruptor cambiarán en función de su estado.

const Switch = () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state) // invierte el estado
  }

  return (
    <div className={`switch ${state ? 'on' : 'off'}`}></div>
      <p>{state ? 'Activado' : 'Desactivado'}</p>
      <button onClick={() => handleClick()}>ClickMe!</button>
    </div>
  )
}

export default Switch
