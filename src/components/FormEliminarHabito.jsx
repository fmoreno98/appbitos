import React, { useState, useContext } from 'react';
import LoginContext from './LoginContext';
import { useNavigate } from 'react-router-dom';
import { eliminarHabito } from './tools/api';

function FormEliminar(props) {
    const navigate = useNavigate();
    const idHabito = props.idHabito;
    const [show, setShow] = useState(false);
    const { user, token } = useContext(LoginContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event) {
        event.preventDefault();
        eliminarHabito(idHabito, token).then(data => {
            console.log(data);
            navigate("/home");
        });
        setShow(false);
    }

    return (
        <>
            {/* Botón personalizado */}
            <button className="btn-eliminar" onClick={handleShow}>
                <span className="text">Eliminar</span>
            </button>

            {show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Eliminar Hábito</h2>
                            <button className="close-button" onClick={handleClose}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <label>¿Seguro que quieres eliminar este hábito?</label>
                                <br /><br />
                                <div className="modal-buttons">
                                    <button className="accept-button" type="submit">
                                        Aceptar Eliminación
                                    </button>
                                    <button className="cancel-button" onClick={handleClose}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .btn-eliminar {
                    background-color: #f44336;
                    color: white;
                    border-radius: 0;
                    border: 0px;
                    width: 150px;
                    height: 45px;
                    margin-bottom: 10px;
                    font-size: 20px;
                    margin-bottom: 10px;
                }

                .btn-eliminar:hover {
                    background-color: #d32f2f;
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }

                .modal-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    width: 400px;
                    max-width: 90%;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: relative;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .close-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                }

                .modal-body {
                    margin-bottom: 20px;
                }

                .modal-buttons {
                    display: flex;
                    justify-content: space-between;
                }

                .accept-button,
                .cancel-button {
                    color: white;
                    border-radius: 0;
                    border: 0px;
                    width: 150px;
                    height: 45px;
                    margin-bottom: 10px;
                }

                .accept-button {
                    background-color: #2F49D4;
                    color: white;
                }

                .accept-button:hover {
                    background-color: #516BE7;
                }

                .cancel-button {
                    background-color:#938A7F;
                    color: white;
                }

                .cancel-button:hover {
                    background-color: #757575;
                }
            `}</style>
        </>
    );
}

export default FormEliminar;
