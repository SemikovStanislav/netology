import './App.css'
import NewsPanel from "./components/news/NewsPanel.tsx";
import {newsTabsConfig, newsTickerConfig} from "./data/News.ts";
import PromoCard from "./components/promo_card/PromoCard.tsx";
import {promoCardConfig} from "./data/PromoCard.ts";
import SearchPanel from "./components/search/SearchPanel.tsx";


function App() {
  return (
    <>
        <div className="app-container">
            <NewsPanel tabsConfig={newsTabsConfig} tickerConfig={newsTickerConfig} />
            <PromoCard {...promoCardConfig} />
        </div>
        <br/>
        <SearchPanel/>
    </>
  )
}

export default App
