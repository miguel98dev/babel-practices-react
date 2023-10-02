import { useState } from 'react'

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='submit' value='Enviar' />
      </form>
      {isLoading && (
        <div>
          <p>Hola</p>
        </div>
      )}
    </div>
  )
}

export default Loader

/*
Diseñar un componente "Loader" que muestre una pantalla de carga por encima del contenido cuando nosotros queramos.
1. Revisión de requisitos: props, estados, etc.
2. Definición del componente: JSX y CSS (mínimo).
3. Implementación del componente.

Integrar el componente en un formulario. Mostrarlo cuando se lance el evento 'submit' y ocultarlo despues de 2 segundos
*/
