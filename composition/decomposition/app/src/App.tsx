import './App.css'
import NewsPanel from "./components/news/NewsPanel.tsx";
import {newsTabsConfig, newsTickerConfig} from "./data/News.ts";


function App() {
  return (
    <>
        <NewsPanel tabsConfig={newsTabsConfig} tickerConfig={newsTickerConfig}/>
    </>
  )
}

export default App
