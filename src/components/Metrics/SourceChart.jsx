import React from 'react';
import { Bar } from 'react-chartjs-2';

const SourceChart = ({ source, applications }) => {

    const parsedData = (() => {
        const hash = {[source]: {applied:0, interview:0, offer:0, rejected:0}};
        applications.forEach(app => {
            if (app.source === source) {
                hash[source][app.status] += 1;
            }
        })
        return Object.values(hash[source]);
    })();

    const getSuccessRate = () => {
        const totalApplied = parsedData[0];
        const totalInterviews = parsedData[1];
        return Math.floor((totalInterviews / totalApplied) * 100);
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1
              },
            },
          ],
        },
    }
    const data = {
        labels: ['Applied', 'Interview', 'Offer', 'Rejected'],
        datasets: [
          {
            label: `${source} Success Rate ${getSuccessRate()}%`,
            data: parsedData,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          },
        ],
    }
    return (
        <div className="source-chart">
            <Bar data={data} options={options}/>
        </div>
    )
}
export default SourceChart;