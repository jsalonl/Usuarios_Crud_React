import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function EditarUsuarioModal({ show, handleClose, usuario, editarUsuario }) {

    const { id, nombres, apellidos, salario, administrador } = usuario

    const [ usuarioEditado, setUsuarioEditado ] = useState({
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        salario: salario,
        administrador: administrador
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setUsuarioEditado({
            ...usuarioEditado,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editarUsuario(id, usuarioEditado)
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edición usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" defaultValue={id} />
                <div className="form-group">
                    <label htmlFor="nombres">Escriba sus nombres</label>
                    <input
                        type="text"
                        name="nombres"
                        className="form-control mb-3"
                        placeholder="Nombres"
                        onChange={handleChange}
                        defaultValue={nombres}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Escriba sus apellidos</label>
                    <input
                        type="text"
                        name="apellidos"
                        className="form-control mb-3"
                        placeholder="Apellidos"
                        onChange={handleChange}
                        defaultValue={apellidos}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salario">Escriba sus ingresos</label>
                    <input
                        type="tel"
                        name="salario"
                        defaultValue={salario}
                        className="form-control mb-3"
                        placeholder="1000000"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Estado">Estado del usuario</label>
                    <select 
                        name="estado"
                        className="form-select mb-3"
                        onChange={handleChange}
                    >
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        name="administrador"
                        id="administradorEditar"
                        onChange={handleChange}
                        defaultChecked={administrador}
                        />
                    <label className="form-check-label" htmlFor="administradorEditar">Administrador</label>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="success" type='submit'>Agregar</Button>
                </div>
                </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditarUsuarioModal