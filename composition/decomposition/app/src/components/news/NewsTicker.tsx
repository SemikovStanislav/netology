export type NewsItem = {
    name: string;
    price: string;
    change: string;
}

interface INewsTicker {
    data: NewsItem[];
}

/**
 * @component NewsTicker
 * @description Отображает горизонтальный тикер с котировками: названием, ценой и изменением.
 * Используется, например, для показа валют, акций или криптовалют.
 *
 * @param {INewsTicker} props
 * @param {NewsItem[]} props.data — Массив объектов с данными: название, цена и изменение.
 */
const NewsTicker = ({ data }: INewsTicker) => {
    return (
        <div>
            {data.map((item, idx) => (
                <span key={idx}>
                    <strong>{item.name}</strong>{" "}
                    {item.price}{" "}
                    <span>
                        {item.change}
                    </span>
                    {" "}
                </span>
            ))}
        </div>
    );
};

export default NewsTicker;
