
const ShopItem = props => {
    return <div className="shop-item">
        <img className="shop-item-img" src={props.card.img} alt={props.card.name} />
        <p className={"name"}>{props.card.name}</p>
        <p className={"color"}>{props.card.color}</p>
        <p className={"price"}>${props.card.price}</p>
        <button className={'add-to-cart'}>Add to cart</button>
    </div>;
}

export default ShopItem