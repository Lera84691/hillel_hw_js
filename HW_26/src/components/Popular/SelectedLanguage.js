import { memo } from "react";

export const SelectedLanguage = memo((props) => {
    const language = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (<ul className="languages">
        {language.map((lang, index) =>
        (<li
            onClick={props.disabled ? null : () => props.selectLanguageHandler(lang)}
            style={props.selectedLanguage === lang ? { color: "#d0021b" } : null}
            key={index}>
            {lang}
        </li>))}
    </ul>)
})