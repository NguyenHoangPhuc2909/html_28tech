import { memo } from "react";

function Box(props) {
    const { onCounter, onReset } = props;
    const handleClick = () => {
        onCounter();
    }

    const resetClick = () => {
        onReset();
    }
    console.log("render box");
    return (
        <>
            <button onClick={handleClick}>Increase</button>
            <button onClick={resetClick}>Reset</button>
        </>
    );
}

export default memo(Box);