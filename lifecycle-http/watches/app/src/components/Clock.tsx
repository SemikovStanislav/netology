import {useCallback, useEffect, useState} from "react";
import * as React from "react";

interface IClock {
    name: string;
    timezone: string; // формат: GMT+3, GMT-5
    onDelete: () => void;
}

const Clock: React.FC<IClock> = ({ name, timezone, onDelete }) => {
    const getTimeWithOffset = useCallback(() => {
        const base = new Date();
        const offsetString = timezone.replace("GMT", "");
        const offset = parseFloat(offsetString);
        const utc = base.getTime() + base.getTimezoneOffset() * 60000;
        return new Date(utc + offset * 3600000);
    }, [timezone]);

    const [currentTime, setCurrentTime] = useState(() => getTimeWithOffset());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getTimeWithOffset());
        }, 1000);
        return () => clearInterval(interval);
    }, [getTimeWithOffset]);

    return (
        <div>
            <strong>
                {name} ({timezone})
            </strong>
            <div>{currentTime.toLocaleTimeString("ru-RU", { hour12: false })}</div>
            <button onClick={onDelete}>Удалить</button>
        </div>
    );
};

export default Clock;
