import SearchBar from "./SearchBar.tsx";
import TopNav from "./TopNav.tsx";
import {AdBannerProps, searchHingProps, topNavItems} from "../../data/Search.ts";
import MainLogo from "./MainLogo.tsx";
import styles from "./SearchPanel.module.css";
import SearchHint from "./SearchHint.tsx";
import AdBanner from "./AdBanner.tsx";

const SearchPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.logoWrapper}>
                    <MainLogo />
                </div>
                <div className={styles.right}>
                    <TopNav items={topNavItems} />
                    <SearchBar />
                    <SearchHint {...searchHingProps}/>
                    <AdBanner {...AdBannerProps} />
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;
