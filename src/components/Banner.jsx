import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Banner = () => {
    return (
        <section className="bg-[#f8f9fa] min-h-[400px] flex items-center justify-center px-4 py-20">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b3b] tracking-tight mb-6">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="inline-flex items-center gap-2 bg-[#2d4f43] hover:bg-[#243f35] text-white px-8 py-3 rounded-md font-medium transition-all duration-200 shadow-sm">
                    <AiOutlinePlus className="text-xl" />
                    Add a Friend
                </button>
            </div>
        </section>
    );
};

export default Banner;