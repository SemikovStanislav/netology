import type {NavItem} from "../components/search/TopNav.tsx";
import AdImage from "../assets/ad.png"

export const topNavItems: NavItem[] = [
    { name: "Видео", href: "#" },
    { name: "Картинки", href: "#" },
    { name: "Новости", href: "#" },
    { name: "Карты", href: "#" },
    { name: "Маркет", href: "#" },
    { name: "Переводчик", href: "#" },
    { name: "Эфир", href: "#" },
    { name: "ещё", href: "#" },
];

export const searchHingProps = {
    hintText: "фаза луны сегодня",
    href: "#"
}

export const AdBannerProps = {
    image: AdImage,
    href: "#"
}