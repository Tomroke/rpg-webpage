import { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    children: ReactNode;
}
