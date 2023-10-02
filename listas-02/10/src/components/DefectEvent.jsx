const DefectEvent = () => {
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }
  return (
    <form onSubmit={() => handleSubmit}>
      <input />
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default DefectEvent
