function Funciones () {
  const principalAction = () => {
    console.log('Hola')
  }

  const secondaryAction = (e, param) => {
    console.log(e)
    console.log(param)
  }

  return (
    <>
      <button onClick={principalAction}>Principal</button>
      <button onClick={(e) => secondaryAction(e, 'Hola')}>Secondary</button>
    </>
  )
}

export default Funciones
