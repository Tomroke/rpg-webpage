import React from "react";
import { Link } from "react-router-dom";

function Techniques () {
    return (
        <div className="App">
            <header className="App-header">
                <p>Techniques</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default Techniques;
