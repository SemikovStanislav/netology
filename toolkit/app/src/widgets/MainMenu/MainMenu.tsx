import { Link } from "react-router-dom";
import "./MainMenu.css";

const MainMenu: React.FC = () => {
    return (
        <header className="main-menu">
            <ul className="menu-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </header>
    );
};

export default MainMenu;
