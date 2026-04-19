import React from 'react'
import { Link } from 'react-router'

const Friend = ({ friend }) => {
    return (
        <Link to={`friends/${friend.id}`}
            key={friend.id}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
        >
            <div className="relative mb-4">
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
                />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
            <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags?.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-[#e8f5e9] text-[#4caf50] text-xs font-bold uppercase rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-auto w-full">
                <span className={`inline-block w-full py-2 rounded-full text-white text-xs font-bold uppercase ${friend.status === 'overdue' ? 'bg-[#ff5252]' :
                    friend.status === 'on track' ? 'bg-[#2e7d32]' :
                        'bg-[#ff9800]'
                    }`}>
                    {friend.status}
                </span>
            </div>
        </Link>
    )
}

export default Friend
