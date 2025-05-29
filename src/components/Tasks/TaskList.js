import { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/task/tasks/');
        setTasks(response.data.data);
      } catch (err) {
        console.error('Fetching tasks failed');
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;