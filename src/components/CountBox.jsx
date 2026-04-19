import React from 'react';

const CountBox = () => {
  const stats = [
    { label: 'Total Friends', value: '10' },
    { label: 'On Track', value: '3' },
    { label: 'Need Attention', value: '6' },
    { label: 'Interactions This Month', value: '12' },
  ];
  return (
    <div className="bg-gray-50/50 py-10 px-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300"
            >
              <span className="text-4xl font-bold text-[#1a4d3a] mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountBox;