// Random Gift

import { useRef, useState } from "react";

function UseRef3() {
    const gifts = ["Dien thoai", "Laptop", "Xe may", "Dong ho"];
    const [result, setResult] = useState("");
    const countRef = useRef(0);

    const randomClick = () => {
        if(countRef.current < 3) {
        const random = Math.floor(Math.random()*gifts.length);
        setResult(gifts[random]);
        countRef.current = countRef.current + 1;
        }
        else {
            alert("Ban da het luot!");
        }
    }

    console.log(countRef);
    return (
        <>
            <button onClick={randomClick}>Random</button>
            <div>Bạn đã trúng thưởng: {result}</div>
        </>
    );
}

export default UseRef3;