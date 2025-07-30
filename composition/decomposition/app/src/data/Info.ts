import ReactLogo from "../assets/react.svg"

export const trendingCardConfig = {
    titleConfig: {
        title: "Посещаемое",
        href: "#"
    },
    lines: [
        {
            content: "о сталинках",
            href: "#",
            title: "Недвижимость",
            separator: true,
            isTitleBold: true,
        },
        {
            content: "люстры и светильники",
            href: "#",
            title: "Маркет",
            separator: true,
            isTitleBold: true,
        },
        {
            content: "привод 4x4 до 500 000",
            href: "#",
            title: "Авто.ру",
            separator: true,
            isTitleBold: true,
        }
    ]
}

export const tvCardConfig = {
    titleConfig: {
        title: "Телепрограмма",
        href: "#",
        icon: ReactLogo
    },
    lines: [
        {
            content: "THT. Best",
            href: "#",
            title: "02:00",
            hint: "ТНТ International"
        },
        {
            content: "Джинглики",
            href: "#",
            title: "02:15",
            hint: "Карусель INT"
        },
        {
            content: "Наедине со всеми",
            href: "#",
            title: "02:25",
            hint: "Первый"
        }
    ]
}

export const broadcastCardConfig = {
    titleConfig: {
        title: "Эфир",
        href: "#"
    },
    lines: [
        {
            content: "Управление как искусство",
            href: "#",
            hint: "Успех",
            icon: ReactLogo
        },
        {
            content: "Ночь. Мир в это время",
            href: "#",
            hint: "earthTV",
            icon: ReactLogo
        },
        {
            content: "Андрей Возн...",
            href: "#",
            hint: "Совершенно секретно",
            icon: ReactLogo
        }
    ]
}

export const germanyCardConfig = {
    titleConfig: {
        title: "Карта Германии",
        href: "#",
    },
    lines: [
        {
            content: "Расписания",
            "href": "#",
        }
    ]
}

export const weatherCardConfig = {
    title: "Погода",
    href: "#",
    icon: ReactLogo,
    currentTemperature: "+17°",
    line1: "Утром +17",
    line2: "днём +20",
}