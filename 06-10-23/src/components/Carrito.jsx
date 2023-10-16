// import useProdCarr from '../hooks/useProdCarr'

const Carrito = ({ carrito, quitarProducto, eliminarProducto }) => {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul className='carrito'>
        {carrito.map((item) => (
          <li key={item.id}>
            <span>{item.nombre} - {item.precio} - Cantidad: {item.cantidad}</span>
            <button className='button-carrito' onClick={() => quitarProducto(item.id)}>Quitar uno</button>
            <button className='button-carrito' onClick={() => eliminarProducto(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carrito

/*

Se pide definir tres componentes:

[] 1. Carrito: almacenará en forma de lista simple los artículos seleccionados para comprar. Mostrará el nombre del artículo, su precio y la cantidad de elementos en el carrito. Se permite: quitar un elemento o eliminar (quitar todos los elementos de un tipo).
[x] 2. Producto: tarjeta que contiene una imagen, nombre, descripción, precio y unidades disponibles. Permite agregar al carrito un producto siempre y cuando haya stock, en caso contrario se mostrará "Sin stock" y se aplicarán cambios en la tarjeta.
[] 3. Lista de productos: lista que muestra los productos transformados en componentes. En la parte superior habrá un input que hará las veces de buscador y se mostrarán aquellos productos que contengan en el nombre lo escrito por el usuario. Además, habrá un checkbox que permita filtrar los productos que solo tengan stock si está activado. En caso de no haber coincidencias, aparecerá un mensaje donde deberían aparecer los productos indicándolo.

*/
