import { useState } from 'react'

const Form = () => {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)
  const [confirmWeakPassword, setConfirmWeakPassword] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [umbral, setUmbral] = useState(8)

  const calculateStrength = () => {
    let lengthPoints = 0
    if (password.length >= 9 && password.length <= 12) {
      lengthPoints = 2
    } else if (password.length > 12) {
      lengthPoints = 3
    } else if (password.length === 7 || password.length === 8) {
      lengthPoints = 1
    } else {
      lengthPoints = 0
    }
    // letra
    const letterPoints = /[a-zA-Z]/.test(password) ? 1 : 0

    // letras mayuscula y minusculas
    const mixedCasePoints =
      /[a-z]/.test(password) && /[A-Z]/.test(password) ? 2 : 0

    // numeros
    const numberPoints = /\d/.test(password) ? 1 : 0

    // simbolos
    const symbolPoints = /[$&+,:;=?@#|'<>.^*()%!-]/.test(password) ? 2 : 0

    // maximos puntos
    // const maxPoints = Math.max(
    //   lengthPoints,
    //   letterPoints,
    //   mixedCasePoints,
    //   numberPoints,
    //   symbolPoints
    // )

    // total fortaleza puntos
    const totalStrength =
      lengthPoints +
      letterPoints +
      mixedCasePoints +
      numberPoints +
      symbolPoints

    setStrength(totalStrength)
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    calculateStrength()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (strength >= umbral || confirmWeakPassword) {
      setAccepted(true)
    } else {
      setAccepted(false)
      setConfirmWeakPassword(true)
    }
  }

  const confirm = () => {
    setAccepted(true)
  }
  return (
    <div>
      <h2>Password Strength Checker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <input
          disabled
          type='number'
          value={umbral}
          onChange={(e) => setUmbral(parseInt(e.target.value))}
        />
        <button type='submit'>Submit</button>
      </form>
      {confirmWeakPassword && (
        <div>
          <p>La contraseña es débil. ¿Desea confirmarla?</p>
          <button onClick={confirm}>Confirmar</button>
        </div>
      )}
      {accepted && <p>La contraseña ha sido aceptada.</p>}
    </div>
  )
}

export default Form
