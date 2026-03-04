function ProductItem(props) {
    const { item } = props;
    return (
        <>
            <div className="product__item">
                <h3 className="product__name">{item.name}</h3>
                <img className="product__image" src={item.image} alt={item.name} style={{ width: "100px" }}></img>
                <div className="product__price">Gia: {item.price}</div>
            </div>
        </>
    )
}

export default ProductItem;