import { useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const countObject = {
        current: 0
    };
    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        countObject.current = countObject.current + 1;
    }

    // countObject không được tăng giá trị vì khi Click vào thì gọi lại hàm UseRef()
    // thì Object thông thường sẽ được tạo lại chứ không có lưu giá trị trước đó nên giá trị sẽ không tăng

    console.log("Count: ", count);
    console.log("countRef: ", countRef);
    console.log("countObject: ", countObject);
    console.log("-------------------------");
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default UseRef;