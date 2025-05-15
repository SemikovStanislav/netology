import IconSwitch from "./IconSwitch";
import CardView from "./CardView";
import ListView from "./ListView.jsx";
import {useState} from "react";

const Store = () => {
    const [cardView, setCardView] = useState(true);

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "public/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "public/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "public/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "public/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "public/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "public/img/5.jpg"
    }];

    const getView = () => {
        if (cardView) {
            return <CardView cards={products}/>;
        }

        return <ListView items={products}/>
    }

    return <>
        <IconSwitch icon={cardView ? "view_module" : "view_list"} onSwitch={() => setCardView((prev) => !prev)} />

        {getView()}
    </>
}

export default Store;