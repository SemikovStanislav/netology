import Card from "./Card.tsx";
import {
    broadcastCardConfig,
    germanyCardConfig,
    trendingCardConfig,
    tvCardConfig, weatherCardConfig,
} from "../../data/Info.ts";
import styles from "./InfoPanel.module.css";
import WeatherCard from "./WeatherCard.tsx";

/**
 * @component InfoPanel
 * @description Основной блок с информационными карточками.
 */

const InfoPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.column}>
                <WeatherCard {...weatherCardConfig} />
                <Card {...trendingCardConfig} />
            </div>
            <div className={styles.column}>
                <Card {...germanyCardConfig} />
                <Card {...tvCardConfig} />
            </div>
            <div className={styles.column}>
                <Card {...broadcastCardConfig} />
            </div>
        </div>
    );
};

export default InfoPanel;
