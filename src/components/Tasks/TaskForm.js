import { useState } from 'react';
import axios from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', due_date: '', status: '', priority: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/task/tasks/', formData);
      navigate('/tasks');
    } catch (err) {
      alert('Failed to create task');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-slate-200 p-4">
    <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg p-8 space-y-4"
      >
      <h2 className="text-2xl font-bold text-center text-gray-800 font-mono">Add Task</h2>
      <div>
          <label className="block text-gray-600 text-sm mb-1">Title</label>
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">Description</label>
          <textarea name="description" placeholder="Description" onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">Due Date</label>
          <input
            name="due_date"
            type="date"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Status</label>

      <select name="status" onChange={handleChange} required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      </div>
      
      <div>
          <label className="block text-gray-600 text-sm mb-1">Priority</label>
      <select name="priority" onChange={handleChange} required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">Create Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
