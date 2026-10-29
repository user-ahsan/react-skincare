/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Deep storytelling section on cold-pressed extraction, waterless formulas, and violet glass.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaFlask, FaSun, FaRecycle, FaArrowRight } from 'react-icons/fa';

const pillars = [
    {
        icon: FaLeaf,
        title: "Cold-Pressed & Unrefined",
        desc: "Virgin seed oils and floral hydrosols extracted strictly beneath 35°C to preserve fragile vitamins and living enzymes intact."
    },
    {
        icon: FaFlask,
        title: "Waterless Green Potency",
        desc: "We never dilute with cheap purified tap water. Our active bases consist 100% of organic aloe vera juice and distilled floral water."
    },
    {
        icon: FaSun,
        title: "Biophotonic Glass Shield",
        desc: "Stored exclusively in German violet glass bottles that block the damaging visible spectrum while admitting revitalizing infrared light."
    },
    {
        icon: FaRecycle,
        title: "Closed-Loop Bottle Refills",
        desc: "Return your empty amber and violet glassware at any of our 5 global flagship boutiques for a complimentary $10 ritual credit."
    }
];

const ApothecaryCraftSection = () => {
    return (
        <section className="py-20 bg-[#f7f5ef] border-t border-[#e8e2d5]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        The Science of Pure Plants
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                        Apothecary Craftsmanship by Ahsan Sheikh
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Conventional cosmetics rely on 80% tap water, petroleum binders, and synthetic chemical preservatives. We threw out that blueprint to craft concentrated, living food for human cells.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
                    {pillars.map((pil, idx) => {
                        const Icon = pil.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl p-8 border border-[#e5dfd3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#f4f7f4] border border-[#d6e5da] flex items-center justify-center text-[#2b4c3e] text-xl mb-6">
                                        <Icon />
                                    </div>
                                    <h3 className="font-serif text-xl text-[#162720] mb-2 font-semibold">
                                        {pil.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {pil.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link
                        to="/sustainability"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md group"
                    >
                        Read Our Full Sustainability Charter <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ApothecaryCraftSection;

