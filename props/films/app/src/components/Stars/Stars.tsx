import type {FC} from "react";
import Star from "../Star/Star.tsx";
import classes from "./stars.module.css"

type StarsProps = {
    count: 1 | 2 | 3 | 4 | 5
}

const Stars: FC<StarsProps> = ({count}) => {

    const getStars = () => {
        return [...Array(count)].map((_, i) => i + 1).map((key: number)=> <Star key={String(key)}/>)
    }

    return <ul className={classes["stars"]}>
        {(count >= 1 && count <= 5) ? getStars() : undefined}
    </ul>
}

export default Stars;