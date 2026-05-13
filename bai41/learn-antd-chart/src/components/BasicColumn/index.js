import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function BasicColumn() {
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
    label: {
      text: (d) => d.quantity, // V2 dùng thuộc tính text thay vì content
      textBaseline: 'bottom',
      position: 'top',
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
      <h2>Ví dụ về BasicColumn</h2>
      {dataChart.length > 0 ? <Column {...config} /> : "Đang tải dữ liệu..."}
    </>
  )
}

export default BasicColumn;