import React, { useState } from 'react';
import API from '../api';

const SessionLogger = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({ emotion: 'focused', engagement: 0.8 });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/session/log', {
        userId: user._id,
        ...form,
        timestamp: new Date().toISOString()
      });
      setMessage('Session logged successfully!');
    } catch {
      setMessage('Logging failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Log Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={form.emotion} onChange={(e) => setForm({ ...form, emotion: e.target.value })} className="w-full border p-2">
          <option value="focused">Focused</option>
          <option value="confused">Confused</option>
          <option value="frustrated">Frustrated</option>
        </select>
        <input type="number" min="0" max="1" step="0.1" value={form.engagement} onChange={(e) => setForm({ ...form, engagement: parseFloat(e.target.value) })} className="w-full border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Log</button>
        <p className="text-green-600">{message}</p>
      </form>
    </div>
  );
};

export default SessionLogger;