import React, { useState } from "react";
import NewsList, {type INewsItem} from "./NewsList.tsx";
import NewsTabs from "./NewsTabs.tsx";
import NewsTicker, {type NewsItem} from "./NewsTicker.tsx";

interface INewsPanel {
    tabsConfig: {
        [key: string]: INewsItem[]
    }
    tickerConfig: NewsItem[]
}

/**
 * @component NewsPanel
 * @description Компонент, объединяющий вкладки, список новостей и новостной тикер.
 * Отображает:
 * - вкладки для переключения категорий новостей (`NewsTabs`),
 * - список новостей для выбранной вкладки (`NewsList`),
 * - горизонтальный тикер с котировками (`NewsTicker`).
 *
 * @param {INewsPanel} props
 * @param {{ [key: string]: INewsItem[] }} props.tabsConfig — Объект с конфигурацией новостей по вкладкам.
 * Ключ — название вкладки, значение — список новостей.
 * @param {NewsItem[]} props.tickerConfig — Массив данных для тикера (название, цена, изменение).
 */
const NewsPanel: React.FC<INewsPanel> = ({tabsConfig, tickerConfig}) => {
    const [activeTab, setActiveTab] = useState(Object.keys(tabsConfig)[0]);

    return (
        <div>
            <NewsTabs tabs={Object.keys(tabsConfig)} onChange={setActiveTab} />

            <NewsList config={tabsConfig[activeTab]}/>

            <NewsTicker data={tickerConfig}/>
        </div>
    );
}

export default NewsPanel;
