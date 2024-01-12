import React from "react";
import Dropdown from "../components/dropDownMenu/DropDownMenu";
import { Header } from "../components/header";
import { TextParagraph } from "../components/texts";
import nav from "../locales/nav.json";
import coreRulesJSON from "../locales/coreRules.json";

const headerImg = "/src/assets/test.png";

const headerStyle: React.CSSProperties = { backgroundColor: "#ec82ef", color: "white", padding: "10px" };

function CoreRules () {
    const rulesMap = new Map(Object.entries(nav.rules));
    const coreRules = new Map(Object.entries(coreRulesJSON));

    const populateParagraphs = () => {
        const iterableKeys = coreRules.keys();
        const mapKeys = Array.from(iterableKeys);

        let key: string | undefined;
        let id: string | undefined;
        let title: string | undefined;
        let paragraphs: string[] | undefined;

        return mapKeys.map((mapKey) => {
            const JSONParagraph = coreRules.get(mapKey);

            key = JSONParagraph?.key;
            id = JSONParagraph?.id;
            title = JSONParagraph?.title;
            paragraphs = JSONParagraph?.paragraphs;

            if (paragraphs === null || undefined) {
                console.error("Paragraphs are null or undefined");
                return null;
            }

            return <div key={key}>
                <h1>{title}</h1>
                <TextParagraph keyId={`${key}_${id}`} textArray={paragraphs} />
            </div>;
        });
    };

    return (
        <div className="App">
            <Header
                title="Core Rules"
                img={headerImg}
                styles={headerStyle}
                elements={[<Dropdown key={"rulesButtons"} initMenuText={"Rules"} textsNavDisplay={ rulesMap } />]}>
            </Header>
            {populateParagraphs()}
        </div>
    );
}

export default CoreRules;
