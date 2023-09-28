const Render = ({ data }) => {
  const handleClick = (item) => {
    window.alert(`Datos del elementos seleccionado: \nNombre: ${item.name}\nColor: ${item.color}`)
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <span style={{ color: item.color, fontWeight: item.checked ? 'bold' : 'normal' }}>
              {item.name}
            </span>
            <button onClick={(e) => handleClick(item)}>Mostrar Alerta</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

// no coger index para el key

export default Render
