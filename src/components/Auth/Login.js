import { useState } from 'react';
import axios from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('/account/login/', formData);
        console.log(response.data.data);
        
        const { access, refresh } = response.data.data.token;
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
        navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-slate-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 font-mono">Login</h2>

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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;