import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../styling/Header.css";

function Header(){
    return (
        <>
        <Jumbotron fluid className="jumbotron">
            <h1>Employee Directory</h1>
        </Jumbotron>
        </>
    );
}

export default Header;