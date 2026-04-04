import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function CartMini(){
    const cart = useSelector(state => state.cartReducer);

    const total = cart.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);
    return (
        <>
        <NavLink to="/cart">Cart ({total})</NavLink>
        </>
    );
}

export default CartMini;