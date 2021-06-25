import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Progress } from "reactstrap"
import "./styles.css";

function PhotoSelector({ setStep, handleSubmit }) {
    const [loaded, setLoaded] = useState(0)
    const [loading, setLoading] = useState(false)
    return (
        <div className="selector__Container">
            <Form onSubmit={(e)=>{handleSubmit(e, setLoaded, setLoading)}}
            >
                <Form.Group>
                    <h3 className="proyect--Title">Titulo del proyecto</h3>
                    <Form.Control
                        className="proyect__Box--Title"
                        type="text"
                        id="text"
                        placeholder="Enter name of the project"
                    />
                    <div className="forms__Container">
                        <Form.File id="front" label="Vista de Frente:" />
                        <Form.File id="back" label="Vista de Atrás:" />
                        <Form.File id="left" label="Vista Izquierda:" />
                        <Form.File id="right" label="Vista Derecha:" />
                        <Form.File id="top" label="Vista del Techo:" />
                        <Form.File id="bottom" label="Vista del Suelo:" />
                    </div>
                </Form.Group>
                <div className="form-group">
                    <Progress max="100" color="success" value={loaded}>{Math.round(loaded,2)}%</Progress>
                </div>
                <div className="project__Button--Container">
                    <button className="proyect__Button--Build">
                        Construir
                    </button>
                    <button onClick={(_) => {
                    setStep(2);
                }} className="proyect__Button--Gallery">
                        Mis Proyectos
                    </button>
                </div>
            </Form>
            <i
                onClick={(_) => {
                    setStep(0);
                }}
                className="fas fa-hand-point-left project--Icon"
            ></i>
        </div>
    );
}

export default PhotoSelector;
