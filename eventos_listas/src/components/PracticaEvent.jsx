import { useState } from 'react'

const PracticaEvent = () => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)

  const handleMouseEnter = () => {
    setIsMouseOver((prevState) => !prevState)
    console.log('over')
  }

  const handleMouseLeave = () => {
    setIsMouseOver((prevState) => !prevState)
    console.log('leave')
  }

  const handleFocus = () => {
    setHasFocus((prevState) => !prevState)
    console.log('focus')
  }

  const handleBlur = () => {
    setHasFocus((prevState) => !prevState)
    console.log('blur')
  }

  const buttonStyles = {
    backgroundColor: isMouseOver ? 'blue' : 'red',
    border: hasFocus ? '2px solid white' : '2px solid black',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  }

  return (
    <button style={buttonStyles} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleFocus} onBlur={handleBlur}>Custom Button</button>
  )
}

export default PracticaEvent

/* Crear un componente y capturar si tiene el ratón por encima y si tiene o no tiene el foco. Aplicaremos estilos en función de cada uno de los posibles estados del elemento.
Huelga decir que esto es realizable mediante CSS con los selectores :hover y :focus pero lo vamos a hacer de forma programática para tener el control total del comportamiento del componente. */

/*

function ContenedorEventos() {

  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  function handleHover(inside) {
    console.log('Hover', inside)
    setIsHover(inside)
  }

  function handleFocus(hasFocus) {
    console.log('Focus', hasFocus)
    setIsFocus(hasFocus)
  }

  function getClassName() {
    const classList = []
    classList.push(isHover ? 'hover' : 'no-hover')
    classList.push(isFocus ? 'focus' : 'no-focus')
    return classList.join(' ')
  }

  return (
    <div
      autoFocus
      tabIndex={0}
      className={getClassName()}
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <p>Lorem ipsum dolor setTimeout</p>
      <p>Lorem ipsum dolor setTimeout</p>
      <p>Lorem ipsum dolor setTimeout</p>
    </div>
  )

}

*/
