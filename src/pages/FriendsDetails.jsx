import React, { useContext } from 'react';
import useFrinedsHook from '../hooks/useFrinedsHook';
import { useParams } from 'react-router';
import { FriendsContext } from '../context/FriendsContext';
import { HashLoader } from 'react-spinners';
import { FaPhoneAlt, FaCommentDots, FaVideo, FaBellSlash, FaArchive, FaTrashAlt } from 'react-icons/fa';
import call from "../assets/call.png"
import text from "../assets/text.png"
import video from "../assets/video.png"
import { toast } from 'react-toastify';

const FriendsDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFrinedsHook(); // Added ()
  const { interActive, setInterActive } = useContext(FriendsContext);

  const friend = friends?.find((f) => String(f.id) === id);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <HashLoader color="#244D3F" />
      </div>
    );
  }

  if (!friend) return <div className="p-10 text-center">Friend not found.</div>

 const handleInteraction = (type) => {
  const newActivity = {
    id: Date.now(), 
    friendName: friend.name,
    type: type, 
    date: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  };
  setInterActive([newActivity, ...interActive]); 
   toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} logged successfully!`)
};

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200"
            />
            <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
            <div className="flex gap-2 my-2">
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase ${friend.status === 'overdue' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                {friend.status}
              </span>
              {friend.tags.slice(0, 1).map(tag => (
                <span key={tag} className="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-700">
                  {tag}
                </span>
              ))}
            </div>
            <p className="italic text-gray-500 text-sm mt-2">"{friend.bio}"</p>
            <p className="text-gray-400 text-xs mt-4">Preferred: email</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              <FaBellSlash className="text-gray-400" /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              <FaArchive className="text-gray-400" /> Archive
            </button>
            <button className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg border border-gray-200 text-red-500 hover:bg-red-50 transition">
              <FaTrashAlt /> Delete
            </button>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-emerald-900">{friend.days_since_contact}</p>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-4xl font-bold text-emerald-900">{friend.goal}</p>
              <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-emerald-900 mt-2">
                {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <p className="text-gray-500 text-sm mt-2">Next Due</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-emerald-900 text-lg">Relationship Goal</h3>
              <p className="text-gray-600 mt-1">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
            </div>
            <button className="px-4 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Edit</button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-emerald-900 text-lg mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={()=> handleInteraction("call")} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-slate-50 border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
                  <img className="text-2xl text-gray-700 group-hover:text-emerald-700" src={call} alt="call" />
                <span className="text-gray-600 group-hover:text-emerald-700">Call</span>
              </button>
              <button onClick={()=> handleInteraction("text")} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-slate-50 border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
                <img className="text-2xl text-gray-700 group-hover:text-emerald-700" src={text} alt="call" />
                <span className="text-gray-600 group-hover:text-emerald-700">Text</span>
              </button>
              <button onClick={()=> handleInteraction("video")} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-slate-50 border border-transparent hover:border-emerald-200 hover:bg-emerald-50 transition group">
               <img className="text-2xl text-gray-700 group-hover:text-emerald-700" src={video} alt="call" />
                <span className="text-gray-600 group-hover:text-emerald-700">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;