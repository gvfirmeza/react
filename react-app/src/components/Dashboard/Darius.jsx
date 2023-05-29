import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Lerer } from './style';

function Dashboard() {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Chamados',
            data: [12, 19, 7, 9, 14, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  const chart2Ref = useRef(null);
  let myChart2 = null;

  useEffect(() => {
    const ctx = chart2Ref.current.getContext('2d');
    if (myChart2) {
      myChart2.destroy();
    }

    myChart2 = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['ADM', 'Comercial', 'Tecnologia'],
        datasets: [
          {
            label: 'Chamados',
            data: [20, 18, 26],
            backgroundColor: ['rgba(216, 50, 28, 0.6)', 'rgba(28, 216, 53, 0.6)' , 'rgba(78, 28, 216, 0.6)']
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (

    <Lerer>
      <div>
      <h2>Quantidade de Chamados</h2>
      <canvas width="600em" ref={chartRef}></canvas>
      </div>
      <div className='jonas'>
      <h2>Chamados por Setor</h2>
      <canvas width="400em"ref={chart2Ref}></canvas>
      </div>
    </Lerer>
  );
}

export default Dashboard;
