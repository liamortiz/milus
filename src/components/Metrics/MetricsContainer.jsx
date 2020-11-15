import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { defaultJobCards } from '../../atoms';

const data = {
  labels: ['10/29', '10/30', '10/31', '11/1', '11/2', '11/3'],
  datasets: [
    {
      label: `Daily Applications ${101} Total`,
      data: [12, 19, 3, 5, 2, 100],
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
        },
      },
    ],
  },
}

const MetricsContainer = () => {
  const jobCards = useRecoilValue(defaultJobCards);
  useEffect(() => {
    console.log(jobCards);
  }, [jobCards])

  return (
    <div id="metrics-container">
      <Bar data={data} options={options} />
    </div>
  )
}

export default MetricsContainer;