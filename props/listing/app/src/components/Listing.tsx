import type {IDataItem} from "./interfaces/data_item.ts";
import type {FC} from "react";
import Card from "./Card.tsx";

interface IListing {
    items: IDataItem[]
}

const Listing: FC<IListing> = ({items = []}) => {
    return <div className="item-list">
        {
            items.map((item) => <Card {...item}/>)
        }
    </div>;
}

export default Listing;