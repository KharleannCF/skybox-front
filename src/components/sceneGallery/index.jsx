import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function PhotoSelector({ scenes }) {
    return (
        <>
            <ul>
                {scenes
                    ? scenes.map((elem) => {
                          return (
                              <li>
                                  <Link to={`/scene/${elem}`}>{elem}</Link>
                              </li>
                          );
                      })
                    : null}
            </ul>
        </>
    );
}

export default PhotoSelector;
