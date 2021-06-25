import React, { useState } from "react";
import BuildHouse from "../../assets/images/Create.gif"
import "./styles.css";

function instructions({ setStep }) {
    return (
        <div className="instruction__Container">
            <h1 className="instruction--Title">Instrucciones de uso</h1>
            <p className="instruction--Paragraph">Todos nos hemos imaginado viviendo en la casa de nuestros sueños, los muebles, el color de las paredes entre tantos otros detalles. Con esta sencilla aplicacion podras tener al alcance de tus manos una pequeña experiencia de lo que sería hacer realidad ese sueño.</p>
            <p className="instruction--Paragraph">Solo lo que necesitas es tener varias fotografias que sirvan de inspiración para "construir" ese hogar... ¡No te preocupes, nosotros la armaremos por ti!</p>
            <div className="instruction__Image--Container">
                <img className="instruction--Image" src={BuildHouse} /></div>
                <i onClick={_ => {setStep(1)}} className="fas fa-hand-point-right instruction--Icon"></i>
        </div>
    );
}

export default instructions;