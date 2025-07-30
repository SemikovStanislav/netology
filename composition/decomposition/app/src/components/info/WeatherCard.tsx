import Card from "./Card.tsx";
import styles from "./WeatherCard.module.css";

interface IWeatherCard {
    title: string,
    href: string,
    icon: string,
    currentTemperature: string,
    line1: string,
    line2: string,
}

/**
 * @component WeatherCard
 * @description Карточка с погодой: иконка, текущая температура и краткий прогноз на утро и день.
 *
 * @param {string} title — Заголовок блока (например, "Погода").
 * @param {string} href — Ссылка, по которой ведёт заголовок.
 * @param {string} icon — Путь к иконке, отображающей погодные условия.
 * @param {string} currentTemperature — Текущая температура (например, "+17°").
 * @param {string} line1 — Первая строка прогноза (например, "Утром +17").
 * @param {string} line2 — Вторая строка прогноза (например, "днём +20").
 */

const WeatherCard: React.FC<IWeatherCard> = ({title, href, icon, currentTemperature, line1, line2}) => {
    return (
        <Card titleConfig={{ title: title, href: href }}>
            <div className={styles.weather}>
                <img src={icon} alt="icon" className={styles.icon} />
                <span className={styles.temp}>{currentTemperature}</span>
                <div className={styles.detail}>
                    {line1},<br />
                    {line2}
                </div>
            </div>
        </Card>
    );
};

export default WeatherCard;
