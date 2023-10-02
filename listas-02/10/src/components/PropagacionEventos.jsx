const PropagacionEventos = () => {
  const handleButtonClick = (e) => {
    window.alert('ya no me propago')
    e.stopPropagation()
  }
  return (
    <div>PropagacionEventos</div>
  )
}

export default PropagacionEventos
