import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Progress } from "reactstrap";
import HouseSketch from "../../assets/images/HouseSketch.jpg";
import "./styles.css";

function PhotoSelector({ setStep, handleSubmit }) {
    const [loaded, setLoaded] = useState(0);
    const [houseSection, setHouseSection] = useState("floor");
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState({
        front:"",
        right:"",
        back:"",
        left:"",
        top:"",
        bottom:"",})
    const selectedSection = (section) => {
        switch (section) {
            case "floor":
                setHouseSection("frontWall");
                break;
            case "frontWall":
                setHouseSection("rightWall");
                break;
            case "rightWall":
                setHouseSection("backWall");
                break;
            case "backWall":
                setHouseSection("leftWall");
                break;
            case "leftWall":
                setHouseSection("roof");
                break;
            case "roof":
                console.log("fin");
                break;
        }
    };

    return (
        <div className="selector__Container">
            <Form
                onSubmit={(e) => {
                    handleSubmit(e, setLoaded, setLoading, files);
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
                    <div className="proyect__Section__Container">
                        <img
                            className="proyect__Box--Background"
                            src={HouseSketch}
                            alt="Sketch of a House drawed bt VeenusLaey"
                        />
                        {houseSection === "floor" ? (
                            <label
                                className="proyect__Button--Build Floor"
                                for="bottom"
                            >
                                Seleccionar Piso
                                <input
                                    id="bottom"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                        const  newState = {...files}
                                        newState["bottom"] = e.target.files[0] 
                                        setFiles(newState)}
                                    }
                                />
                            </label>
                        ) : houseSection === "frontWall" ? (
                            <label
                                className="proyect__Button--Build frontWall"
                                for="front"
                            >
                                Pared frontal
                                <input
                                    id="front"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                            const  newState = {...files}
                                            newState["front"] = e.target.files[0] 
                                            setFiles(newState)}
                                    }
                                />
                            </label>
                        ) : houseSection === "rightWall" ? (
                            <label
                                className="proyect__Button--Build rightWall"
                                for="right"
                            >
                                Pared derecha
                                <input
                                    id="right"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                            const  newState = {...files}
                                            newState["right"] = e.target.files[0] 
                                            setFiles(newState)}
                                    }
                                />
                            </label>
                        ) : houseSection === "backWall" ? (
                            <label
                                className="proyect__Button--Build backWall"
                                for="back"
                            >
                                Pared trasera
                                <input
                                    id="back"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                            const  newState = {...files}
                                            newState["back"] = e.target.files[0] 
                                            setFiles(newState)}
                                    }
                                />
                            </label>
                        ) : houseSection === "leftWall" ? (
                            <label
                                className="proyect__Button--Build leftWall"
                                for="left"
                            >
                                Pared trasera
                                <input
                                    id="left"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                            const  newState = {...files}
                                            newState["left"] = e.target.files[0] 
                                            setFiles(newState)}
                                    }
                                />
                            </label>
                        ) : (
                            <label
                                className="proyect__Button--Build roof"
                                for="top"
                            >
                                Techo
                                <input
                                    id="top"
                                    type="file"
                                    value=""
                                    onChange={(e) =>
                                        {selectedSection(houseSection)
                                            const  newState = {...files}
                                            newState["top"] = e.target.files[0] 
                                            setFiles(newState)}
                                    }
                                />
                            </label>
                        )}

                        <Progress max="100" color="green" value={loaded}>
                            {Math.round(loaded, 2)}%
                        </Progress>
                    </div>
                </Form.Group>
                <button
                    onClick={(_) => {
                        setStep(2);
                    }}
                    className="proyect__Button--Gallery"
                >
                    Mis Proyectos
                </button>
                <button
                    className="proyect__Button--Gallery"
                >
                    IDK
                </button>
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
