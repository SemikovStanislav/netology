import './App.css'
import Listing from "./components/Listing.tsx";
import rawData from "./data/etsy.json";
import type {IRawDataItem} from "./components/interfaces/data_item.ts";

function App() {
    const getData = () => {
        const parsedData: IRawDataItem[] = JSON.parse(JSON.stringify(rawData));

        return parsedData
            .filter((item) => item.state !== "removed")
            .map((item) => ({
                listing_id: item.listing_id,
                url: item.url,
                image_url: item.MainImage.url_570xN,
                title: item.title,
                currency_code: item.currency_code,
                price: item.price,
                quantity: item.quantity,
            }));
    }

  return (
    <>
        <Listing items={getData()}/>
    </>
  )
}

export default App
