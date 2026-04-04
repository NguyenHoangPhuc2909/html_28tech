import { FaCartPlus } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);

    const handleAdd = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id));
        }
        else {
            dispatch(addToCart(item.id, item));
        }
    }

    return (
        <>
            <div className="product__item">
                <div className="product__image">
                    <img src={item.thumbnail} alt={item.title} />
                    <p className="product_discount">{item.discountPercentage}%</p>
                </div>
                <div className="product__content">
                    <h3 className="product__title">{item.title}</h3>
                    <div className="product__meta">
                        <div className="product__prices">
                            <p className="product__price--new">${(item.price * (100 - item.discountPercentage) / 100).toFixed(2)} - </p>
                            <p className="product__price--old">${item.price}</p>
                        </div>

                        {/* Hàng 2: stock + button */}
                        <div className="product__actions">
                            <p className="product__rating"><IoIosStarOutline /> {item.rating}</p>
                            <button className="product__btn" onClick={handleAdd}><FaCartPlus /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;