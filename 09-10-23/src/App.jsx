import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import UseEffect from './components/useEffect'
// import About from './components/About'

function App () {
  return (
    <UseEffect />
    // <BrowserRouter>

  //   <Link to='/home'>Home</Link>
  //   <Routes>
  //     <Route path='/home' element={<Home />}>
  //       <Route path='/home/hola'>Hola</Route>
  //       <Route>Adios</Route>
  //       <Route>Hola</Route>
  //       <Route>Adios</Route>
  //     </Route>
  //     <Route>About</Route>
  //   </Routes>
  // </BrowserRouter>
  )
}

export default App

/*

Vamos a crear al menos dos páginas en nuestra web: Home y About.

Home: se renderizará en /home y tendrá cuatro rutas anidadas. El nombre lo dejo a vuestra elección. Renderizará una cabecera, una lista de enlaces para la navegación anidada en la que se verá resaltado el link cuya URL coincida con la URL del navegador. Cada enlace cambiará el contenido pero no la estructura.
About: se renderizará en /about y será un componente en el que aparecerá un texto descriptivo y algunas imágenes.

*/
