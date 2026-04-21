import { useState } from 'react';
import { Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

function LearnButton() {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 3000)
    }

    return (
        <>
            <Button type='dashed' loading={loading} onClick={handleClick} disabled={loading}>Nội dung</Button>
            <Button icon={<SwapOutlined rotate={90} spin={true} />}>Button</Button>
        </>
    );
}

export default LearnButton;