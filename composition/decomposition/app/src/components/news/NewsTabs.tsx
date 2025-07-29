import React from "react";
import DateTimeDisplay from "../DateTimeDisplay.tsx";

interface INewsTabs {
    tabs: string[];
    onChange: (tab: string) => void;
}

/**
 * @component NewsTabs
 * @description Компонент с вкладками для переключения категорий новостей (например: "Сейчас в СМИ", "Популярное").
 * Отображает список кнопок с названиями вкладок и текущую дату/время через `DateTimeDisplay`.
 *
 * @param {INewsTabs} props
 * @param {string[]} props.tabs — Список названий вкладок.
 * @param {(tab: string) => void} props.onChange — Колбэк, вызываемый при выборе вкладки.
 */
const NewsTabs: React.FC<INewsTabs> = ({ tabs, onChange }) => {
    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                >
                    {tab}
                </button>
            ))}
            {" "}
            <DateTimeDisplay />
        </div>
    );
};

export default NewsTabs;
