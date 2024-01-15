import acronyms from "../../constants/acronyms.json";

export const splitBasedOnAcronyms = (paraStr: string): string[] => {
    const regexPattern = new RegExp(`\\b(${acronyms.coreRules.join("|")})\\b`);

    const splitPara = paraStr.split(regexPattern);
    return splitPara;
};
