import Button from './components/Button'

function App () {
  // se ejecuta al hacer click en cualquier boton
  const handleClick = () => {
    window.alert('Click en el botón')
  }
  return (
    <div>
      <Button type='primary' onClick={handleClick} />
      <Button type='secondary' onClick={handleClick} />
      <Button disabled onClick={handleClick} />
    </div>
  )
}

export default App
