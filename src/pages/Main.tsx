import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Header } from "../components/header";

const headerImg = "/src/assets/test.png";

const buttonsTexts: string[] =
    [
        "lore",
        "coreRules",
        "TBC",
        "personalityPerks",
        "woundPerks",
        "knowHows",
        "techniques",
        "conditions",
        "characterCreation"
    ];

const headerStyle: React.CSSProperties = { backgroundColor: "#ec82ef", color: "white", padding: "10px" };

function Main () {
    const navigate = useNavigate();

    const goTo = (page: string) => {
        navigate(`/${page}`);
    };

    const popButtons = () => {
        return buttonsTexts.map((text: string, index: number) => {
            return <Button key={index} onClick={() => goTo(text)}>{text}</Button>;
        });
    };

    return (
        <div className="App">
            <Header
                title="Main"
                subtitle="Main components"
                img={headerImg}
                styles={headerStyle}
                elements={popButtons()}>
            </Header>
        </div>
    );
}

export default Main;
