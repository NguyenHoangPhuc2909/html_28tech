import { useEffect } from "react";

function UseEffect1(){
    // const listItem = document.querySelectorAll("ul li");
    // console.log(listItem);
    // => Vì chưa render ra giao diện ở return nên khi query chưa có gì để lấy

    useEffect(() => {
        const listItem = document.querySelectorAll("ul li");
        console.log(listItem);
    });

    return (
        <>
            <ul>
                <li>Mục 1</li>
                <li>Mục 2</li>
                <li>Mục 3</li>
            </ul>
        </>
    )
}

export default UseEffect1;