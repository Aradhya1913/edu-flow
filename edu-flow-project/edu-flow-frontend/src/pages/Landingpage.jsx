import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  { title: 'Business Analytics', duration: '2 weeks' },
  { title: 'AutoCAD Electrical', duration: '10 days' },
  { title: 'Embedded System', duration: '2 weeks' },
  { title: 'Data Science', duration: '2 weeks' },
  { title: 'Network Security', duration: '2 weeks' },
  { title: 'Data Analytics', duration: '2 weeks' },
  { title: 'Ethical Hacking', duration: '2 weeks' },
  { title: 'Project Management', duration: '2 weeks' },
  { title: 'CAD/CAM', duration: '2 weeks' },
  { title: 'Cloud Computing', duration: '2 weeks' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="text-xl font-bold text-purple-700 cursor-pointer" onClick={() => navigate('/')}>EduFlow</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer" onClick={() => navigate('/')}>About</li>
          <li className="cursor-pointer" onClick={() => navigate('/dashboard')}>Courses</li>
          <li className="cursor-pointer">Webinars</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Resources</li>
        </ul>
        <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => navigate('/login')}>Login/Signup</button>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Be a Certified Ethical Hacker</h1>
        <p className="mb-4 text-gray-600">Beginners / Intermediate Courses by EduFlow</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded mb-6" onClick={() => navigate('/register')}>Sign-up today</button>

        <div className="flex items-center w-full max-w-xl">
          <input
            type="text"
            placeholder="What do you want to learn..."
            className="flex-grow p-3 border rounded-l"
          />
          <button className="bg-red-500 text-white px-4 py-3 rounded-r" onClick={() => navigate('/dashboard')}>Explore Courses</button>
        </div>
      </section>

      {/* Courses */}
      <section className="px-4 py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8">OUR POPULAR COURSES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="border shadow rounded p-4">
              <div className="h-32 bg-gray-200 mb-3"></div>
              <h3 className="font-semibold mb-1">{course.title}</h3>
              <p className="text-sm text-gray-500">Duration: {course.duration}</p>
              <button className="mt-2 text-red-500 font-medium" onClick={() => navigate('/register')}>Join now</button>
            </div>
          ))}
        </div>
        <p className="text-purple-700 mt-6 underline cursor-pointer" onClick={() => navigate('/dashboard')}>View all Courses</p>
      </section>
    </div>
  );
}
