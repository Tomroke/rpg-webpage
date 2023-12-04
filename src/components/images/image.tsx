import React from "react";
import { imgProps } from "./types";

export default function Image ({ path, alt, width, height }: imgProps): React.ReactElement {
    return (
        <div>
            <img src={path} alt={alt} width={width} height={height} />
        </div>
    );
}
