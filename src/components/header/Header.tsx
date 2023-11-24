import React from "react";
import { HeaderProps } from "./types";

export default function Header ({ title, subtitle, styles, elements }: HeaderProps) {
    return (
        <header style={styles}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={"/assets/test.png"} alt="Header image" width={300} height={200}/>
            <nav>
                <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                    {elements.map((element, index) => (
                        <li key={index}><a href="#">{element}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
