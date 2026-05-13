import { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";

function PieChart() {
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
    angleField: 'quantity',
    colorField: 'date',
    label: {
      text: 'quantity',
      position: 'outside',
    },
  };

  return (
    <>
      <h2>Ví dụ về PieChart</h2>
      <Pie {...config} />
    </>
  );
}

export default PieChart;