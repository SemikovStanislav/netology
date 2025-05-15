import ShopCard from "./ShopCard.jsx";

const CardView = (props) => {
    const getCards = () => {
        return props.cards.map(card => {
            return <ShopCard card={card}/>
        })
    }

    return <div className="card-view" children={getCards()}/>
}

export default CardView;