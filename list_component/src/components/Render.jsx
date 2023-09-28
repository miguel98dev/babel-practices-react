const Render = ({ data }) => {
  const handleClick = (item) => {
    alert(`Datos del elementos seleccionado: \nNombre: ${item.name}\nColor: ${item.color}`)
  }
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <span style={{ color: item.color, fontWeight: item.checked ? 'bold' : 'normal' }}>
              {item.name}
            </span>
            <button onClick={() => handleClick(item)}>Mostrar Alerta</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Render
