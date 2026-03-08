import { useState } from "react";

function Lamps() {
    const [status, setState] = useState(false);

    const handleClick = () => {
        setState(!status);
    }

    console.log(status);
    return (
        <>
            <button onClick={handleClick}>
                {status ? "Tat di" : "Bat len"}
            </button>
            <div>
                {status ? "Den dang bat" : "Den dang tat"}
            </div>
        </>
    );
}

export default Lamps;