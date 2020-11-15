import React from 'react'
import { Bar } from 'react-chartjs-2';
import SourceChart from './SourceChart';

/* Using temporary data */

const applications =  [
  {date: '10/29', source: 'LinkedIn', status: 'applied'},
  {date: '10/29', source: 'LinkedIn', status: 'applied'},
  {date: '10/29', source: 'LinkedIn', status: 'applied'},
  {date: '10/30', source: 'LinkedIn', status: 'applied'},
  {date: '10/30', source: 'LinkedIn', status: 'applied'},
  {date: '10/30', source: 'LinkedIn', status: 'applied'},
  {date: '10/30', source: 'LinkedIn', status: 'applied'},
  
  {date: '10/31', source: 'LinkedIn', status: 'interview'},
  {date: '10/31', source: 'LinkedIn', status: 'interview'},

  {date: '10/31', source: 'LinkedIn', status: 'offer'},
  {date: '11/1', source: 'LinkedIn', status: 'rejected'},
  

  {date: '11/2', source: 'Indeed', status: 'applied'},
  {date: '11/2', source: 'Indeed', status: 'applied'},
  {date: '11/2', source: 'Indeed', status: 'applied'},
  {date: '11/3', source: 'Indeed', status: 'applied'},
  {date: '11/3', source: 'Indeed', status: 'interview'},
  {date: '11/3', source: 'Indeed', status: 'offer'},
  {date: '11/4', source: 'Indeed', status: 'rejected'},
  {date: '11/4', source: 'Indeed', status: 'rejected'}
];

const parsedJobs = (() => {
  const hash = {};
  applications.forEach(app => {
    hash[app.date] = hash[app.date] ? hash[app.date] + 1 : 1;
  })
  return hash;
})();


function getUniqueJobSources() {
  return new Set(applications.map(app => app.source));
}

function getTotalApplications() {
  return Object.values(parsedJobs).reduce((a, b) => a + b);
}

const data = {
  labels: Object.keys(parsedJobs),
  datasets: [
    {
      label: `Job Applications ${getTotalApplications()}`,
      data: Object.values(parsedJobs),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
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

const MetricsContainer = () => {
  return (
    <div id="metrics-container">
      <div id="main-chart">
        <Bar data={data} options={options} />
      </div>
      <div className="source-chart-container">
        {
          [...getUniqueJobSources().values()].map(source => 
            <SourceChart key={source} source={source} applications={applications}/>
            )
        }
      </div>
    </div>
  )
}

export default MetricsContainer;