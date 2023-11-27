import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropDownProps } from "./types";
import { Button } from "../button";

export default function Dropdown ({ initMenuText, textsNavDisplay }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const navigate = useNavigate();

    const goTo = (page: string) => {
        navigate(`/${page}`);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const popButtons = () => {
        return Array.from(textsNavDisplay.entries()).map(([key, value]) => (
            <Button key={key} onClick={() => {
                handleOptionClick(key);
                goTo(value);
            }}>
                {key}
            </Button>
        ));
    };

    return (
        <div className="dropdown">
            <Button onClick={handleToggle} className="dropbtn">
                {selectedOption || initMenuText}
            </Button>
            {isOpen && (
                <div className="dropdown-content">
                    {popButtons()}
                </div>
            )}
        </div>
    );
}
