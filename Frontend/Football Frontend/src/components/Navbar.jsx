import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-extrabold tracking-wider text-blue-400">
        ⚽ Football Matches
      </div>
      <ul className="flex gap-6 text-md font-medium">
        <li className="hover:text-blue-400 transition cursor-pointer" onClick={()=>{
          navigate("/");
        }}>Home</li>
        <li className="hover:text-blue-400 transition cursor-pointer">Leagues</li>
        <li className="hover:text-blue-400 transition cursor-pointer" onClick={()=>{
          navigate("/about");
        }}>About</li>
        <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};
