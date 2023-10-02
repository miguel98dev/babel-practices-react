import { useState } from 'react'

const FormularioSimple = () => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    const val = e.target.value
    const name = e.target.name
    console.log({ val, name })

    setInput(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={input} onChange={handleInput} />
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default FormularioSimple
