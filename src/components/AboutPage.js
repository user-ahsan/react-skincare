/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Brand story, apothecary history, sustainability pledges, and personal
 * founder narrative from Ahsan Sheikh.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaLeaf, FaFlask, FaRecycle, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Our Story & Philosophy" />
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-3">
                    The Origin of Pure Botanicals
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#162720] font-normal tracking-wide leading-tight mb-6">
                    Where Ancient Botanical Wisdom Meets Modern Conscious Luxury
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
                    Aura Botanics was founded with a singular conviction: that skincare should honor both human cellular biology and our living Earth. Every bottle is a testament to uncompromised green chemistry, pure plant potency, and zero synthetic shortcuts.
                </p>
            </div>

            {/* Split Story: Founder & Vision */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
                            alt="Aura Botanics Formulations"
                            className="w-full h-[520px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                            <span className="text-xs uppercase tracking-widest text-[#a3c9a8] font-bold">Apothecary Atelier</span>
                            <h3 className="font-serif text-2xl">Small-batch cold pressing in biophotonic violet glass</h3>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-100/70 text-[#1a2e26] text-xs font-semibold uppercase tracking-wider">
                            Letter From The Founder
                        </div>
                        <h2 className="text-3xl font-serif text-[#162720] leading-snug">
                            "True beauty is never synthetic. It is the radiant byproduct of biological equilibrium."
                        </h2>
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <p>
                                Welcome to Aura Botanics. My name is <strong>Ahsan Sheikh</strong>, and I created this project to unite two of my deepest passions: high-performance, human-centric software architecture and the sublime elegance of organic natural apothecaries.
                            </p>
                            <p>
                                In an industry saturated with chemical fillers, artificial emulsifiers, and deceptive greenwashing, we chose an uncompromising path. Every formulation in our catalog begins in pristine organic soil—harvested at the peak of cellular vitality, cold-pressed without industrial solvents, and stabilized with plant-derived antioxidants.
                            </p>
                            <p>
                                When you interact with our digital boutique, you are experiencing a complete, ready-to-ship modern React platform engineered with performance, accessibility, and aesthetic harmony at its core. Thank you for walking this conscious journey with us.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                            <div>
                                <span className="font-serif font-bold text-gray-900 text-lg block">Ahsan Sheikh</span>
                                <span className="text-xs text-gray-500 tracking-wider uppercase">Founder & Lead Engineer • ahsansheikhoffice@gmail.com</span>
                            </div>
                            <Link to="/shop" className="text-xs uppercase font-bold tracking-wider text-[#2b4c3e] hover:underline">
                                Browse The Collection →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="bg-[#192b23] text-white py-20 mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#a3c9a8] font-bold block mb-2">Our Standard</span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-normal">The Aura Botanics Golden Promise</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#22392f] p-8 rounded-2xl border border-[#2e4c3e] flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#2b4c3e] flex items-center justify-center text-[#a3c9a8] text-xl mb-6">
                                    <FaLeaf />
                                </div>
                                <h3 className="font-serif text-xl mb-3">100% Certified Organic</h3>
                                <p className="text-xs text-[#b5c7bc] leading-relaxed">
                                    Zero synthetic pesticides, parabens, sulfates, silicones, or phthalates. Pure unadulterated cold-pressed nourishment.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#22392f] p-8 rounded-2xl border border-[#2e4c3e] flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#2b4c3e] flex items-center justify-center text-[#a3c9a8] text-xl mb-6">
                                    <FaRecycle />
                                </div>
                                <h3 className="font-serif text-xl mb-3">Zero-Waste Packaging</h3>
                                <p className="text-xs text-[#b5c7bc] leading-relaxed">
                                    Packaged exclusively in 100% recyclable biophotonic ultraviolet glass to protect sensitive botanicals without plastic leaching.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#22392f] p-8 rounded-2xl border border-[#2e4c3e] flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#2b4c3e] flex items-center justify-center text-[#a3c9a8] text-xl mb-6">
                                    <FaFlask />
                                </div>
                                <h3 className="font-serif text-xl mb-3">Clinical Plant Science</h3>
                                <p className="text-xs text-[#b5c7bc] leading-relaxed">
                                    Every formula undergoes rigorous third-party dermatological testing to guarantee deep barrier repair and high bio-availability.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#22392f] p-8 rounded-2xl border border-[#2e4c3e] flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#2b4c3e] flex items-center justify-center text-[#a3c9a8] text-xl mb-6">
                                    <FaAward />
                                </div>
                                <h3 className="font-serif text-xl mb-3">Carbon-Neutral Journey</h3>
                                <p className="text-xs text-[#b5c7bc] leading-relaxed">
                                    For every order shipped, Aura Botanics funds verified reforestation projects through Ecologi to ensure our footprint is strictly positive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Statistics */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <span className="font-serif text-4xl sm:text-5xl text-[#1a2e26] font-bold block mb-1">50K+</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Radiant Customers</span>
                    </div>
                    <div>
                        <span className="font-serif text-4xl sm:text-5xl text-[#1a2e26] font-bold block mb-1">100%</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Cruelty-Free & Vegan</span>
                    </div>
                    <div>
                        <span className="font-serif text-4xl sm:text-5xl text-[#1a2e26] font-bold block mb-1">0%</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Synthetic Fragrances</span>
                    </div>
                    <div>
                        <span className="font-serif text-4xl sm:text-5xl text-[#1a2e26] font-bold block mb-1">1:1</span>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Tree Planted Per Order</span>
                    </div>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default AboutPage;
