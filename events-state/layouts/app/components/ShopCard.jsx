
const ShopCard = (props)=> {
    return <div
        className="shop-card"
        style={{
            backgroundImage: `url(${props.card.img})`,
        }}
    >
        <p className={"name"}>{props.card.name}</p>
        <p className={"color"}>{props.card.color}</p>
        <div className="shop-card-bottom">
            <p className={"price"}>${props.card.price}</p>
            <button className={'add-to-cart'}>Add to cart</button>
        </div>
    </div>
}

export default ShopCard;