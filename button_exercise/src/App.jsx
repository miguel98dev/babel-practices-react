import Button from './components/Button'
import ChildrenContainer from './components/ChildrenContainer'
import EstadosVariableLocal from './components/EstadosVariableLocal'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import Switch from './components/Switch'

function App () {
  // se ejecuta al hacer click en cualquier boton
  const handleClick = () => {
    window.alert('Click en el botón')
  }
  return (
    <>
      <ChildrenContainer>
        <h1>Contenedor con hijos</h1>
        <div>
          <Button type='primary' onClick={handleClick}>Children</Button>
          <Button type='secondary' onClick={handleClick}>Button children</Button>
          <Button disabled onClick={handleClick}>Otro children</Button>
        </div>
      </ChildrenContainer>
      <RenderizadoCondicional goodbye />
      <RenderizadoCondicional disabled />
      <EstadosVariableLocal />
      <Switch />
    </>
  )
}

export default App
