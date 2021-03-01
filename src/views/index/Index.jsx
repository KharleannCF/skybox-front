import React, {useState, useEffect} from "react"
import {Form} from "react-bootstrap"
import {handleSubmit, getScenes} from "./logic/formLogic"
import {Link} from "react-router-dom"
function Index(){
    const [scenes, setScenes] = useState([])
    useEffect(async ()=>{
        getScenes(setScenes)
    },[])
    return(
        <div>
            <h1>Upload 6 images</h1>
            <Form onSubmit={(e)=>{handleSubmit(e)}}>
                <Form.Group>
                <Form.Control type="text" id="text" placeholder="Enter name of the project" />
                    <Form.File id="front" label="Frente" />
                    <Form.File id="right" label="Derecha" />
                    <Form.File id="back" label="atras" />
                    <Form.File id="left" label="izquierda" />
                    <Form.File id="top" label="arriba" />
                    <Form.File id="bottom" label="abajo" />
                </Form.Group>
                <button>Send</button>
            </Form>
            <div>
                <ul>
                    {scenes ? scenes.map(elem=>{
                        return (<li><Link to={`/scene/${elem}`}>{elem}</Link></li>)
                    }): null}
                </ul>
            </div>
        </div>
    )
}

export default Index