const RenderizadoCondicional = ({ goodbye = false, disabled = false }) => {
//   if (disabled) {
//     return null
//   }
//   if (goodbye) {
//     return <div>RenderizadoCondicional</div>
//   }

  return (
    <div>
      <h1>{goodbye ? 'Adios' : 'Hola'}</h1>

      <>{disabled && <h2>Deshabilitado</h2>}</>
      <>{!disabled && <h2>Habilitado</h2>}</>
    </div>
  )
}

// funciones puras: siempre hacer copias de lo llegado x funciones

export default RenderizadoCondicional
