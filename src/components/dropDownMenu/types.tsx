/*
textsNavDisplay is a Map<string, string> that contains the text to display in
the dropdown menu and the page to navigate to when the user clicks on the button.
*/
export interface DropDownProps {
    initMenuText: string;
    textsNavDisplay: Map<string, string>;
}
