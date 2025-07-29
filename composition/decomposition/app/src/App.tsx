import './App.css'
import NewsPanel from "./components/news/NewsPanel.tsx";
import {newsTabsConfig, newsTickerConfig} from "./data/News.ts";
import PromoCard from "./components/promo_card/PromoCard.tsx";
import {promoCardConfig} from "./data/PromoCard.ts";


function App() {
  return (
    <>
        <div className="app-container">
            <NewsPanel tabsConfig={newsTabsConfig} tickerConfig={newsTickerConfig} />
            <PromoCard {...promoCardConfig} />
        </div>
    </>
  )
}

export default App
