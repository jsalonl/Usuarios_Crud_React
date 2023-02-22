import { useEffect, useState } from 'react'
import AgregarUsuario from './components/formularios/AgregarUsuario'
import ListaUsuarios from './components/usuario/ListaUsuarios'
//Uso local storage
const usuariosIniciales = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : [ ]

function App() {
  const [ usuarios, setUsuarios ] = useState(usuariosIniciales)

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }, [usuarios])

  const agregarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario])
  }

  const eliminarUsuario = (id) => {
    const usuariosFiltrados = usuarios.filter( usuario => usuario.id !== id)
    setUsuarios(usuariosFiltrados)
  }

  const editarUsuario = (id, usuarioEditado) => {
    const usuariosEditados = usuarios.map( usuario => usuario.id === id ? usuarioEditado : usuario )
    setUsuarios(usuariosEditados)
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center">Primera app con react</h1>
        <AgregarUsuario agregarUsuario={agregarUsuario} />
        <ListaUsuarios usuarios={usuarios} eliminarUsuario={eliminarUsuario} editarUsuario={editarUsuario} />
      </div>
    </>
  )
}

export default App