import { useState } from 'react';
import axios from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/account/register/', formData);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-slate-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 font-mono">Register</h2>

        <div>
          <label className="block text-gray-600 text-sm mb-1">First Name</label>
          <input
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Last Name</label>
          <input
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Username</label>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
