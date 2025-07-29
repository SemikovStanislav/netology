import React from "react";
import styles from "./TopNav.module.css";

export interface NavItem {
    name: string;
    href: string;
}

interface ITopNav {
    items: NavItem[];
}

/**
 * @component TopNav
 * @description Горизонтальное меню навигации. Принимает массив ссылок с названием и href.
 */
const TopNav: React.FC<ITopNav> = ({ items }) => {
    return (
        <nav className={styles.nav}>
            {items.map((item) => (
                <a key={item.name} href={item.href} className={styles.link}>
                    {item.name}
                </a>
            ))}
        </nav>
    );
};

export default TopNav;
