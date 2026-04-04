import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleUp = () => {
        dispatch(updateQuantity(item.id, 1));
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }

    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1));
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    }

    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    }
    return (
        <>
            <div className="cart__item">
                <div className="cart__image">
                    <img src={item.info.thumbnail} alt={item.info.title} />
                </div>
                <div className="cart__content">
                    <h4 className="cart__title">{item.info.title}</h4>
                    <div className="cart__price--new">${(item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(2)}</div>
                    <div className="cart__price--old">${item.info.price}</div>
                </div>
                <div className="cart__quantity">
                    <button onClick={handleDown}><GrSubtract /></button>
                    <input ref={inputRef} defaultValue={item.quantity} key={item.quantity} />
                    <button onClick={handleUp}><IoMdAdd /></button>
                </div>
                <button className="btn__del" onClick={handleDelete}>Delete</button>
            </div>
        </>
    );
}

export default CartItem;