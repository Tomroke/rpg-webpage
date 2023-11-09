import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
  from "react-router-dom";
import { Main, Lore, CoreRules, TBC, PersonalityPerks, WoundPerks, KnowHows, Techniques, Conditions, CharacterCreation } from "./pages";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/lore" element={<Lore />}/>
            <Route path="/coreRules" element={<CoreRules />}/>
            <Route path="/TBC" element={<TBC />}/>
            <Route path="/personalityPerks" element={<PersonalityPerks />}/>
            <Route path="/woundPerks" element={<WoundPerks/>}/>
            <Route path="/knowHows" element={<KnowHows/>}/>
            <Route path="/techniques" element={<Techniques/>}/>
            <Route path="/conditions" element={<Conditions/>}/>
            <Route path="/characterCreation" element={<CharacterCreation/>}/>
        </Routes>
      </Router>
  );
}

export default App;
