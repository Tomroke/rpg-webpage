import React from "react";
import { TextParagraphProps } from "./types";

export default function TextParagraph ({ textArray, style }: TextParagraphProps) {
    const paragraphs = textArray
        ? textArray.map((text, index) => (
            <p key={index} style={style}>
                {text}
            </p>
        ))
        : null;

    return <div>{paragraphs}</div>;
}
