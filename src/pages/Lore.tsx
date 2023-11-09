import React from 'react';
import { Link } from 'react-router-dom';

function Lore() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Lore</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default Lore;
