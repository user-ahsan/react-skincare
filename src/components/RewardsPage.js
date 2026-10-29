/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description VIP Botanical Circle loyalty rewards tier system with interactive points calculator.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaCrown, FaLeaf, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const tiers = [
    {
        name: "Seedling Member",
        requirement: "Free to Join Upon Account Creation",
        pointsMultiplier: "1 Point per $1 Spent",
        color: "border-gray-200 bg-white",
        badge: "Tier 1",
        perks: [
            "50 Welcome Bonus Points upon signup",
            "Annual Birthday botanical surprise discount",
            "Exclusive invitations to seasonal journal drops",
            "Access to member-only formulation archives"
        ]
    },
    {
        name: "Blossom Patron",
        requirement: "$250 Annual Spend",
        pointsMultiplier: "1.25 Points per $1 Spent",
        color: "border-[#a3c9a8] bg-[#f7faf7]",
        badge: "Tier 2",
        featured: true,
        perks: [
            "Everything in Seedling Tier",
            "Free Carbon-Neutral Express Shipping on all orders",
            "24-Hour Early Access to limited apothecary batch releases",
            "Full-size complimentary birthday gift shipped to your door",
            "Seasonal deluxe travel size miniatures"
        ]
    },
    {
        name: "Apothecary Gold",
        requirement: "$500+ Annual Spend",
        pointsMultiplier: "1.5 Points per $1 Spent",
        color: "border-[#192b23] bg-[#192b23] text-white",
        badge: "VIP Tier",
        perks: [
            "Everything in Blossom Tier",
            "Complimentary 1-on-1 virtual botanical diagnostic consultation",
            "Handcrafted custom-engraved Miron violet glass vessel",
            "Free international expedited shipping worldwide",
            "Personal VIP Concierge direct hotline access"
        ]
    }
];

const RewardsPage = () => {
    const [pointsSpend, setPointsSpend] = useState(150);
    const [joined, setJoined] = useState(false);
    const [email, setEmail] = useState('');

    const calculatedReward = Math.floor(pointsSpend / 10); // $10 per 100 points

    const handleJoin = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setJoined(true);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Botanical Circle VIP Rewards" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        The Loyalty Program
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        The Botanical Circle
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Earn points with every cold-pressed purchase, unlock bespoke ritual gifts, and enjoy complimentary carbon-neutral shipping worldwide.
                    </p>
                </div>

                {/* Tier Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {tiers.map((t, i) => (
                        <div
                            key={i}
                            className={`rounded-3xl p-8 border shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 ${t.color}`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                                        {t.badge}
                                    </span>
                                    <FaCrown className={t.name.includes("Gold") ? "text-amber-300 text-xl" : "text-[#2b4c3e] text-xl"} />
                                </div>

                                <h3 className={`text-2xl font-serif mb-1 ${t.name.includes("Gold") ? "text-white" : "text-[#162720]"}`}>
                                    {t.name}
                                </h3>
                                <p className={`text-xs font-semibold mb-3 ${t.name.includes("Gold") ? "text-[#a3c9a8]" : "text-[#2b4c3e]"}`}>
                                    {t.requirement}
                                </p>
                                <p className={`text-xs mb-6 ${t.name.includes("Gold") ? "text-gray-300" : "text-gray-500"}`}>
                                    Earning rate: <strong className={t.name.includes("Gold") ? "text-white" : "text-black"}>{t.pointsMultiplier}</strong>
                                </p>

                                <ul className="space-y-3 text-xs mb-8">
                                    {t.perks.map((p, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <FaCheck className={`text-[10px] mt-1 shrink-0 ${t.name.includes("Gold") ? "text-emerald-400" : "text-emerald-600"}`} />
                                            <span className={t.name.includes("Gold") ? "text-gray-200" : "text-gray-600"}>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/shop"
                                className={`w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold text-center transition-all ${
                                    t.name.includes("Gold")
                                        ? "bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c]"
                                        : "bg-[#1a2e26] hover:bg-[#2b4c3e] text-white"
                                }`}
                            >
                                Shop To Earn
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Interactive Points Calculator */}
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d5] shadow-sm mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-xs uppercase tracking-widest text-[#2b4c3e] font-bold block mb-1">
                            Interactive Calculator
                        </span>
                        <h2 className="text-3xl font-serif text-[#162720] mb-4">
                            Calculate Your Ritual Rewards
                        </h2>
                        <p className="text-gray-600 text-xs mb-8">
                            Slide to estimate points earned on your next haul and discover the cash credit you will receive toward future botanical orders.
                        </p>

                        <div className="mb-6">
                            <label className="text-xs font-semibold uppercase text-gray-500 block mb-2">
                                Planned Ritual Spend: <strong className="text-black text-lg">${pointsSpend}</strong>
                            </label>
                            <input
                                type="range"
                                min="25"
                                max="500"
                                step="25"
                                value={pointsSpend}
                                onChange={(e) => setPointsSpend(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2b4c3e]"
                            />
                            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                                <span>$25</span>
                                <span>$250</span>
                                <span>$500+</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-[#f4f7f4] p-6 rounded-2xl border border-[#d8e6db]">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 block">Points Earned</span>
                                <span className="text-3xl font-serif font-bold text-[#192b23]">{pointsSpend} pts</span>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 block">Reward Cash Voucher</span>
                                <span className="text-3xl font-serif font-bold text-[#2b4c3e]">${calculatedReward}.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join The Circle Signup */}
                <div className="bg-[#192b23] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
                    <FaLeaf className="mx-auto text-[#a3c9a8] text-3xl mb-3" />
                    <h3 className="text-3xl font-serif mb-2">Join The Botanical Circle Today</h3>
                    <p className="text-xs text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
                        Create an account or enter your email to receive an instant <strong className="text-white">50 bonus points</strong> and unlock our members-only seasonal archive.
                    </p>

                    {joined ? (
                        <div className="p-4 bg-emerald-800 text-emerald-100 rounded-xl max-w-md mx-auto text-xs">
                            <FaCheck className="inline mr-2" /> Welcome to The Circle! 50 bonus points credited. Use code <span className="underline font-bold">AHSAN20</span> on your next order!
                        </div>
                    ) : (
                        <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-5 py-3 rounded-full bg-[#122019] border border-[#2e4d3f] text-white text-xs placeholder-gray-400 focus:outline-none focus:border-[#a3c9a8]"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs font-bold uppercase tracking-widest shadow-md transition-all"
                            >
                                Enroll Now
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default RewardsPage;
