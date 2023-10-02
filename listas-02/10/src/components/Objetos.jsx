import { useState } from 'react'

const defaultUser = {
  username: '',
  email: '',
  role: 'GUEST'
}

const Objetos = () => {
  const [user, setUser] = useState(defaultUser)

  const handleLogin = () => {
    setUser(prevUser => {
      const newUser = { ...prevUser }
      newUser.username = 'Jhon Doe'
      newUser.email = 'jhondoe@gmail.com'
      newUser.role = 'ADMIN'

      return newUser
    })
  }

  const handleLogout = () => {
    setUser(defaultUser)
  }

  const changeRole = () => {
    setUser(prevUser => {
      return {
        ...prevUser,
        role: 'USER'
      }
    })
  }

  const handleDataChange = (prop, val) => {
    setUser(prevUser => {
      return {
        ...prevUser,
        [prop]: val
      }
    })
  }
  return (
    <div>
      <h4>{user.role}</h4>
      <p>{user.username} {user.email}</p>
      <button onClick={() => handleLogin}>Login</button>
      <button onClick={() => handleLogout}>Logout</button>
      <button onClick={() => changeRole}>Cambiar rol</button>
      <button onClick={() => handleDataChange('email', 'foobar@gmail.com')}>Cambiar username</button>
    </div>
  )
}

export default Objetos
