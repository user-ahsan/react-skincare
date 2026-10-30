import React from 'react'
import { AiFillStar } from "react-icons/ai"
import feel from "../assets/feel.png";


const Review1 = (props) => {
    const starCalc = props.starCalc || 5;
    const reviewes = props.rev || 384;
    const oneDigit = Math.floor(Math.random() * 10);

    return (
        <div className="max-w-4xl mx-auto my-12 px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-xs uppercase tracking-widest text-[#2b4c3e] font-bold mb-1">Customer Experience</span>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Skin Feel & Texture Rating</h3>
                    <p className="text-xs text-gray-500 max-w-sm">98% of surveyed verified customers reported visibly nourished, deeply hydrated skin within 14 days of ritual use.</p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-serif font-bold text-gray-900">{starCalc}.{oneDigit}</span>
                        <div className="flex text-amber-500 text-lg my-1">
                            {Array.from({ length: starCalc }).map((_, i) => (
                                <AiFillStar key={i} />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{reviewes} Verified Reviews</span>
                    </div>

                    <div className="hidden sm:block">
                        <img src={feel} alt="Customer feel feedback" className="w-44 rounded-xl shadow-sm object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review1