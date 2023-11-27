import React from "react";
import { Header } from "../components/header";
import Dropdown from "../components/dropDownMenu/DropDownMenu";
import nav from "../constants/nav.json";

const headerImg = "/src/assets/test.png";

const headerStyle: React.CSSProperties = { backgroundColor: "#ec82ef", color: "white", padding: "10px" };

function Main () {
    const rulesMap = new Map(Object.entries(nav.rules));

    return (
        <div className="App">
            <Header
                title="Main"
                subtitle="Main components"
                img={headerImg}
                styles={headerStyle}
                elements={[<Dropdown key={"rulesButtons"} initMenuText={"Rules"} textsNavDisplay={ rulesMap } />]}>
            </Header>
        </div>
    );
}

export default Main;
