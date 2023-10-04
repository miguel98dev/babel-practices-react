import { useState } from 'react'

const FormExercise = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [validationErrors, setValidationErrors] = useState({
    ...values
  })

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const { username, email, password, confirmPassword } = values

  const handleSubmit = (e) => {
    window.alert('Login correcto')
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    const validateUsername = (username) => {
      const regex = /^[a-zA-Z0-9]{4,16}$/
      return regex.test(username)
        ? ''
        : '4 to 16 characters and contain only letters and numbers.'
    }

    const validateEmail = (email) => {
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      return regex.test(email) ? '' : 'Invalid email format'
    }

    const validatePassword = (password) => {
      return password.length >= 4 && password.length <= 8
        ? ''
        : 'Password must be 4 to 8 characters'
    }

    const validateConfirmPassword = (confirmPassword) => {
      return password === confirmPassword ? '' : 'Passwords do not match.'
    }

    const newValues = {
      ...values,
      [name]: value
    }
    setValues(newValues)

    setValidationErrors({
      ...validationErrors,
      [name]:
        name === 'username'
          ? validateUsername(value)
          : name === 'email'
            ? validateEmail(value)
            : name === 'password'
              ? validatePassword(value)
              : name === 'confirmPassword'
                ? validateConfirmPassword(value)
                : ''
    })
    console.log(validationErrors)
    const submitDisabled = Object.values(validationErrors).every((error) => !error)
    setIsSubmitDisabled(submitDisabled)
    console.log(submitDisabled)
  }

  return (
    <div className='border-2 rounded border-purple-400 w-96'>
      <form
        onSubmit={handleSubmit}
        className='grid p-4 gap-1'
      >
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={handleChange}
          value={username}
          autoComplete='off'
        />
        {validationErrors.username && <p className='text-red-500'>{validationErrors.username}</p>}
        <label>Email</label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          autoComplete='off'
        />
        {validationErrors.email && <p className='text-red-500'>{validationErrors.email}</p>}
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          autoComplete='off'
        />
        {validationErrors.password && <p className='text-red-500'>{validationErrors.password}</p>}
        <label>Confirm password</label>
        <input
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
          autoComplete='off'
        />
        {validationErrors.confirmPassword && (
          <p className='text-red-500'>{validationErrors.confirmPassword}</p>
        )}
        <input
          className='cursor-pointer bg-purple-400 font-bold mt-2 py-2 px-4 rounded'
          type='submit'
          disabled={!isSubmitDisabled}
        />
      </form>
    </div>
  )
}

export default FormExercise

/*
https://www.escuelafrontend.com/formularios-en-react
[x] definir el formulario de registro
[x] impedir el registro de los campos si alguno esta vacío
[x] agregar validaciones a cada una de las entradas
[x] mostrar feedback al usuario de las validaciones realizadas
*/
