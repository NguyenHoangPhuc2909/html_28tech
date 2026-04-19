import { useState } from 'react';
import './App.css';
import { Button } from "antd";

function App() {
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
    </>
  );
}

export default App;
