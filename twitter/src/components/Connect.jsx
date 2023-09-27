function Connect () {
  return (
    <div>
      <h1>Lo que está pasando ahora </h1>
      <h3>Unete hoy</h3>
      <div className='container-button'>
        <button className='google'>Registrarse con Google</button>
        <button className='apple'>Registrarse con Apple</button>
        <button className='create-account'>Crear cuenta</button>
      </div>
      <p>
        Al registrarte aceptas los Términos de servicio y la Política de
        privacidad
      </p>
      <div>
        <h2>¿Ya tienes una cuenta?</h2>
        <button className='sign'>Inicar sesion</button>
      </div>
    </div>
  )
}

export default Connect
