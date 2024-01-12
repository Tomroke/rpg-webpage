import React from "react";
import { Header } from "../components/header";
import Dropdown from "../components/dropDownMenu/DropDownMenu";
import nav from "../locales/nav.json";
import { Image } from "../components/images";
import imgTest from "../assets/download.png";
import headerImg from "../assets/header.png";

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
            <Image path={imgTest} alt={"Testing"}/>
        </div>
    );
}

export default Main;
