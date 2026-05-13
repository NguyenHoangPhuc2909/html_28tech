import { useEffect, useState } from "react";
import { Bar } from "@ant-design/plots";

function StackedBar() {
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
    colorField: 'category',
    stack: true,
    slider: {
      x: {
        start: 0,
        end: 1
      }
    }
  };

  return (
    <>
      <h2>Ví dụ về StackedBar</h2>
      {dataChart.length > 0 ? <Bar {...config} /> : "Đang tải dữ liệu..."}
    </>
  )
}

export default StackedBar;