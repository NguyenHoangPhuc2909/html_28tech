import { useState } from "react";

function CounterState() {
    const [data, setData] = useState(0);
    const upClick = () => {
        setData(data => data + 1);
    };

    return (
        <>
            <div>Kết quả: {data}</div>

            <button onClick={upClick}>Up</button>
            <button onClick={() => setData(data => data - 1)}>Down</button>
            <button onClick={() => setData(0)}>Reset</button>
        </>
    );
}

export default CounterState;