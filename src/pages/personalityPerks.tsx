import React from 'react';
import { Link } from 'react-router-dom';

function PersonalityPerks() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Personality Perks</p>

                <Link to="/">go back</Link>
            </header>
        </div>
    );
}

export default PersonalityPerks;
