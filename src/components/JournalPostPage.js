/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Dynamic journal article reader rendering editorial content, quotes,
 * related products, and author footprint.
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from './JournalHubPage';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaClock, FaUser, FaLeaf, FaArrowLeft, FaShareAlt } from 'react-icons/fa';

const JournalPostPage = () => {
    const { slug } = useParams();

    const article = articlesData.find((a) => a.slug === slug) || articlesData[0];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-4xl mx-auto px-6">
                    <BreadCrumb name={article.title} />
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Back to Hub Link */}
                <Link
                    to="/journal"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2b4c3e] font-semibold mb-6 hover:underline"
                >
                    <FaArrowLeft /> Back to All Journal Articles
                </Link>

                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 text-xs text-[#2b4c3e] font-semibold tracking-wider uppercase mb-3">
                        <span className="bg-emerald-100/70 px-3 py-1 rounded-full">{article.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-gray-500">
                            <FaClock className="text-[10px]" /> {article.readTime}
                        </span>
                        <span>•</span>
                        <span className="text-gray-500">{article.date}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162720] font-normal tracking-wide leading-tight mb-4">
                        {article.title}
                    </h1>

                    <p className="text-lg text-gray-600 font-serif italic leading-relaxed">
                        {article.subtitle}
                    </p>

                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                        <div className="w-10 h-10 rounded-full bg-[#192b23] text-[#a3c9a8] flex items-center justify-center font-serif text-sm">
                            AS
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-900 block">{article.author}</span>
                            <span className="text-[11px] text-gray-500">Founder & Botanical Formulator • Aura Botanics</span>
                        </div>
                    </div>
                </div>

                {/* Hero Featured Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl mb-12 max-h-[480px]">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Body */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
                    <p className="text-lg font-serif text-gray-800 leading-relaxed border-l-2 border-[#2b4c3e] pl-4 italic">
                        {article.excerpt}
                    </p>

                    <h2 className="text-2xl font-serif text-[#162720] font-semibold pt-4">
                        The Core Philosophy of Botanical Synergy
                    </h2>
                    <p>
                        Human skin is a living, breathing ecosystem with an intrinsic acid mantle and microbial balance. When synthetic chemicals, artificial surfactants, and heavy silicones are applied, they may provide an immediate superficial slip, but over time they degrade intercellular lipids. Pure cold-pressed botanicals, by contrast, possess fatty acid profiles that mirror our skin's own sebum.
                    </p>

                    <h3 className="text-xl font-serif text-[#162720] font-semibold pt-2">
                        Step 1: Gentle Cleansing Without Stripping Moisture
                    </h3>
                    <p>
                        Begin every ritual with lukewarm spring water and a sulfate-free botanical cleanser. Avoid aggressively foaming detergents that strip essential moisture. Massaging your cleanser into damp skin for 60 seconds activates micro-circulation and softens congested pores.
                    </p>

                    <div className="p-6 bg-emerald-50/70 rounded-2xl border border-emerald-100 my-8">
                        <span className="text-xs uppercase tracking-widest text-[#2b4c3e] font-bold block mb-1">
                            🌿 Apothecary Herbalist Tip
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                            Always mist your face with a botanical floral hydrosol (such as organic Rosewater or Chamomile) while your skin is still damp from cleansing, and press your oil or serum immediately on top to lock in true deep hydration.
                        </p>
                    </div>

                    <h3 className="text-xl font-serif text-[#162720] font-semibold pt-2">
                        Step 2: Bio-Available Active Serums
                    </h3>
                    <p>
                        Apply concentrated active botanicals like cold-pressed Kakadu Plum Vitamin C and Bakuchiol before denser creams. These water-soluble and lightweight lipid molecules penetrate deeply to stimulate collagen synthesis and fight atmospheric free radicals.
                    </p>

                    <h3 className="text-xl font-serif text-[#162720] font-semibold pt-2">
                        Step 3: Sealing The Moisture Barrier
                    </h3>
                    <p>
                        Complete the sequence with three drops of cold-pressed Rosehip or Jojoba elixir. By layering from lightest molecular weight to richest, each active ingredient is sealed safely beneath a protective lipid barrier.
                    </p>

                    {/* Author Box */}
                    <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-[#192b23] text-[#a3c9a8] flex items-center justify-center font-serif text-xl font-bold flex-shrink-0">
                            AS
                        </div>
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#2b4c3e] font-bold block mb-1">Written By</span>
                            <h4 className="font-serif text-lg font-bold text-gray-900">Ahsan Sheikh</h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                Founder, lead engineer, and green chemistry advocate at Aura Botanics. Dedicated to transparent, ethical skincare formulations and accessible web engineering.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
                    <Link
                        to="/journal"
                        className="text-xs uppercase tracking-wider text-[#2b4c3e] font-bold hover:underline"
                    >
                        ← Back to Journal Index
                    </Link>
                    <Link
                        to="/shop"
                        className="px-6 py-2.5 rounded-full bg-[#1a2e26] text-white text-xs font-semibold tracking-wider hover:bg-[#2b4c3e] transition-colors"
                    >
                        Shop Featured Formulations →
                    </Link>
                </div>
            </article>

            <SPFooter />
        </div>
    );
};

export default JournalPostPage;
