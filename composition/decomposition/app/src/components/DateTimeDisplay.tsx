import { useEffect, useState } from "react"

const monthsGenitive = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
]

/**
 * @component DateTimeDisplay
 * @description Отображает актуальные дату и время в формате "26 июля, суббота 15 33".
 */
const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()

            const day = now.getDate()
            const month = monthsGenitive[now.getMonth()]
            const weekday = now.toLocaleString("ru-RU", { weekday: "long" })
            const hours = now.getHours().toString().padStart(2, "0")
            const minutes = now.getMinutes().toString().padStart(2, "0")

            const formatted = `${day} ${month}, ${weekday} ${hours} ${minutes}`
            setDateTime(formatted)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 60 * 1000)

        return () => clearInterval(interval)
    }, [])

    return <span>
          {dateTime}
        </span>
}

export default DateTimeDisplay
