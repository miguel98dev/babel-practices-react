import { useRef, useState } from 'react'

const Countdown = ({ onFinish }) => {
  const [count, setCount] = useState(10)
  const intervalRef = useRef(null)

  const startCountDown = () => {
    if (count > 0 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 0) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
            onFinish()
          }
          return prevCount - 1
        })
      }, 1000)
    }
  }

  const stopCountDown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setCount(10)
    }
  }

  return (
    <div>
      <p>Tiempo restante: {count} segundos</p>
      <button onClick={startCountDown}>Comenzar</button>
      <button onClick={stopCountDown}>Detener</button>
    </div>
  )
}

export default Countdown

/*
Vamos a crear un componente "Countdown" que acepte una función por props, que será la función que se va a ejecutar cuando finalice la cuenta atrás.
El componente mostrará:
1. El tiempo restante de la cuenta atrás
2. Un botón que permite arrancar la cuenta atrás cuando NO está en marcha
3. Un botón que permite parar y reiniciar la cuenta atrás cuando SÍ está en marcha
*/
