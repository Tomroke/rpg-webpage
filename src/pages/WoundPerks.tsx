import React from "react";
import { Link } from "react-router-dom";

function WoundPerks () {
    return (
        <div className="App">
            <header className="App-header">
                <p>Wound Perks</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default WoundPerks;
