import React, { useState } from "react";
import { hoverBoxProps } from "./types";

const HOVER_ELEMENT_ID = "hoverable";

export default function HoverBox ({ title, para, hoverText }: hoverBoxProps) {
    const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetId = event.currentTarget.id;
        setHoveredElementId(targetId === HOVER_ELEMENT_ID ? targetId : null);
    };

    const hoverBoxContent: React.ReactElement = <section><h1>{title}</h1><p>{para}</p></section>;

    return (
        <div style={style.parentStyle}>
            <div id={HOVER_ELEMENT_ID} onMouseOver={handleMouseOver} onMouseOut={() => setHoveredElementId(null)}>
                {hoverText}
            </div>
            {hoveredElementId !== null ? <div style={style.hoverBoxStyle} >{hoverBoxContent}</div> : null}
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
