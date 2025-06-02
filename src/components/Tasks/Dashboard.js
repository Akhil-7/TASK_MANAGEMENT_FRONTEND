import { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig';

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get('/task/home/');
        setStats(response.data.data);
      } catch (err) {
        console.error('Dashboard load failed');
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] bg-gray-100 px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 text-center">Dashboard</h2>
        {stats ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Total Tasks</h3>
              <p className="text-3xl font-bold">{stats.total_tasks}</p>
            </div>
            <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-3xl font-bold">{stats.completed_tasks}</p>
            </div>
            <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">Pending</h3>
              <p className="text-3xl font-bold">{stats.pending_tasks}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
