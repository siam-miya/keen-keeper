import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendsContext';
import { FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';

const Timeline = () => {
  const { interActive } = useContext(FriendsContext);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <FaPhoneAlt className="text-gray-600" />;
      case 'Text': return <FaCommentDots className="text-gray-600" />;
      case 'Video': return <FaVideo className="text-gray-600" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Timeline</h2>
      
      <div className="mb-6">
        <select className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg p-2 outline-none">
          <option>Filter timeline</option>
          <option>call</option>
          <option>text</option>
          <option>video</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        {interActive.length === 0 ? (
          <p className="text-gray-400 text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
            No interactions yet.
          </p>
        ) : (
          interActive.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-slate-100 p-3 rounded-md">
                {getIcon(item.type)}
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  <span className="font-bold">{item.type}</span> with {item.friendName}
                </p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;