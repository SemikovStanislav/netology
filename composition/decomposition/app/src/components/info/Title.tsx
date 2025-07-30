import styles from "./Title.module.css";

export interface ITitle {
    title: string;
    href: string;
    icon?: string;
}

/**
 * @component Title
 * @description Заголовок карточки с опциональной иконкой, обёрнутый в ссылку.
 * Используется для обозначения блока, такого как "Телепрограмма", "Погода" и т.п.
 *
 * @param {string} title — Текст заголовка.
 * @param {string} href — Ссылка, по которой ведёт заголовок.
 * @param {string} [icon] — Путь к иконке, отображаемой рядом с заголовком.
 */
const Title: React.FC<ITitle> = ({ title, href, icon }) => {
    return (
        <a href={href} className={styles.title}>
            <h2>{title}</h2>
            {icon && <img src={icon} alt="icon" className={styles.icon} />}
        </a>
    );
};

export default Title;
