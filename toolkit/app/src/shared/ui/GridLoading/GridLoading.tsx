import { Card } from "antd"
import styles from "./GridLoading.module.css"

interface Props {
    count?: number
}

const GridLoading: React.FC<Props> = ({ count = 8 }) => {
    return (
        <div className={styles.grid}>
            {Array.from({ length: count }).map((_, index) => (
                <Card key={index} loading className={styles["card"]} />
            ))}
        </div>
    )
}

export default GridLoading
