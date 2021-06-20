import React, { useState } from "react";
import "./styles.css";

function Navbar() {
    const [navbarState, setNavbarState] = useState("");
    const tags = [
        { name: "Home", icon: "home" },
        { name: "Contact", icon: "paper-plane" },
        { name: "Support", icon: "heartbeat" },
    ];

    return (
        <>
            <div className="navbar__Circle--Container">
                <div
                    className={
                        navbarState === "open"
                            ? "navbar__Circle opening__Menu"
                            : navbarState === "close"
                            ? "navbar__Circle closing__Menu"
                            : "navbar__Circle"
                    }
                >
                    <i
                        class="fas fa-times-circle navbar__Menu--Close"
                        onClick={(_) => setNavbarState("close")}
                    ></i>
                    <i
                        class="fas fa-bars navbar__Menu--Open"
                        onClick={(_) => setNavbarState("open")}
                    ></i>
                </div>
            </div>
            <div className="navbar__Background--Container">
                
            </div>
            <div className="background--SeparationBar"></div>
            <div
                className={
                    navbarState === "open"
                        ? "navbar__Triangle--Container opening__Menu--Tags"
                        : navbarState === "close"
                        ? "navbar__Triangle--Container closing__Menu--Tags"
                        : "navbar__Triangle--Container"
                }
            ></div>

            <div
                className={
                    navbarState === "open"
                        ? "navbar__Tags--Container tags__Open"
                        : "navbar__Tags--Container tags__Close"
                }
            >
                
                    {navbarState === "open" && tags.map((tag, index) => {

                        return (
                            <div className={`tag__Container throw__Position--${index + 1}`}>
                                <i class={`fas fa-${tag.icon} tag__Icon`} ></i>
                                <p className="tag--Name">{tag.name}</p></div>
                        );
                    })}
                
            </div>
        </>
    );
}

export default Navbar;
