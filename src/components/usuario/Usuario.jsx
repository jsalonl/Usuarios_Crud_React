import { useState } from 'react'
import EditarUsuarioModal from "../modales/EditarUsuarioModal"

const Usuario = ({ usuario, eliminarUsuario, editarUsuario }) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { id, nombres, apellidos, salario, estado, administrador } = usuario
    return (
        <>
            <div className="card mt-3">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <div>{nombres} {apellidos}</div>
                        {estado === 'inactivo'
                            ? <span className="badge text-bg-danger">Inactivo</span>
                            : <span className="badge text-bg-success">Activo</span>
                        }
                        {/* <span className="badge text-bg-danger">{estado === 'inactivo' ? 'inactivo' : null}</span>  */}
                    </div>
                </div>
                <div className="card-body">
                    <ul>
                        <li>Ingresos: {salario}</li>
                        <li>Rol: {administrador === true ? 'administrador' : 'usuario'}</li>
                    </ul>
                    <div className="d-flex justify-content-center gap-2">
                        <button onClick={handleShow} className="btn btn-warning">Editar</button>
                        <button onClick={() => eliminarUsuario(id)} className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
            <EditarUsuarioModal show={show} handleClose={handleClose} usuario={usuario} editarUsuario={editarUsuario} />
        </>
    )
}

export default Usuario