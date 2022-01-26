import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function MainLineChart() {
  const data = {
    labels,
    datasets: [
      {
        data: [200, 520, 600, 100, 220, 450, 630],
        borderColor: '#14121f',
        backgroundColor: '#14121f',
        borderWidth: 2,
        backgroundWidth: 3,
      },
    ],
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
