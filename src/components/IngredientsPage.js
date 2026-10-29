/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master ingredients encyclopedia detailing bio-actives, cold-pressed extraction, and botanical science.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaLeaf, FaSearch, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const botanicals = [
    {
        name: "Kakadu Plum Extract",
        botanicalName: "Terminalia ferdinandiana",
        origin: "Kimberley Wild Harvest, Australia",
        benefitCategory: "Brightening",
        keyActive: "Vitamin C (55x higher than Florida Oranges) + Gallic Acid",
        description: "The world's richest known natural source of bio-available Vitamin C. Protects cellular DNA against oxidative photodamage and stimulates natural collagen synthesis without acidity irritation.",
        linkToCategory: "/shop?search=plum"
    },
    {
        name: "Moroccan Blue Tansy",
        botanicalName: "Tanacetum annuum",
        origin: "Atlas Mountain Foothills, Morocco",
        benefitCategory: "Soothing",
        keyActive: "Chamazulene & Sabinene",
        description: "Deep indigo essential oil containing high concentrations of chamazulene, renowned for its extraordinary ability to calm angry flare-ups, soothe eczema, and reduce inflammatory erythema.",
        linkToCategory: "/shop?search=tansy"
    },
    {
        name: "Cold-Pressed Rosehip Seed Oil",
        botanicalName: "Rosa canina",
        origin: "Patagonia Wild Highlands, Chile",
        benefitCategory: "Anti-Aging",
        keyActive: "All-Trans Retinoic Acid & Omega 3-6-9 Fatty Acids",
        description: "Unrefined virgin seed oil extracted without heat or solvents. Rich in naturally occurring pro-vitamin A carotenoids that speed dermal cell turnover and diminish stubborn hyperpigmentation.",
        linkToCategory: "/shop?search=rosehip"
    },
    {
        name: "Olive-Derived Plant Squalane",
        botanicalName: "Olea europaea Squalane",
        origin: "Provence Certified Groves, France",
        benefitCategory: "Hydration",
        keyActive: "Hydrogenated Hydrocarbon (100% Biomimetic to Human Sebum)",
        description: "Weightless lipid identical to the natural squalene synthesized by youthful human skin. Penetrates instantly into intercellular lipid bilayers without clogging pores or feeling greasy.",
        linkToCategory: "/shop?search=squalane"
    },
    {
        name: "Bio-Active Bakuchiol",
        botanicalName: "Psoralea corylifolia",
        origin: "Ayurvedic Herbal Reserves, India",
        benefitCategory: "Anti-Aging",
        keyActive: "Meroterpene Phenol",
        description: "The clinically proven plant-based alternative to synthetic retinol. Delivers cellular smoothing and collagen stimulation without photosensitivity, peeling, or barrier disruption.",
        linkToCategory: "/shop?search=bakuchiol"
    },
    {
        name: "French Lavender Distillate",
        botanicalName: "Lavandula angustifolia",
        origin: "Haute-Provence, France",
        benefitCategory: "Soothing",
        keyActive: "Linalool & Linalyl Acetate",
        description: "Steam-distilled high-altitude lavender known for calming the autonomic nervous system while topically re-balancing the skin's acidic microbiome mantle.",
        linkToCategory: "/shop?search=lavender"
    },
    {
        name: "Wild Rosemary Leaf Extract",
        botanicalName: "Salvia rosmarinus",
        origin: "Peloponnese Coastal Hills, Greece",
        benefitCategory: "Barrier Defense",
        keyActive: "Rosmarinic Acid & Carnosic Acid",
        description: "Potent free-radical scavenger that strengthens dermal antioxidant reserves and micro-circulates capillary blood to revive dormant hair roots and sluggish skin.",
        linkToCategory: "/shop?search=rosemary"
    },
    {
        name: "Damascus Rose Otto Hydrosol",
        botanicalName: "Rosa damascena",
        origin: "Kazanlak Valley of Roses, Bulgaria",
        benefitCategory: "Hydration",
        keyActive: "Citronellol & Geraniol Polyphenols",
        description: "The pure condensed water produced during the gentle artisan distillation of fresh morning damask rose petals. Delivers petal-soft hydration and tightens open pores.",
        linkToCategory: "/shop?search=rose"
    },
    {
        name: "Cold-Pressed Marula Kernel Oil",
        botanicalName: "Sclerocarya birrea",
        origin: "Sub-Saharan Community Collectives, Namibia",
        benefitCategory: "Hydration",
        keyActive: "Oleic Acid (70%) + Vitamin E Tocopherols",
        description: "Silky, fast-absorbing elixir packed with 60% more antioxidants than argan oil. Seals barrier moisture and repairs sun-damaged dermal tissues.",
        linkToCategory: "/shop?search=marula"
    },
    {
        name: "Chamomile Flower Bisabolol",
        botanicalName: "Chamomilla recutita",
        origin: "Bavarian Organic Meadows, Germany",
        benefitCategory: "Soothing",
        keyActive: "Alpha-Bisabolol & Chamazulene",
        description: "Gentle floral extract that inhibits pro-inflammatory cytokines, significantly reducing redness and reactive burning sensations in sensitive skin.",
        linkToCategory: "/shop?search=chamomile"
    }
];

const IngredientsPage = () => {
    const [filterCategory, setFilterCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = botanicals.filter(b => {
        const matchesCategory = filterCategory === 'All' || b.benefitCategory === filterCategory;
        const matchesQuery = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             b.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             b.keyActive.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Botanical Green Science Glossary" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Transparent Green Chemistry
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        The Botanical Ingredients Glossary
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We formulate with certified organic, sustainably wild-harvested plant extracts, unrefined seed lipids, and clinically active biomimetic phytonutrients. Never synthetic fillers or hidden petrochemicals.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
                    {/* Search */}
                    <div className="relative w-full sm:w-72">
                        <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-xs" />
                        <input
                            type="text"
                            placeholder="Search active compound or plant..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-xs focus:outline-none focus:border-[#2b4c3e] bg-white shadow-sm"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['All', 'Hydration', 'Brightening', 'Soothing', 'Anti-Aging', 'Barrier Defense'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                    filterCategory === cat
                                        ? 'bg-[#1a2e26] text-white shadow-sm'
                                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Botanical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filtered.map((b, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-8 border border-[#e8e2d5] shadow-sm flex flex-col justify-between hover:border-[#a3c9a8] transition-all"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[#f4f7f4] text-[#1f3d2f] border border-[#d6e5da]">
                                        {b.benefitCategory}
                                    </span>
                                    <FaLeaf className="text-[#a3c9a8] text-sm" />
                                </div>

                                <h2 className="text-2xl font-serif text-[#162720] mb-0.5">
                                    {b.name}
                                </h2>
                                <p className="text-xs font-serif italic text-gray-400 mb-3">
                                    {b.botanicalName}
                                </p>

                                <div className="space-y-1.5 text-xs text-gray-600 mb-4 bg-[#faf9f6] p-4 rounded-xl border border-gray-100">
                                    <p><strong className="text-black">Ethical Origin:</strong> {b.origin}</p>
                                    <p><strong className="text-black">Key Phytochemicals:</strong> {b.keyActive}</p>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                                    {b.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-[11px] text-gray-400 font-medium">Formulated in small cold-pressed batches</span>
                                <Link
                                    to={b.linkToCategory}
                                    className="text-xs font-semibold text-[#1a2e26] hover:text-[#2b4c3e] flex items-center gap-1 group"
                                >
                                    Browse Formulations <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default IngredientsPage;

