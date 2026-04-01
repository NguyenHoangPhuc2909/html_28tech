/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router";
function GoBack(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }
    return(
        <>
        <button onClick={handleClick}>Trở lại</button>
        </>
    );
}

export default GoBack;