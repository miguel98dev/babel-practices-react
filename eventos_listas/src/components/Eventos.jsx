const Eventos = () => {
  const handleClickNoEvent = (event) => {
    console.log('handleClickNoEvent', event)
  }

  const handleClickEvent = (event) => {

  }
  return (
    <div>
      <button onClick={() => handleClickNoEvent()}>a</button>
      <button onClick={handleClickNoEvent}>a</button>
      <button onClick={(event) => handleClickEvent(event)}>b</button>
      <button onClick={handleClickEvent}>c</button>
    </div>
  )
}

export default Eventos
