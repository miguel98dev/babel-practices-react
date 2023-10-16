// import { useState } from 'react'

// export const useProdCarr = (productos) => {
//   const [carrito, setCarrito] = useState([])

//   const agregarAlCarrito = (productoId) => {
//     const productoExistente = carrito.find((item) => item.id === productoId)

//     if (productoExistente) {
//       const nuevoCarrito = carrito.map((item) =>
//         item.id === productoId
//           ? { ...item, cantidad: item.cantidad + 1 }
//           : item
//       )
//       setCarrito(nuevoCarrito)
//     } else {
//       const producto = productos.find((p) => p.id === productoId)
//       setCarrito([...carrito, { ...producto, cantidad: 1 }])
//     }
//   }
//   // const agregarProducto = (producto) => {
//   //   if (producto.stock > 0) {
//   //     agregarAlCarrito(producto.id)
//   //     console.log(`Producto agregado al carrito: ${producto.nombre}`)
//   //   }
//   // }

//   const eliminarProducto = (productoId) => {
//     const nuevoCarrito = carrito.filter((item) => item.id !== productoId)
//     setCarrito(nuevoCarrito)
//   }

//   const quitarProducto = (productoId) => {
//     const productoExistente = carrito.find((item) => item.id === productoId)

//     if (productoExistente && productoExistente.cantidad > 1) {
//       const nuevoCarrito = carrito.map((item) =>
//         item.id === productoId
//           ? { ...item, cantidad: item.cantidad - 1 }
//           : item
//       )
//       setCarrito(nuevoCarrito)
//     } else {
//       eliminarProducto(productoId)
//     }
//   }

//   return { carrito, agregarAlCarrito, eliminarProducto, quitarProducto }
// }

// export default useProdCarr
