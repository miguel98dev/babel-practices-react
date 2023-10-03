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
    } else if (password.length <= 8) {
      lengthPoints = 2
    } else if (password.length <= 6) {
      lengthPoints = 0
    }

    const letterPoints = /[a-zA-Z]/.test(password) ? 1 : 0

    const mixedCasePoints =
      /[a-z]/.test(password) && /[A-Z]/.test(password) ? 2 : 0

    const numberPoints = /\d/.test(password) ? 1 : 0

    const symbolPoints = /[$&+,:;=?@#|'<>.^*()%!-]/.test(password) ? 2 : 0

    const maxPoints = Math.max(
      lengthPoints,
      letterPoints,
      mixedCasePoints,
      numberPoints,
      symbolPoints
    )

    const totalStrength =
      lengthPoints +
      letterPoints +
      mixedCasePoints +
      numberPoints +
      symbolPoints +
      maxPoints

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
        <button type='submit'>Submit</button>
      </form>
      {confirmWeakPassword && (
        <p>La contraseña es débil. ¿Desea confirmarla?</p>
      )}
      {accepted && <p>La contraseña ha sido aceptada.</p>}
    </div>
  )
}

export default Form
