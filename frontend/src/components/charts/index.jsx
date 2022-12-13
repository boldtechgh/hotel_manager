import React from "react";
import Chart from 'chart.js/auto';
import { Pie, Bar } from 'react-chartjs-2';
import './charts.styles.scss';

export const PieChart = (props) => {
    const {labels, label, values, colors} = props;
    const data = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: values,
                backgroundColor: colors,
                hoverOffset: 4
            }
        ]
    };

    return (
        <div>
            <Pie data={data} />
        </div>
    )
};

export const BarChart = (props) => {
    const {labels, label, values, colors} = props;
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
        }
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
};