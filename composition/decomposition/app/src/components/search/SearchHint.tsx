import React from "react";

interface ISearchHint {
    hintText: string;
    href: string;
}

/**
 * @component SearchHint
 * @description Отображает подсказку под строкой поиска: "Найдётся всё. Например, {текст-ссылкой}".
 *
 * @param {string} hintText — Текст, отображаемый как ссылка (например, "фаза луны сегодня").
 * @param {string} href — Ссылка, на которую ведёт hintText.
 */
const SearchHint: React.FC<ISearchHint> = ({ hintText, href }) => {
    return (
        <div>
            Найдётся всё. Например,{" "}
            <a href={href}>
                {hintText}
            </a>
        </div>
    );
};

export default SearchHint;
