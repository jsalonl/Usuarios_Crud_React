import Usuario from "./Usuario"

const ListaUsuarios = ({ usuarios, eliminarUsuario, editarUsuario }) => {

    return (
        <>
        <h1 className="mt-3 text-center">Lista de usuarios</h1>
        {
          usuarios.map( (usuario) => {
            return <Usuario key={usuario.id} usuario={usuario} eliminarUsuario={eliminarUsuario} editarUsuario={editarUsuario} />
          })
        }
        {
          usuarios.length === 0 && <h2 className="text-center">No hay usuarios creados</h2>
        }
        </>
    )
}

export default ListaUsuarios