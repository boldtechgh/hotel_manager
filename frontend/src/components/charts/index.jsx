import React from "react";
import Chart from "chart.js/auto";
import { Pie, Bar, Doughnut, Line } from "react-chartjs-2";
import "./charts.styles.scss";

export const PieChart = (props) => {
  const { labels, label, values, colors, circumference } = props;
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: colors,
        hoverOffset: 4,
        circumference: circumference,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export const DoughNut = (props) => {
  const { labels, label, values, colors, circumference, radius, borderWidth } =
    props;
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: colors,
        hoverOffset: 4,
        circumference: circumference,
        radius: radius,
        borderWidth: borderWidth,
      },
    ],
    options: {
      tooltips: {
        enabled: false,
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = data.datasets[0].data;
            dataArr.map((data) => {
              sum += data;
            });
            let percentage = ((value * 100) / sum).toFixed(2) + "%";
            return percentage;
          },
          color: "#fff",
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export const BarChart = (props) => {
  const { labels, label, values, colors } = props;
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        borderColor: colors,
        backgroundColor: colors,
        minBarLength: 2,
      },
    ],
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          gridLines: {
            display: false,
          },
        },
        x: {
          gridLines: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export const LineChart = (props) => {
  const { labels, label, values, colors, label2, values2, colors2 } = props;
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        borderColor: colors,
        backgroundColor: "rgba(119,147,65,0.3)",
        minBarLength: 2,
        pointRadius: 0,
        showLine: true,
        borderWidth: 1.5,
        fill: true,
      },
      {
        label: label2,
        data: values2,
        borderColor: colors2,
        backgroundColor: colors2,
        minBarLength: 2,
        pointRadius: 0,
        showLine: true,
        borderDash: ["2"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        gridLines: {
          display: false,
        },
      },
      x: {
        gridLines: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
