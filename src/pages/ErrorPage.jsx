import React from 'react';
import { Link } from 'react-router'; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>

        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold md:text-3xl text-gray-800">
            Oops! the page is not found..
          </p>
          <p className="mt-4 text-gray-500">
            your location is Wrong...
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/"
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;