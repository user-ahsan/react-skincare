/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Press room showcasing editorial features in Vogue, Elle, media kit, and press releases.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaQuoteLeft, FaDownload, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

const pressFeatures = [
    {
        publication: "Vogue",
        date: "October 2026",
        quote: "Aura Botanics sets the gold standard for clean skincare. Ahsan Sheikh’s dedication to waterless formulation and cold-pressed botanical integrity is redefining modern eco-luxury.",
        articleTitle: "The 10 Clean Skincare Brands That Actually Transform Cellular Texture",
        author: "Sophie Dahl, Senior Beauty Editor"
    },
    {
        publication: "Harper's Bazaar",
        date: "September 2026",
        quote: "Housed in German biophotonic violet glass, this is uncompromising apothecary craftsmanship. Their Kakadu Plum and Blue Tansy elixirs belong in every discerning medicine cabinet.",
        articleTitle: "Eco-Luxe: The Rise of Ultra-Pure Waterless Botanical Chemistry",
        author: "Camille Laurent, Executive Beauty Director"
    },
    {
        publication: "Elle Magazine",
        date: "July 2026",
        quote: "Forget synthetic fillers. Aura Botanics delivers clinical potency with zero parabens, sulfates, or microplastics. Our editors voted their Overnight Ceramide Oil product of the year.",
        articleTitle: "The Best Botanical Serums and Restorative Rituals of 2026",
        author: "Maya Chen, Global Wellness Lead"
    },
    {
        publication: "Vanity Fair",
        date: "May 2026",
        quote: "Founder Ahsan Sheikh proves that sustainability and high luxury are not mutually exclusive. A stunning triumph of circular packaging and certified wild harvesting.",
        articleTitle: "The Innovators: Who Is Changing the Face of Green Luxury?",
        author: "Julian Vance"
    }
];

const releases = [
    {
        date: "October 18, 2026",
        title: "Aura Botanics Achieves Certified Carbon-Negative Milestone Across All Global Supply Routes",
        desc: "Partnering with global reforestation trusts to plant 2 mangrove trees for every ritual order placed worldwide."
    },
    {
        date: "August 24, 2026",
        title: "Aura Botanics Expands Physical Footprint with Flagship Ateliers in London Mayfair and Tokyo Ginza",
        desc: "New sensory sanctuaries feature interactive custom oil blending bars, bottle refill programs, and herbal skin diagnostics."
    },
    {
        date: "April 12, 2026",
        title: "Founder Ahsan Sheikh Announces 100% Transition to German Biophotonic Miron Violet Glass",
        desc: "Patented amber and violet glassware completely blocks destructive visible light while admitting beneficial infrared wavelengths."
    }
];

const PressPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Press Room & Media" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Editorial Coverage
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        In The Press
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Read what international beauty editors, green scientists, and wellness publications have to say about founder Ahsan Sheikh and the Aura Botanics collection.
                    </p>
                </div>

                {/* Featured Quotes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {pressFeatures.map((p, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-serif text-2xl font-bold tracking-widest text-[#192b23] uppercase">
                                        {p.publication}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">{p.date}</span>
                                </div>
                                <FaQuoteLeft className="text-[#a3c9a8] text-2xl mb-4" />
                                <p className="font-serif text-base text-gray-800 italic leading-relaxed mb-6">
                                    "{p.quote}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                                <div>
                                    <strong className="block text-black">{p.articleTitle}</strong>
                                    <span>{p.author}</span>
                                </div>
                                <FaExternalLinkAlt className="text-gray-400 text-[10px]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Press Releases */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm mb-16">
                    <span className="text-xs uppercase tracking-widest text-[#2b4c3e] font-bold block mb-1">
                        Corporate News
                    </span>
                    <h2 className="text-2xl font-serif text-[#162720] mb-8">Official Press Releases</h2>

                    <div className="space-y-6">
                        {releases.map((rel, i) => (
                            <div key={i} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-1">
                                    {rel.date}
                                </span>
                                <h3 className="text-lg font-serif text-[#162720] mb-1 font-semibold hover:text-[#2b4c3e] cursor-pointer">
                                    {rel.title}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{rel.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Media Kit & Inquiries Banner */}
                <div className="bg-[#192b23] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-serif mb-2">Media & Press Inquiries</h3>
                        <p className="text-xs text-[#b8cfbf] max-w-lg leading-relaxed">
                            For interview requests with founder Ahsan Sheikh, high-resolution campaign photography, product sampling requests, or our official media kit.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <a
                            href="mailto:ahsansheikhoffice@gmail.com"
                            className="px-6 py-3 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                        >
                            <FaEnvelope /> Contact PR Concierge
                        </a>
                        <a
                            href="#download"
                            onClick={(e) => { e.preventDefault(); alert("Media Kit PDF pack scheduled for download."); }}
                            className="px-6 py-3 rounded-full border border-[#a3c9a8] text-[#a3c9a8] hover:text-white hover:border-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
                        >
                            <FaDownload /> Media Kit (ZIP)
                        </a>
                    </div>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default PressPage;

