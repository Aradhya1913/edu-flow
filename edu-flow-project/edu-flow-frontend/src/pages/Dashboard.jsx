import React, { useEffect, useState } from 'react';
import API from '../api';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await API.get(`/session/user/${user._id}`);
        setLogs(res.data);
      } catch (err) {
        console.error('Error fetching logs', err);
      }
    };
    fetchLogs();
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Session Logs</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Emotion</th>
            <th className="p-2 border">Engagement</th>
            <th className="p-2 border">Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id} className="text-center">
              <td className="p-2 border">{log.emotion}</td>
              <td className="p-2 border">{log.engagement}</td>
              <td className="p-2 border">{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;