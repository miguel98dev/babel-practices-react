// componente Button que recibe 3 props
// type: apariencia botón (primary por defecto)
// disabled: botón habilitado o no (false por defecto) = habilitado por defecto
// onClick: función que se ejecuta al hacer click al botón (no recibe parámetro)
const Button = ({ type = 'primary', disabled = false, onClick }) => {
  const buttonClass = `button ${type}`

  return (
    // button recibe en el className el type del buttonClass, disabled y el onClick
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {type === 'primary' ? 'Botón Primario' : 'Botón secundario'}
    </button>
  )
}

export default Button
