import React from "react";
import { ButtonProps } from "./types";

export default function Button ({
    type = "button",
    disabled = false,
    className,
    children,
    ...rest
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={className}
            {...rest}
        >
            {children}
        </button>
    );
}
