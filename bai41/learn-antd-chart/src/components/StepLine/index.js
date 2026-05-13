import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function StepLine() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.1.83:3030/statistics`)
      .then(res => res.json())
      .then(data => setDataChart(data))
      .catch(err => console.error("Lỗi fetch data: ", err));
  }, []);

  const config = {
    data: dataChart,
    xField: 'date',
    yField: 'quantity',
    shapeField: 'hv',
    point: {
      shapeField: 'point',
      sizeField: 4
    },
    slider: {
      x: {
        start: 0,
        end: 1
      },
    }
  };

  return (
    <>
      <h2>Ví dụ về Step Line</h2>
      <Line {...config} />
    </>
  );
}

export default StepLine;