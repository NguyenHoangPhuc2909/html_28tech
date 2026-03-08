import { useState } from "react";
import "./Cart.scss"
function Cart(){
    const unitPrice = 120000;
    const [quanlity, setQuanlity] = useState(1);

    const handleChange = (e) => {
        const updateQuanlity = parseInt(e.target.value);
        setQuanlity(updateQuanlity);
        console.log(updateQuanlity);
        // console.log(e.target.value)  -> String;
    }
    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Ten san pham</th>
                        <th>So luong</th>
                        <th>Don gia</th>
                        <th>Thanh tien</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giay the thao nam cao cap</td>
                        <td>
                            <input defaultValue={quanlity} type="number" min={1} onChange={handleChange}></input>
                        </td>
                        <td>{unitPrice}d</td>
                        <td>{unitPrice * quanlity}d</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Cart;