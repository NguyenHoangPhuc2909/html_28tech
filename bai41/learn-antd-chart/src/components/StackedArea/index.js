import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";
function StackedArea() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.1.83:3030/charts`)
      .then(res => res.json())
      .then(data => setDataChart(data))
      .then(err => console.error("Loi fetch data " + err))
  }, []);

  const config = {
    data: dataChart,
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    slider: {
      x: {
        start: 0,
        end: 1
      },
    },
    point: {
      shapeField: 'point',
      sizeField: 4
    },
    percent: true
  }
  return (
    <>
      <h2>Ví dụ về StackedArea</h2>
      <Area {...config} />
    </>
  )
}

export default StackedArea;