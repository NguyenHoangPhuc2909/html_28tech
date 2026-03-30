import { useSelector, useDispatch } from "react-redux";
import { up, down } from "../../actions/counter";

function Counter2() {
  const counter2 = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter2: {counter2}</h2>
      <button onClick={() => dispatch(up(4))}>Up</button>
      <button onClick={() => dispatch(down(2))}>Down</button>
    </>
  );
}

export default Counter2;