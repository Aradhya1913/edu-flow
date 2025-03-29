import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" />
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default Register;