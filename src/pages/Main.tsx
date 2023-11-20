import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

const lore: string = "lore";
const coreRules: string = "coreRules";
const TBC: string = "TBC";
const personalityPerks: string = "personalityPerks";
const woundPerks: string = "woundPerks";
const knowHows: string = "knowHows";
const techniques: string = "techniques";
const conditions: string = "conditions";
const characterCreation: string = "characterCreation";

function Main () {
    const navigate = useNavigate();

    const goTo = (page: string) => {
        navigate(`/${page}`);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Main components</p>
                <Button onClick={() => goTo(lore)}>go to Lore </Button>
                <Button onClick={() => goTo(coreRules)}>go to Core Rules </Button>
                <Button onClick={() => goTo(TBC)}>go to Turn Based Conflict </Button>
                <Button onClick={() => goTo(personalityPerks)}>go to Personality Perks</Button>
                <Button onClick={() => goTo(woundPerks)}>go to Wound Perks</Button>
                <Button onClick={() => goTo(knowHows)}>go to KnowHows</Button>
                <Button onClick={() => goTo(techniques)}>go to Techniques</Button>
                <Button onClick={() => goTo(conditions)}>go to Conditions</Button>
                <Button onClick={() => goTo(characterCreation)}>go to Character Creation</Button>
            </header>
        </div>
    );
}

export default Main;
