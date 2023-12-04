import React, { useState } from "react";

export default function HoverBox () {
    const [isHovered, setIsHovered] = useState(-1);

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const targetId = (event.currentTarget as HTMLDivElement).id;

        switch (targetId) {
        case "1":
            setIsHovered(1);
            break;
        case "2":
            setIsHovered(2);
            break;
        default:
            setIsHovered(-1);
        }
    };

    return (
        <div>
            <div id="1" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(-1)}>
                DIV 1
            </div>
            <div id="2" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(-1)}>
                DIV 2
            </div>
            {isHovered !== -1 && <h2>{isHovered === 1 ? "Div 1 is hovered" : "Div 2 is hovered"}</h2>}
        </div>
    );
}
