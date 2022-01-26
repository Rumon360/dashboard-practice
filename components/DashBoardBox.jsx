import { FaEllipsisV } from 'react-icons/fa';
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

const labels = [0, 5, 10, 15];

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

export default function DashBoardBox({ Icon, value, percentage, dataValue }) {
  const data = {
    labels,
    datasets: [
      {
        data: dataValue,
        borderColor: '#14121f',
        backgroundColor: '#14121f',
        borderWidth: 4,
        backgroundWidth: 3,
        radius: 0,
        tension: 0.5,
      },
    ],
  };

  return (
    <div className="w-[250px] px-4 py-4 bg-white rounded-xl space-y-3 shadow-lg">
      <div className=" flex items-center justify-between">
        <div className=" px-2 py-2 bg-[#14121f] rounded-xl">
          <Icon className=" h-6 w-6 text-white " />
        </div>
        <FaEllipsisV className=" h-4 w-4" />
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <h1 className=" text-3xl font-extrabold">{value}</h1>
        <div className=" w-24 h-24 pt-1">
          <Line data={data} options={options} />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">{percentage} This week</p>
      </div>
    </div>
  );
}
