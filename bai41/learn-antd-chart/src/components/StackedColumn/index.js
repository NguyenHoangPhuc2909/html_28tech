import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function StackedColumn() {
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
    label: {
      text: (d) => d.value, // V2 dùng thuộc tính text thay vì content
      textBaseline: 'bottom',
      position: 'top',
    },
    interaction: {
      elementHighlightByColor: {
        link: true,
      },
    },
    state: {
      active: { linkFill: 'rgba(0,0,0,0.25)', stroke: 'black', lineWidth: 0.5 },
      inactive: { opacity: 0.5 },
    },
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
      <h2>Ví dụ về StackedColumn</h2>
      {dataChart.length > 0 ? <Column {...config} /> : "Đang tải dữ liệu..."}
    </>
  )
}

export default StackedColumn;