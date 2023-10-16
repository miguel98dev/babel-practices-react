import { useState, useEffect } from 'react'

// hook sessionStorage, recibe la key y el valor inicial
const useSessionStorage = (key, initialValue) => {
  // obtiene la key al cargar el componente
  const storedValue = sessionStorage.getItem(key)

  // inicia el estado con el valor almacenado o el valor inicial
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue)

  // actualiza el valor cuando cambia el estado
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

const UseEffect = () => {
  // uso del custom hook para obtener y sincronizar el valor del sessionStorage
  const [count, setCount] = useSessionStorage('count', 0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  )
}

export default UseEffect

/*
Vamos a crear un custom hook que nos permita almacenar datos en el localStorage o sessionStorage, depende de vosotros. Nos permitirá modificar el estado y estos cambios estarán sincronizados con el almacenamiento que
*/
