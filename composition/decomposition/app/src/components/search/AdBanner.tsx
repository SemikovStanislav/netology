import React from "react";
import styles from "./AdBanner.module.css";

interface IAdBanner {
    image: string;
    href: string;
}

/**
 * @component AdBanner
 * @description Кликабельный рекламный баннер с изображением. Ведёт по переданной ссылке.
 *
 * @param {string} image — Путь к изображению баннера.
 * @param {string} href — URL, на который ведёт клик по баннеру.
 */
const AdBanner: React.FC<IAdBanner> = ({ image, href }) => {
    return (
        <a href={href} className={styles.banner}>
            <img src={image} alt="ad-banner" className={styles.image} />
        </a>
    );
};

export default AdBanner;
