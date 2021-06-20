import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./styles.css";

function instructions({ setStep, handleSubmit }) {
    return (
        <div className="instruction__Container">
            <Form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
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
                <div className="project__Button--Container">
                    <button className="proyect__Button--Build">
                        Construir
                    </button>
                    <button className="proyect__Button--Gallery">
                        Mis Proyectos
                    </button>
                </div>
            </Form>
            <i
                onClick={(_) => {
                    setStep(0);
                }}
                class="fas fa-hand-point-left project--Icon"
            ></i>
        </div>
    );
}

export default instructions;
