import React from "react";
import { Link } from "react-router-dom";

function CharacterCreation () {
    return (
        <div className="App">
            <header className="App-header">
                <p>Character Creation</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default CharacterCreation;
