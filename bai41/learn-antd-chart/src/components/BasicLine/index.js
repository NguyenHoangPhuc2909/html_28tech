import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function BasicLine() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.1.83:3030/statistics`)
      .then(res => res.json())
      .then(data => {
        setDataChart(data);
      })
  }, []);
  console.log(dataChart);

  const config = {
    data: dataChart,
    xField: 'date',
    yField: 'quantity',
    shapeField: 'smooth',
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
      <h2>Ví dụ về Basic Line</h2>
      <Line {...config} />
    </>
  );
}

export default BasicLine;