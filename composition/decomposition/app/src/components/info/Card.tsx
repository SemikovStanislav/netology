import Title, {type ITitle} from "./Title.tsx";
import Line, {type ILine} from "./Line.tsx";
import styles from "./Card.module.css"
import type {ReactNode} from "react";


interface ICard {
    titleConfig: ITitle
    lines?: ILine[]
    children?: ReactNode;
}

/**
 * @component Card
 * @description Универсальный контейнерный блок с заголовком и опциональным списком элементов (строк).
 * Может также отображать произвольное содержимое через `children`, например: погоду, баннер, виджет и т.д.
 *
 * @param {ITitle} titleConfig — Конфигурация заголовка (текст, ссылка, иконка).
 * @param {ILine[]} [lines] — Опциональный список строк, отображаемых как <Line /> внутри списка.
 * @param {ReactNode} [children] — Дополнительное содержимое, рендерится после списка (если он есть).
 */
const Card: React.FC<ICard> = ({titleConfig, lines, children}) => {

    return <>
        <Title {...titleConfig} />
        <ul className={styles.list}>
            {(lines ?? []).map((line) =><li><Line {...line} /></li>)}
        </ul>
        {children}
    </>
}

export default Card;
