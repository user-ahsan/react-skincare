/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master wellness journal hub showcasing articles, reading times, tags, and search.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaClock, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';

export const articlesData = [
    {
        id: "daily-skincare-ritual",
        slug: "daily-skincare-ritual",
        title: "The 5-Step Morning to Night Botanical Skincare Ritual",
        subtitle: "How to Layer Serums, Hydrosols, and Cold-Pressed Oils for All-Day Barrier Resilience",
        excerpt: "Mastering the order of application is just as vital as the purity of your ingredients. Here is our comprehensive apothecary guide to sequencing botanical hydration and locking in cellular moisture.",
        category: "Rituals",
        readTime: "7 min read",
        author: "Ahsan Sheikh",
        date: "October 2026",
        image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1200&q=80",
        featured: true
    },
    {
        id: "april",
        slug: "april",
        title: "Protective Botanical Haircare: Scalp Health, Elasticity & Seasonal Care",
        subtitle: "Why Purifying the Scalp with Apple Cider Vinegar & Peppermint Unlocks Luscious Locks",
        excerpt: "We often treat our hair shafts while neglecting the biological foundation from which they grow. Learn how follicular stimulation and heat-free rituals restore natural elasticity.",
        category: "Haircare",
        readTime: "6 min read",
        author: "Ahsan Sheikh",
        date: "April 2026",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
        featured: false
    },
    {
        id: "clean-botanical-ingredients",
        slug: "clean-botanical-ingredients",
        title: "Why Pure Cold-Pressed Botanicals Outperform Synthetic Fillers",
        subtitle: "The Science of Living Phytochemicals, Bio-Flavonoids & Lipid Compatibility",
        excerpt: "Explore the biochemistry of why bio-compatible plant lipids naturally integrate into human cell membranes without disrupting the skin's acidic mantle or endocrine system.",
        category: "Green Science",
        readTime: "8 min read",
        author: "Ahsan Sheikh & Botanical Herbalists",
        date: "September 2026",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        featured: false
    },
    {
        id: "sustainable-beauty-routine",
        slug: "sustainable-beauty-routine",
        title: "Zero-Waste Apothecaries: How We Achieve 100% Recyclable Luxury",
        subtitle: "Biophotonic Violet Glass, Mushroom Packaging & Carbon-Neutral Deliveries",
        excerpt: "Luxury does not have to cost the Earth. Discover how Aura Botanics transitioned every single bottle, cap, and shipping mailer into a closed-loop regenerative lifecycle.",
        category: "Sustainability",
        readTime: "5 min read",
        author: "Ahsan Sheikh",
        date: "August 2026",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
        featured: false
    }
];

const JournalHubPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = ["All", "Rituals", "Haircare", "Green Science", "Sustainability"];

    const filteredArticles = articlesData.filter((article) => {
        if (selectedCategory !== "All" && article.category !== selectedCategory) return false;
        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            return (
                article.title.toLowerCase().includes(q) ||
                article.excerpt.toLowerCase().includes(q) ||
                article.category.toLowerCase().includes(q)
            );
        }
        return true;
    });

    const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="The Wellness Journal" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 pt-12 pb-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Aura Botanics Editorial
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                    The Mindful Apothecary Journal
                </h1>
                <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                    Seasonal beauty philosophies, botanical ingredient investigations, and sustainable living guides authored by Ahsan Sheikh and our wellness collective.
                </p>
            </div>

            {/* Featured Article Hero */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="relative h-72 sm:h-96 lg:h-full min-h-[360px] overflow-hidden">
                        <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-4 left-4 bg-[#192b23] text-[#a3c9a8] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow">
                            Editor's Choice
                        </span>
                    </div>

                    <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 text-xs text-[#2b4c3e] font-semibold tracking-wider uppercase mb-3">
                                <span>{featuredArticle.category}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-gray-400 font-normal">
                                    <FaClock className="text-[10px]" /> {featuredArticle.readTime}
                                </span>
                            </div>

                            <Link to={`/journal/${featuredArticle.slug}`}>
                                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#162720] hover:text-[#2b4c3e] transition-colors mb-4">
                                    {featuredArticle.title}
                                </h2>
                            </Link>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {featuredArticle.excerpt}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <span className="text-xs text-gray-500 font-medium">
                                By {featuredArticle.author}
                            </span>
                            <Link
                                to={`/journal/${featuredArticle.slug}`}
                                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1a2e26] hover:text-[#2b4c3e] transition-colors"
                            >
                                Read Full Article <FaArrowRight className="text-[10px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar & Articles Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-[#1a2e26] text-white shadow-sm'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full sm:w-64">
                        <FaSearch className="absolute left-3.5 top-3 text-gray-400 text-xs" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#2b4c3e]"
                        />
                    </div>
                </div>

                {/* Article Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <Link to={`/journal/${article.slug}`} className="block overflow-hidden aspect-[16/10]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>

                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center gap-3 text-xs text-[#2b4c3e] font-semibold tracking-wider uppercase mb-2">
                                        <span>{article.category}</span>
                                        <span>•</span>
                                        <span className="text-gray-400 font-normal">{article.readTime}</span>
                                    </div>

                                    <Link to={`/journal/${article.slug}`}>
                                        <h3 className="font-serif text-xl text-gray-900 font-semibold group-hover:text-[#2b4c3e] transition-colors leading-snug mb-3 line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </Link>

                                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="text-gray-400 font-medium">By {article.author}</span>
                                    <Link
                                        to={`/journal/${article.slug}`}
                                        className="font-bold text-[#1a2e26] hover:text-[#2b4c3e] flex items-center gap-1"
                                    >
                                        Read <FaArrowRight className="text-[9px]" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default JournalHubPage;

