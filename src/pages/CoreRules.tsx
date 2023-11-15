import React from "react";
import { Link } from "react-router-dom";

function CoreRules () {
    return (
        <div className="App">
            <header className="App-header">
                <p>Core Rules</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default CoreRules;
