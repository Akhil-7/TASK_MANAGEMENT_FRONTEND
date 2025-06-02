import { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig';

const statusOptions = ['Pending', 'In Progress', 'Completed'];

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

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await axios.patch(`/task/tasks/${taskId}/`, { status: newStatus });
      setTasks(prev =>
        prev.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      console.error('Failed to update task status');
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 border-b pb-2">
          Task List
        </h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map(task => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h3>
                <p className="font-semibold text-gray-800 mb-2">{task.description}</p>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600">Current Status: {task.status}</label>
                  <select
                    value={task.status}
                    onChange={e => handleStatusChange(task.id, e.target.value)}
                    className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {statusOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
