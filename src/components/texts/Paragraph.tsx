import React from "react";
import { TextParagraphProps } from "./types";
import { splitBasedOnAcronyms } from "../utilities/utils.string";
import { HoverBox } from "../hoverBox";
import acronyms from "../../constants/acronyms.json";

export default function TextParagraph ({ keyId, textArray, style }: TextParagraphProps) {
    let splitPara: string[] = [];

    if (textArray) {
        textArray.forEach((paragraph) => {
            const splitResult = splitBasedOnAcronyms(paragraph);
            splitPara = splitPara.concat(splitResult);
        });
    }

    const paragraphs = splitPara.map((text, index) => {
        const isAcronym = acronyms.coreRules.some(acronym => text.includes(acronym));

        const key = `${keyId}_${index}`;

        return isAcronym
            ? (
                <HoverBox key={`hoverBox_${key}`} keyId={key} acronym={text} hoverText={text} style={style} />
            )
            : (
                <p key={key} style={style}>
                    {text}
                </p>
            );
    });

    return <div>{paragraphs}</div>;
}
