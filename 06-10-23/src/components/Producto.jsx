// import useProdCarr from '../hooks/useProdCarr'

const Producto = ({ productos, agregarAlCarrito }) => {
  const agregarProducto = (producto) => {
    if (producto.stock > 0) {
      agregarAlCarrito(producto.id)
      console.log(`Producto agregado al carrito: ${producto.nombre}`)
    }
  }

  return (
    <div className='container_productos'>
      {productos.map((producto) => (
        <div
          className='producto'
          key={producto.id}
        >
          <img
            className='img'
            src={producto.imagen}
            width='100%'
            alt={producto.nombre}
          />
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          {producto.stock > 0
            ? (
              <button onClick={() => agregarProducto(producto)}>
                Agregar al Carrito
              </button>
              )
            : (
              <button disabled>Sin stock</button>
              )}
        </div>
      ))}

    </div>
  )
}

export default Producto
/*

Se pide definir tres componentes:

[] 1. Carrito: almacenará en forma de lista simple los artículos seleccionados para comprar. Mostrará el nombre del artículo, su precio y la cantidad de elementos en el carrito. Se permite: quitar un elemento o eliminar (quitar todos los elementos de un tipo).
[x] 2. Producto: tarjeta que contiene una imagen, nombre, descripción, precio y unidades disponibles. Permite agregar al carrito un producto siempre y cuando haya stock, en caso contrario se mostrará "Sin stock" y se aplicarán cambios en la tarjeta.
[] 3. Lista de productos: lista que muestra los productos transformados en componentes. En la parte superior habrá un input que hará las veces de buscador y se mostrarán aquellos productos que contengan en el nombre lo escrito por el usuario. Además, habrá un checkbox que permita filtrar los productos que solo tengan stock si está activado. En caso de no haber coincidencias, aparecerá un mensaje donde deberían aparecer los productos indicándolo.

*/
