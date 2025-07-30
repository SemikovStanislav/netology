import styles from "./Line.module.css"

export interface ILine {
    content: string
    href: string
    title?: string
    hint?: string
    icon?: string
    isTitleBold?: boolean
    separator?: boolean

}

/**
 * @component Line
 * @description Универсальный компонент для отображения строки информации со ссылкой.
 * Используется, например, в блоках "Посещаемое", "Телепрограмма", "Эфир" и др.
 *
 * @param {string} content — Основной текст строки (обязателен).
 * @param {string} href — Ссылка, по которой ведёт строка (обязательна).
 * @param {string} [title] — Дополнительный заголовок перед основным текстом.
 * @param {string} [hint] — Подсказка или источник, отображаемый в конце строки.
 * @param {string} [icon] — URL иконки, отображаемой перед заголовком.
 * @param {boolean} [isTitleBold=false] — Должен ли заголовок быть жирным.
 * @param {boolean} [separator=false] — Добавлять ли разделитель " - " между заголовком и основным текстом.
 */

const Line: React.FC<ILine> = ({content, title, hint, icon, href, isTitleBold, separator}) => {
    return <a href={href} className={styles.line}>
        {icon ? <img src={icon} alt="icon" className={styles.icon}/> : null}
        {" "}
        {title ? isTitleBold ? (<b>{title}</b>) : title : null}
        {separator ? " - " : " "}
        {content}
        {" "}
        {hint ? <span className={styles.hint}>{hint}</span> : null}
    </a>
}

export default Line;