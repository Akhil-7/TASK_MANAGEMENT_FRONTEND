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
    <div>
      <h2>Dashboard</h2>
      {stats ? (
        <ul>
          <li>Total Tasks: {stats.total_tasks}</li>
          <li>Completed: {stats.completed_tasks}</li>
          <li>Pending: {stats.pending_tasks}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;