import { useNavigate } from 'react-router-dom';

const main: string = 'main'
const lore: string = 'lore';
const coreRules: string = 'coreRules';
const TBC: string = 'TBC';
const personalityPerks: string = 'personalityPerks';
const woundPerks: string = 'woundPerks';
const knowHows: string = 'knowHows';
const techniques: string = 'techniques';
const conditions: string = 'conditions';
const characterCreation: string = 'characterCreation';

function Main() {
    const navigate = useNavigate();

    const goTo = (page: string) => {
        navigate(`/${page}`);
    }

    return (
        <div className="App">
        <header className="App-header">
            <p>Main components</p>
            <button onClick={() => goTo(lore)}>go to Lore </button>
            <button onClick={() => goTo(coreRules)}>go to Core Rules </button>
            <button onClick={() => goTo(TBC)}>go to Turn Based Conflict </button>
            <button onClick={() => goTo(personalityPerks)}>go to Personality Perks</button>
            <button onClick={() => goTo(woundPerks)}>go to Wound Perks</button>
            <button onClick={() => goTo(knowHows)}>go to KnowHows</button>
            <button onClick={() => goTo(techniques)}>go to Techniques</button>
            <button onClick={() => goTo(conditions)}>go to Conditions</button>
            <button onClick={() => goTo(characterCreation)}>go to Character Creation</button>
        </header>
    </div>
);
}

export default Main;
