import React from "react";
import styles from "./PromoCard.module.css";

interface PromoCardProps {
    image: string;
    title: string;
    subtitle: string;
    href: string;
}

/**
 * @component PromoCard
 * @description Промо-блок с изображением, заголовком (ссылкой) и подзаголовком.
 * Используется для показа рекламных или информационных карточек.
 *
 * @param {string} image — Путь к изображению.
 * @param {string} title — Заголовок, отображаемый как ссылка.
 * @param {string} subtitle — Краткое описание под заголовком.
 * @param {string} href — URL, на который ведёт заголовок.
 */
const PromoCard: React.FC<PromoCardProps> = ({ image, title, subtitle, href }) => {
    return (
        <div className={styles.promoCard}>
            <img src={image} alt="promo" className={styles.image} />
            <div className={styles.textBlock}>
                <a href={href} className={styles.title}>
                    {title}
                </a>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
        </div>
    );
};

export default PromoCard;
