import { useDispatch, useSelector } from "react-redux";
import { down, up, reset } from "../../actions/counter";

function Counter() {
    const counter = useSelector(state => state.counterReducer);
    // console.log(counter);
    const dispatch = useDispatch();
    return(
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(up(5))}>Up</button>
        <button onClick={() => dispatch(down(3))}>Down</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    );
};

export default Counter;