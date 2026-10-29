/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Interactive mega-menu tab component showcasing Body, Hair, Travel, and New categories.
 */

import React, { useState } from 'react';
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build";
import { Link } from 'react-router-dom';

const Body = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('body');

    const tabs = [
        { id: 'body', label: 'BODY CARE', subtitle: 'Cleansers & balms' },
        { id: 'hair', label: 'HAIR & SCALP', subtitle: 'Follicular nutrition' },
        { id: 'travel', label: 'TRAVEL ESSENTIALS', subtitle: 'Carry-on sizes' },
        { id: 'new', label: 'NEW ARRIVALS', subtitle: 'Fresh apothecary drops' },
    ];

    const bodyProducts = store.filter(item => item.type === "navbar-BodyType" || item.category === "Body Care").slice(0, 3);
    const travelProducts = store.filter(item => item.type === "navbar-TravelType" || item.category === "Travel").slice(0, 3);
    const newProducts = store.filter(item => item.type === "navbar-NewType" || item.isNew).slice(0, 3);

    return (
        <div className="w-[880px] bg-white rounded-2xl shadow-2xl p-6 border border-[#e5dfd3] relative z-50">
            {/* Top Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#2b4c3e] font-bold block">
                        Complete Range
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#192b23]">
                        Apothecary Formulations & Categories
                    </h3>
                </div>
                <Link
                    to="/shop"
                    onClick={onClose}
                    className="text-xs text-[#2b4c3e] hover:underline font-semibold flex items-center gap-1"
                >
                    Browse Entire Catalog →
                </Link>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-12 gap-6 min-h-[290px]">
                {/* Left Tabs Column */}
                <div className="col-span-3 border-r border-gray-100 pr-3 space-y-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 block mb-2">
                        SELECT CATEGORY
                    </span>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            onMouseEnter={() => setActiveTab(tab.id)}
                            className={`w-full text-left p-3 rounded-xl transition-all flex flex-col ${
                                activeTab === tab.id
                                    ? 'bg-[#192b23] text-white shadow-sm'
                                    : 'text-gray-700 hover:bg-[#f4f1ea]'
                            }`}
                        >
                            <span className="text-xs font-bold tracking-wider">{tab.label}</span>
                            <span className={`text-[10px] ${activeTab === tab.id ? 'text-[#a3c9a8]' : 'text-gray-400'}`}>
                                {tab.subtitle}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Right Tab Content */}
                <div className="col-span-9 pl-2">
                    {/* Tab: BODY */}
                    {activeTab === 'body' && (
                        <div className="grid grid-cols-12 gap-5 items-start animate-fadeIn">
                            <div className="col-span-4 space-y-2 border-r border-gray-100 pr-4">
                                <span className="text-[11px] font-bold tracking-wider uppercase text-[#2b4c3e] block mb-2">
                                    BODY RITUALS
                                </span>
                                <div className="space-y-1.5 text-xs font-medium text-gray-700">
                                    <Link to="/collections/body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Botanical Body Wash</Link>
                                    <Link to="/collections/body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Walnut Exfoliating Scrub</Link>
                                    <Link to="/collections/body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Velvet Body Lotions</Link>
                                    <Link to="/collections/body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Cold-Pressed Body Oil</Link>
                                    <Link to="/collections/body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Aromatic Hand Care</Link>
                                    <Link to="/collections/bath-body" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Dead Sea Bath Soaks</Link>
                                </div>
                            </div>
                            <div className="col-span-8 grid grid-cols-3 gap-3">
                                {bodyProducts.map((item) => (
                                    <Link to={`/${item.id}`} key={item.id} onClick={onClose} className="group block text-center">
                                        <div className="w-full aspect-square bg-[#f5f2ea] rounded-xl overflow-hidden mb-2 p-2 flex items-center justify-center border border-gray-100 group-hover:border-[#a3c9a8] transition-all group-hover:shadow-md">
                                            <HoverImage
                                                src={item.primaryImage}
                                                hoverSrc={item.hoverImg || item.primaryImage}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <p className="text-[11px] font-serif font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                            {item.name}
                                        </p>
                                        <p className="text-xs font-bold text-gray-800">${item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab: HAIR */}
                    {activeTab === 'hair' && (
                        <div className="grid grid-cols-12 gap-5 items-start animate-fadeIn">
                            <div className="col-span-5 space-y-3 border-r border-gray-100 pr-4">
                                <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-1">
                                    HAIRCARE PILLARS
                                </span>
                                <div className="space-y-1.5 text-xs font-medium text-gray-700">
                                    <Link to="/collections/haircare" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Botanical Shampoos</Link>
                                    <Link to="/collections/haircare" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Nourishing Conditioners</Link>
                                    <Link to="/collections/haircare" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Scalp Detox & Density Drops</Link>
                                </div>
                                <div className="pt-2 border-t border-gray-100">
                                    <span className="text-[10px] font-bold text-[#2b4c3e] uppercase tracking-wider block mb-1">TARGET CONCERNS</span>
                                    <div className="flex flex-wrap gap-1.5 text-[10px]">
                                        <Link to="/collections/haircare" onClick={onClose} className="px-2.5 py-1 bg-gray-100 hover:bg-[#2b4c3e] hover:text-white rounded-full transition-colors font-medium">Moisture Repair</Link>
                                        <Link to="/collections/haircare" onClick={onClose} className="px-2.5 py-1 bg-gray-100 hover:bg-[#2b4c3e] hover:text-white rounded-full transition-colors font-medium">Scalp Balance</Link>
                                        <Link to="/collections/haircare" onClick={onClose} className="px-2.5 py-1 bg-gray-100 hover:bg-[#2b4c3e] hover:text-white rounded-full transition-colors font-medium">Volume & Lift</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-7 grid grid-cols-2 gap-4">
                                <div className="bg-[#f8f6f0] p-3 rounded-xl border border-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80"
                                        alt="Cold-Pressed Haircare"
                                        className="w-full h-28 object-cover rounded-lg mb-2"
                                    />
                                    <p className="font-serif font-bold text-xs text-[#192b23]">Pure Botanical Scalp Health</p>
                                    <p className="text-[10px] text-gray-500 mt-1">Why cold-pressed botanical density extracts transform follicles.</p>
                                    <Link to="/journal/april" onClick={onClose} className="text-[10px] font-semibold text-[#2b4c3e] hover:underline mt-1 block">Read Study →</Link>
                                </div>
                                <div className="bg-[#f8f6f0] p-3 rounded-xl border border-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80"
                                        alt="Holistic Scalp Ritual"
                                        className="w-full h-28 object-cover rounded-lg mb-2"
                                    />
                                    <p className="font-serif font-bold text-xs text-[#192b23]">Scalp Detox Ritual</p>
                                    <p className="text-[10px] text-gray-500 mt-1">Certified organic rosemary & peppermint clarifying therapy.</p>
                                    <Link to="/collections/haircare" onClick={onClose} className="text-[10px] font-semibold text-[#2b4c3e] hover:underline mt-1 block">Shop Haircare →</Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab: TRAVEL */}
                    {activeTab === 'travel' && (
                        <div className="grid grid-cols-12 gap-5 items-start animate-fadeIn">
                            <div className="col-span-4 space-y-2 border-r border-gray-100 pr-4">
                                <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-2">
                                    TRAVEL SIZES
                                </span>
                                <div className="space-y-1.5 text-xs font-medium text-gray-700">
                                    <Link to="/shop?category=Travel" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">TSA-Approved Kits</Link>
                                    <Link to="/shop?category=Travel" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Mini Facial Elixirs</Link>
                                    <Link to="/shop?category=Travel" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Pocket Aromatherapy</Link>
                                </div>
                            </div>
                            <div className="col-span-8 grid grid-cols-3 gap-3">
                                {travelProducts.map((item) => (
                                    <Link to={`/${item.id}`} key={item.id} onClick={onClose} className="group block text-center">
                                        <div className="w-full aspect-square bg-[#f5f2ea] rounded-xl overflow-hidden mb-2 p-2 flex items-center justify-center border border-gray-100 group-hover:border-[#a3c9a8] transition-all group-hover:shadow-md">
                                            <HoverImage
                                                src={item.primaryImage}
                                                hoverSrc={item.hoverImg || item.primaryImage}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <p className="text-[11px] font-serif font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                            {item.name}
                                        </p>
                                        <p className="text-xs font-bold text-gray-800">${item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab: NEW */}
                    {activeTab === 'new' && (
                        <div className="grid grid-cols-12 gap-5 items-start animate-fadeIn">
                            <div className="col-span-4 space-y-2 border-r border-gray-100 pr-4">
                                <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-2">
                                    LATEST FORMULATIONS
                                </span>
                                <div className="space-y-1.5 text-xs font-medium text-gray-700">
                                    <Link to="/shop" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Wild Plum Serums</Link>
                                    <Link to="/shop" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Detoxifying Clay Masques</Link>
                                    <Link to="/shop" onClick={onClose} className="block py-1 hover:text-[#2b4c3e] hover:translate-x-1 transition-all">Biophotonic Glass Editions</Link>
                                    <Link to="/shop" onClick={onClose} className="block py-1 font-semibold text-[#2b4c3e] hover:underline mt-2">Shop All New Arrivals →</Link>
                                </div>
                            </div>
                            <div className="col-span-8 grid grid-cols-3 gap-3">
                                {newProducts.map((item) => (
                                    <Link to={`/${item.id}`} key={item.id} onClick={onClose} className="group block text-center">
                                        <div className="w-full aspect-square bg-[#f5f2ea] rounded-xl overflow-hidden mb-2 p-2 flex items-center justify-center border border-gray-100 group-hover:border-[#a3c9a8] transition-all group-hover:shadow-md">
                                            <HoverImage
                                                src={item.primaryImage}
                                                hoverSrc={item.hoverImg || item.primaryImage}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <p className="text-[11px] font-serif font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                            {item.name}
                                        </p>
                                        <p className="text-xs font-bold text-gray-800">${item.price}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
