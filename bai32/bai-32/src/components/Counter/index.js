import { useMemo, useState } from "react";
import { pow } from "../../helpers/pow";

function Counter() {
    const [counter, setCounter] = useState(0);
    // const handleCounter = () => {
    //     setCounter(counter => counter + 1);
    // }

    const handleCounter = () => {
        setCounter(counter => counter + 1);
    };

    const resultPow = useMemo(() => { pow()}, []);
    return (
        <>
            <div>Kết quả: {counter}</div>
            <button onClick={handleCounter}>Increase</button>
            <div>{resultPow}</div>
        </>
    );
}

export default Counter;