/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Deep dive into circular packaging, carbon offsets, and regenerative green chemistry.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaLeaf, FaRecycle, FaTree, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SustainabilityPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Sustainability & Regenerative Pledge" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Regenerative Earth Pledge
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-6">
                    Restoring The Planet Through Conscious Skincare
                </h1>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    At Aura Botanics, sustainability is not an afterthought or marketing angle. It is the fundamental blueprint designed by Ahsan Sheikh that guides every choice we make—from soil to shelf.
                </p>
            </div>

            {/* Image Banner */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"
                        alt="Pure Living Botanicals"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-14 text-white">
                        <span className="text-xs uppercase tracking-widest text-[#a3c9a8] font-bold mb-1">Our Living Standard</span>
                        <h2 className="font-serif text-3xl sm:text-4xl">100% Recycled & Compostable Lifecycle</h2>
                    </div>
                </div>
            </div>

            {/* Four Detailed Pillars */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl mb-6">
                            <FaRecycle />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Biophotonic Glass</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Plastic leaching has no place in your body. We encase our active serums exclusively in Swiss-manufactured violet glass that acts as a natural filter, blocking the degrading spectrum of visible light while permitting beneficial ultraviolet rays to preserve nutrient potency.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl mb-6">
                            <FaTree />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">One Order, One Tree</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Through our ongoing partnership with global reforestation collectives, we plant a verified native biodiverse tree for every single purchase. To date, the Aura Botanics community has planted over 45,000 trees across degraded ecosystems.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl mb-6">
                            <FaLeaf />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Zero-Water Formulations</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Rather than diluting our products with municipal tap water, we use pure organic aloe barbadensis leaf juice and steam-distilled floral waters (hydrosols) as our formulation base, maximizing cellular efficacy and preserving planetary freshwater resources.
                        </p>
                    </div>
                </div>

                <div className="bg-[#192b23] text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-xl">
                    <span className="text-xs uppercase tracking-widest text-[#a3c9a8] font-bold block mb-2">
                        Ethical Commitment
                    </span>
                    <h3 className="font-serif text-3xl mb-4 font-normal">
                        Experience The Clean Beauty Standard
                    </h3>
                    <p className="text-xs text-[#b5c7bc] max-w-lg mx-auto mb-8 leading-relaxed">
                        Every dollar you invest in Aura Botanics supports organic family farms, fair-trade harvesters, and zero-emission delivery logistics.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block px-8 py-3 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    >
                        Explore Conscious Formulations →
                    </Link>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default SustainabilityPage;
