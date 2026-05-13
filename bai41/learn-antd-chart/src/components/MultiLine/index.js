import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function MultiLine() {
  const [dataChart, setDataChart] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.1.83:3030/charts`)
      .then(res => res.json())
      .then(data => setDataChart(data))
      .catch(err => console.error("Lỗi fetch data: ", err));
  }, []);

  const config = {
    data: dataChart,
    xField: 'year',
    yField: 'value',
    shapeField: 'smooth',
    colorField: 'category',
    slider: {
      x: {
        start: 0,
        end: 1
      },
    }
  }

  return (
    <>
      <h2>Ví dụ về MultiLine</h2>
      {dataChart.length > 0 ? <Line {...config} /> : "Đang tải dữ liệu..."}
    </>
  );
}

export default MultiLine;