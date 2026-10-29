/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Hero brand values and pillars showcase with pure botanical guarantees.
 */

import React from 'react';
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

const HeroSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] py-20 px-6 border-b border-[#ece7de]">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                    Apothecary Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162720] tracking-wide mb-5">
                    WELCOME TO AURA BOTANICS
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
                    The conscious luxury skincare house setting a transformative standard. Handcrafted organic formulations engineered to restore your natural glow and awaken cellular vitality.
                </p>
            </div>

            {/* 3 Pillars Grid: Perfectly Centered with Zero Overlap */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e2d5] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#f4f1ea] flex items-center justify-center mb-5 shadow-inner">
                        <img src={one} className="w-12 h-12 object-contain" alt="Powered By Nature" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1a2e26] mb-2">
                        Powered By Nature
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        100% certified organic, cold-pressed botanicals and wild herbs formulated in small artisan batches.
                    </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e2d5] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#f4f1ea] flex items-center justify-center mb-5 shadow-inner">
                        <img src={two} className="w-12 h-12 object-contain" alt="Clinical Plant Efficacy" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1a2e26] mb-2">
                        Clinical Plant Efficacy
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Dermatologist-approved skin barrier repair without synthetic fillers, endocrine disruptors, or sulfates.
                    </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e2d5] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#f4f1ea] flex items-center justify-center mb-5 shadow-inner">
                        <img src={three} className="w-12 h-12 object-contain" alt="Biophotonic Purity" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1a2e26] mb-2">
                        Biophotonic Purity
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Packaged in 100% recyclable biophotonic violet glass to protect light-sensitive phyto-actives.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
