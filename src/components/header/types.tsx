export interface HeaderProps {
    title: string;
    subtitle?: string;
    img?: string;
    styles?: React.CSSProperties;
    elements: React.ReactElement[];
    children?: React.ReactNode;
}
