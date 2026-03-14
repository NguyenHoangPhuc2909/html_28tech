import { useRef, useState } from "react";

function UseRef2() {
    const [inputValue, setInputValue] = useState("");
    const countRef = useRef(0);
    const handleChange = (e) => {
        setInputValue(e.target.value);
        countRef.current = countRef.current + 1;
    }
    console.log(countRef.current);
    return (
        <>
            <input value={inputValue} onChange={handleChange}/>
        </>
    );
}

export default UseRef2;