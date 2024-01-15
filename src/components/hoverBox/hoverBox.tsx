import React, { useState } from "react";
import { hoverBoxProps } from "./types";
import acronyms from "../../locales/acronymData.json";

export default function HoverBox ({ keyId, acronym, hoverText }: hoverBoxProps) {
    const [isHovering, setIsHovering] = useState(false);
    const acronymsObject = new Map(Object.entries(acronyms));
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const acronymData = acronymsObject.get(acronym);

    const hoverBoxContent: React.ReactElement = <section key={`section_${keyId}`}>
        <h1 key={`hoverBox_${keyId}_title`}>{acronymData?.title}</h1>
        <p key={`hoverBox_${keyId}_para`}>{acronymData?.paragraph}</p>
    </section>;

    return (
        <div
            style={style.parentStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <p key={`acronym_${keyId}_para`}>
                {hoverText}
            </p>
            {isHovering
                ? <div key={`hoverBoxDiv_${keyId}`} style={style.hoverBoxStyle} >
                    {hoverBoxContent}
                </div>
                : null}
        </div>
    );
}

const style = {
    parentStyle: {
        position: "relative" as const,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid red"
    },
    hoverBoxStyle: {
        position: "absolute" as const,
        top: 0,
        zIndex: 1,
        border: "2px solid red"
    }
};
