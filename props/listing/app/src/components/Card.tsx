import type {FC} from "react";
import type {IDataItem} from "./interfaces/data_item.ts";

const CURRENCY_CODE_X_SYMBOL_MAPPING = {
    USD: "$",
    EUR: "€"
}

const Card: FC<IDataItem> = (props) => {
    const {listing_id, url, image_url, title, currency_code, price, quantity} = props
    
    const getTitle = () =>
        title.length > 50 ? title.slice(0, 50) + "..." : title;

    const isKnownCurrency = (
        code: string
    ): code is keyof typeof CURRENCY_CODE_X_SYMBOL_MAPPING => {
        return code in CURRENCY_CODE_X_SYMBOL_MAPPING;
    };
    
    const getPrice = () => {
        if (isKnownCurrency(currency_code)) {
            return `${CURRENCY_CODE_X_SYMBOL_MAPPING[currency_code]}${price}`
        }

        return `${price} ${currency_code}`
    }

    const getStockLevel = () => {
        if (quantity < 10) {
            return "low"
        } else if ( quantity <= 20) {
            return "medium"
        }
        return "high"
    }

    return <div className="item" key={listing_id}>
        <div className="item-image">
            <a href={url}>
                <img src={image_url}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{getTitle()}</p>
            <p className="item-price">{getPrice()}</p>
            <p className={`item-quantity level-${getStockLevel()}`}>{quantity} left</p>
        </div>
    </div>
}

export default Card;