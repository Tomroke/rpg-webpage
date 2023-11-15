import React from "react";
import { Link } from "react-router-dom";

function TurnBasedConflict () {
    return (
        <div className="App">
            <header className="App-header">
                <p>Turn Based Conflict</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default TurnBasedConflict;
