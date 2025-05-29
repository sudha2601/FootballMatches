import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-10 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About This Project</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Welcome to the <span className="font-semibold text-blue-600">Football Matches App</span> — a project proudly built by <span className="font-semibold text-blue-600">Sudhanshu Songire</span>.
        <br /><br />
        This platform provides live updates of upcoming football fixtures, fetched seamlessly using a public sports API. It combines the power of a <strong>React</strong> frontend with a robust <strong>Express</strong> backend to deliver real-time match data in a clean and intuitive interface.
        <br /><br />
        Styled with <strong>Tailwind CSS</strong> for a modern look and feel, this project demonstrates full-stack development in action.
      </p>
    </div>
  );
};

export default About;
