import {images} from "../data/images.jsx";
import Toolbar from "./Toolbar.js";
import {useState} from "react";

const COLUMNS_COUNT = 3
const CATEGORIES = ["Websites", "Flayers", "Business Cards"]
const SHOW_ALL_FILTER = "All"
const FILTERS = [...[SHOW_ALL_FILTER], ...CATEGORIES];

const Portfolio = () => {
    const [selected, setSelected] = useState(SHOW_ALL_FILTER);

    const splitIntoBuckets = (arr, bucketCount) => {
        const buckets = Array.from({length: bucketCount}, () => []);
        arr.forEach((item, index) => {
            const bucketIndex = index % bucketCount;
            buckets[bucketIndex].push(item.component);
        })

        return buckets;
    }

    const getColumns = (columnsCount) => {
        const imageBuckets = splitIntoBuckets(
            images.filter(image => (image.category === selected || selected === SHOW_ALL_FILTER)),
            columnsCount
        );

        return imageBuckets.map((item, index) => {
            return <div key={`col-${index}`} className="col" children={item} />
        })
    }

    const onSelectFilter = (filter) => {
        setSelected(filter);
    }

    return <div className="col">
        <Toolbar
            filters={FILTERS}
            selected={selected}
            onSelectFilter={onSelectFilter}
        />
        <div
            className={"row"}
            children={getColumns(COLUMNS_COUNT)}
        />
    </div>;
}

export default Portfolio;