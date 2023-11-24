export interface HeaderProps {
    title: string;
    subtitle: string;
    img?: string;
    styles?: React.CSSProperties;
    elements: JSX.Element[];
    children?: React.ReactNode;
}
