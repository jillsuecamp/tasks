import React from "react";
import "./App.css";
import peanut from "./peanut.jpg";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1> UDCIS CISC275 </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. This is Jillian Camp.
            </p>
            <img
                src={peanut}
                alt="My cat peanut"
                width="500"
                height="600"
            ></img>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </ul>
        </div>
    );
}

export default App;
