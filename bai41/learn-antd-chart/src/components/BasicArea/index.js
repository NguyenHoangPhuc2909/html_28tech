import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";

function BasicArea() {
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
    shapeField: 'smooth',
    style: {
      fillOpacity: 0.5,
      fill: 'linear-gradient(-180deg, #1890ff 0%, rgba(24, 144, 255, 0.1) 100%)'
    },
    point: {
      shapeField: 'point',
      sizeField: 4
    },
    slider: {
      x: {
        start: 0,
        end: 1
      }
    }
  };

  return (
    <>
      <h2>Ví dụ về BasicArea</h2>
      {dataChart.length > 0 ? <Area {...config} /> : "Đang tải dữ liệu..."}
    </>
  )
}

export default BasicArea;