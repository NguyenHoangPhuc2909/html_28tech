import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./CartList.scss";
import { deleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const total = cart.reduce((sum, item) => {
        const newPrice = ((item.info.price * (100 - item.info.discountPercentage)) / 100);
        return sum +newPrice*item.quantity;
    }, 0);

    const dispatch = useDispatch();

    const handleDelAll = () => {
        dispatch(deleteAll());
    }
    return (
        <>
            <div className="cart__head">
                <h2>Cart</h2>
                <button className="btn__delete" onClick={handleDelAll}>Clear All</button>
            </div>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">Total: <span>${total.toFixed(2)}</span></div>
                    </>
                ) : (
                    <>Cart is empty</>
                )}
            </div>
        </>
    );
};

export default Cart;