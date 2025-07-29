import classes from "./newslist.module.css"

export type INewsItem = {
    content: string
    icon: string,
    href: string,
}

interface INewsList {
    config: INewsItem[]
}

/**
 * @component NewsList
 * @description Отображает список новостей в виде маркированного списка: иконка, текст и ссылка.
 *
 * @param {INewsList} props
 * @param {INewsItem[]} props.config — Массив новостных элементов с полями:
 * - `content`: текст новости,
 * - `icon`: путь к иконке (например, SVG),
 * - `href`: ссылка, на которую ведёт новость.
 */
const NewsList = ({config}: INewsList) => {
    return <ul className={classes["news-list"]}>
        {config.map(item => (
            <li className={classes["news-list-item"]}><a href={item.href}><img src={item.icon} alt="icon" />{item.content}</a></li>
        ))}
    </ul>
}

export default NewsList;