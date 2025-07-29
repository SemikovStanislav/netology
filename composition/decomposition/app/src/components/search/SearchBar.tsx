import React, { useState } from "react";
import styles from "./SearchBar.module.css";

/**
 * @component SearchBar
 * @description Поле ввода с кнопкой "Найти".
 */
const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        console.log("Поиск:", query); // Пока пустышка
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Введите запрос"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.input}
            />
            <button className={styles.button} onClick={handleSearch}>
                Найти
            </button>
        </div>
    );
};

export default SearchBar;
