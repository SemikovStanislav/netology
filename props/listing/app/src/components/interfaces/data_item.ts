export interface IRawDataItem {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    }
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
    state: "active" | "removed";
}

export interface IDataItem {
    listing_id: number;
    url: string;
    image_url: string;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}