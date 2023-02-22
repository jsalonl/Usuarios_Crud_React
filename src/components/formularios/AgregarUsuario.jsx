import { useState } from 'react'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';

const AgregarUsuario = ({ agregarUsuario }) => {

    const [ usuario, setUsuario ] = useState({
        nombres: '',
        apellidos: '',
        salario: 0,
        estado: 'activo',
        administrador: false
    })

    //Envio formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        const { nombres, apellidos, salario, estado } = usuario

        if(nombres.trim() === '' || apellidos.trim() === '' || salario < 1 || estado.trim() === '' ){
            return Swal.fire({
                title: 'Error!',
                text: 'campos no pueden estar vacíos',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }

        agregarUsuario({
            id: Date.now(),
            ...usuario
        })

        Swal.fire({
            title: 'Usuario creado!',
            text: 'Usuario creado correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        })

        setUsuario({
            nombres: '',
            apellidos: '',
            salario: 0,
            estado: 'activo',
            administrador: false
        })
        //console.log(JSON.stringify(usuario))
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setUsuario({
            ...usuario, 
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombres">Escriba sus nombres</label>
                    <input
                        type="text"
                        name="nombres"
                        id="nombres"
                        className="form-control mb-3"
                        placeholder="Nombres"
                        onChange={handleChange}
                        value={usuario.nombres}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Escriba sus apellidos</label>
                    <input
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        className="form-control mb-3"
                        placeholder="Apellidos"
                        onChange={handleChange}
                        value={usuario.apellidos}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salario">Escriba sus ingresos</label>
                    <input
                        type="tel"
                        name="salario"
                        value={usuario.salario}
                        id="salario"
                        className="form-control mb-3"
                        placeholder="1000000"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Estado">Estado del usuario</label>
                    <select 
                        name="estado" 
                        id="estado" 
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
                        id="administrador" 
                        name="administrador"
                        onChange={handleChange}
                        checked={usuario.administrador}
                        />
                    <label className="form-check-label" htmlFor="administrador">Administrador</label>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="success" type='submit'>Agregar</Button>
                </div>
            </form>
        </>
    )
}

export default AgregarUsuario