// import Form from './components/Form'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import { useState } from 'react'

function App () {
  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      precio: 10.99,
      stock: 5,
      imagen: 'https://picsum.photos/id/1/200/150'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      precio: 15.99,
      stock: 0,
      imagen: 'https://picsum.photos/id/9/200/150'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      precio: 20.99,
      stock: 2,
      imagen: 'https://picsum.photos/id/9/200/150'
    },
    {
      id: 4,
      nombre: 'Producto 4',
      descripcion: 'Descripción del Producto 4',
      precio: 11.99,
      stock: 0,
      imagen: 'https://picsum.photos/id/9/200/150'
    },
    {
      id: 5,
      nombre: 'Producto 5',
      descripcion: 'Descripción del Producto 5',
      precio: 12.99,
      stock: 4,
      imagen: 'https://picsum.photos/id/9/200/150'
    },
    {
      id: 6,
      nombre: 'Producto 6',
      descripcion: 'Descripción del Producto 6',
      precio: 11.99,
      stock: 0,
      imagen: 'https://picsum.photos/id/9/200/150'
    }
  ]
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (productoId) => {
    const productoExistente = carrito.find((item) => item.id === productoId)

    if (productoExistente) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
      setCarrito(nuevoCarrito)
    } else {
      const producto = productos.find((p) => p.id === productoId)
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== productoId)
    setCarrito(nuevoCarrito)
  }

  const quitarProducto = (productoId) => {
    const productoExistente = carrito.find((item) => item.id === productoId)

    if (productoExistente && productoExistente.cantidad > 1) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      setCarrito(nuevoCarrito)
    } else {
      eliminarProducto(productoId)
    }
  }

  return (
    <>
      <Producto productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} eliminarProducto={eliminarProducto} quitarProducto={quitarProducto} />
      {/* <Form /> */}
    </>
  )
}

export default App
