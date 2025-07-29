export type NewsItem = {
    name: string;
    price: string;
    change: string;
}

interface NewsTickerProps {
    data: NewsItem[];
}

/**
 * @component NewsTicker
 * @description Отображает горизонтальный тикер с котировками: названием, ценой и изменением.
 * Используется, например, для показа валют, акций или криптовалют.
 *
 * @param {NewsTickerProps} props
 * @param {NewsItem[]} props.data — Массив объектов с данными: название, цена и изменение.
 */
const NewsTicker = ({ data }: NewsTickerProps) => {
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
