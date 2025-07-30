import './App.css'
import NewsPanel from "./components/news/NewsPanel.tsx";
import {newsTabsConfig, newsTickerConfig} from "./data/News.ts";
import PromoCard from "./components/promo_card/PromoCard.tsx";
import {promoCardConfig} from "./data/PromoCard.ts";
import SearchPanel from "./components/search/SearchPanel.tsx";
import InfoPanel from "./components/info/InfoPanel.tsx";


function App() {
  return (
    <>
        <div className="app-container padding-left-80">
            <NewsPanel tabsConfig={newsTabsConfig} tickerConfig={newsTickerConfig} />
            <PromoCard {...promoCardConfig} />
        </div>
        <br/>
        <div className="padding-left-80">
            <SearchPanel/>
            <InfoPanel/>
        </div>

    </>
  )
}

export default App
