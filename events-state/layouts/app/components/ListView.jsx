import ShopItem from "./ShopItem.jsx";

const ListView = (props) => {
    const getItems = () => {
        return props.items.map(card => {
            return <ShopItem card={card}/>
        })
    }

    return <div className="list-view" children={getItems()}/>
}

export default ListView;