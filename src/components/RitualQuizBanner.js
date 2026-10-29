/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Promotional editorial banner inviting visitors to discover their bespoke 3-step routine.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaMagic } from 'react-icons/fa';

const RitualQuizBanner = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 my-16">
            <div className="rounded-3xl bg-gradient-to-r from-[#192b23] via-[#21382e] to-[#122019] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-[#2b4c3e] flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#a3c9a8]/10 blur-3xl pointer-events-none" />

                <div className="max-w-xl text-center lg:text-left relative z-10">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#a3c9a8] font-bold flex items-center justify-center lg:justify-start gap-2 mb-3">
                        <FaMagic className="text-xs" /> Bespoke Apothecary Diagnostics
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-tight mb-3">
                        Find Your Ideal Botanical Skincare & Scalp Sequence
                    </h2>
                    <p className="text-xs sm:text-sm text-[#b8cfbf] leading-relaxed mb-6">
                        Take our 60-second diagnostic formulated by founder Ahsan Sheikh. Receive an individualized 3-step ritual prescribed specifically for your climate and barrier biology — plus an instant 15% bundle saving.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <Link
                            to="/quiz"
                            className="px-8 py-3.5 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all transform active:scale-95"
                        >
                            Start The Ritual Quiz <FaArrowRight className="text-[10px]" />
                        </Link>
                        <Link
                            to="/ingredients"
                            className="text-xs text-[#a3c9a8] hover:text-white underline underline-offset-4 transition-colors font-medium"
                        >
                            Explore Botanical Science →
                        </Link>
                    </div>
                </div>

                {/* Right Visual Badge */}
                <div className="relative z-10 shrink-0 w-full lg:w-80 p-6 rounded-2xl bg-[#22392f]/80 border border-[#2e4d3f] text-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-[#a3c9a8]/20 flex items-center justify-center mx-auto mb-3 text-[#a3c9a8] text-2xl">
                        <FaLeaf />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1">Cold-Pressed Precision</h3>
                    <p className="text-[11px] text-gray-300 leading-relaxed mb-4">
                        Micro-batch formulated with wild Kakadu plum, blue tansy, and bioactive bakuchiol.
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#122019] text-[#a3c9a8] text-[10px] uppercase tracking-wider font-semibold">
                        Over 24,000+ Rituals Prescribed
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RitualQuizBanner;

