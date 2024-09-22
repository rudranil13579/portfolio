import React from 'react';
import logo from '../assets/logo.png'; // Assuming the path is correct for Vite

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30 shadow-md z-50">
      
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center pl-4">
            <div className="gradient-border rounded-full">
              <img 
                className="h-8 w-8 rounded-full"
                src={logo} 
                alt="Logo" 
              />
            </div>
          </div>
          <div className="flex items-center space-x-6 sm:space-x-8">
            {['Projects', 'About', 'Contacts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                  hover:text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium 
                  transition-all duration-300 ease-in-out bg-clip-text hover:bg-clip-padding
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      
      <style jsx>{`
        .gradient-border {
          position: relative;
          padding: 1px;
          background: linear-gradient(to right, #e5e7eb, #e5e7eb);
          background-clip: padding-box;
          transition: background 0.3s ease;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          z-index: -1;
          margin: -1px;
          border-radius: inherit;
          background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gradient-border:hover::before {
          opacity: 1;
        }
        .gradient-border:hover {
          background: transparent;
        }
        @keyframes animatedgradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-border:hover::before {
          animation: animatedgradient 3s ease alternate infinite;
          background-size: 300% 300%;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;