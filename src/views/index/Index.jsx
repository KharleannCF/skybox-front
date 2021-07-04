import React, { useState, useEffect } from "react";
import { handleSubmit, getScenes } from "./logic/formLogic";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Instructions from "../../components/instructions";
import PhotoSelector from "../../components/PhotoSelector"
import SceneGallery from "../../components/sceneGallery"

function Index() {
    const [scenes, setScenes] = useState([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        getScenes(setScenes);
    }, []);

    return (
        <>
            <Navbar />
            {step === 0 ? (
                <Instructions setStep={setStep} />
            ) : step === 1 ? (
                <PhotoSelector setStep={setStep} handleSubmit={handleSubmit} />
                ) : <SceneGallery scenes={scenes}/>
            }

            <Footer />
        </>
    );
}

export default Index;
/*
                    <>
                    <h1>Upload 6 images</h1>
                    <Form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <Form.Group>
                            <Form.Control
                                type="text"
                                id="text"
                                placeholder="Enter name of the project"
                            />
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
                            {scenes
                                ? scenes.map((elem) => {
                                      return (
                                          <li>
                                              <Link to={`/scene/${elem}`}>
                                                  {elem}
                                              </Link>
                                          </li>
                                      );
                                  })
                                : null}
                        </ul>
                    </div>
                                </> 
                            
return(
        <div>
            <h1>Upload 6 images</h1>
            <Form onSubmit={(e)=>{handleSubmit(e, setLoaded, setLoading)}}>
                <Form.Group>
                <Form.Control type="text" id="text" placeholder="Enter name of the project" />
                    <Form.File id="front" label="Frente" />
                    <Form.File id="right" label="Derecha" />
                    <Form.File id="back" label="atras" />
                    <Form.File id="left" label="izquierda" />
                    <Form.File id="top" label="arriba" />
                    <Form.File id="bottom" label="abajo" />
                </Form.Group>
                <div class="form-group">
                    <Progress max="100" color="success" value={loaded}>{Math.round(loaded,2)}%</Progress>
                </div>
                <button disabled={loading}>Send</button>
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
}*/