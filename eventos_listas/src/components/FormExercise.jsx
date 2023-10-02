import { useState } from 'react'

const FormExercise = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    // desestructuramos
    const { target } = e
    // obtenemos dos propiedades (atributo y value del input)
    const { name, value } = target
    console.log({ name, value })

    const newValues = {
      // copiamos las propiedades de values
      ...values,
      // actualiza solo el valor del input que ejecutó el evento
      [name]: value
    }
    setValues(newValues)
  }

  return (
    <div className='border-2 rounded border-purple-400'>
      <form onSubmit={handleSubmit} className='grid p-4'>
        <label>Username</label>
        <input type='text' name='username' onChange={handleChange} required />
        <label>Email</label>
        <input type='email' name='email' onChange={handleChange} required />
        <label>Password</label>
        <input type='password' name='password' onChange={handleChange} required />
        <label>Confirm password</label>
        <input type='password' name='confirmPassword' onChange={handleChange} required />
        <input className='bg-purple-400 font-bold mt-2 py-2 px-4 rounded' type='submit' value='Enviar' />
      </form>
    </div>
  )
}

export default FormExercise

/*
https://www.escuelafrontend.com/formularios-en-react
[x] definir el formulario de registro
[] impedir el registro de los campos si alguno esta vacío
[] agregar validaciones a cada una de las entradas
[] mostrar feedback al usuario de las validaciones realizadas
*/
