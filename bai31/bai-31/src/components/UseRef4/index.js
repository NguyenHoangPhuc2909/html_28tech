import { useRef, useState, useEffect} from "react";

function UseRef4() {
    const [inputValue, setInputValue] = useState("");
    const countRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        countRef.current = countRef.current + 1;
    }
    return (
        <>
            <input ref={inputRef} value={inputValue} onChange={handleChange}/>
        </>
    );
}

export default UseRef4;