/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Gift sets mega-menu dropdown with curated category links and showcase items.
 */

import React from 'react';
import { store } from '../productsStore/Store';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';

const GiftSets = ({ onClose }) => {
    const giftItems = store
        .filter((item) => item.type === "gift" || item.category === "Gift Sets")
        .slice(0, 3);

    return (
        <div className="w-[840px] bg-white rounded-2xl shadow-2xl p-6 border border-[#e5dfd3] relative z-50">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#2b4c3e] font-bold block">
                        The Art of Gifting
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#192b23]">
                        Curated Luxury Gift Sets & Boxes
                    </h3>
                </div>
                <Link
                    to="/collections/gift-sets"
                    onClick={onClose}
                    className="text-xs text-[#2b4c3e] hover:underline font-semibold flex items-center gap-1"
                >
                    All Gift Boxes →
                </Link>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Column: Price & Recipient Quick Links */}
                <div className="col-span-3 border-r border-gray-100 pr-4 flex flex-col justify-between">
                    <div>
                        <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-3">
                            SHOP BY BUDGET
                        </span>
                        <div className="space-y-2 text-xs font-semibold text-[#192b23]">
                            <Link to="/under20" onClick={onClose} className="block p-2 rounded-lg hover:bg-[#f4f1ea] hover:text-[#2b4c3e] transition-colors">
                                Under $20 Essentials
                            </Link>
                            <Link to="/under40" onClick={onClose} className="block p-2 rounded-lg hover:bg-[#f4f1ea] hover:text-[#2b4c3e] transition-colors">
                                Under $40 Bundles
                            </Link>
                            <Link to="/forher" onClick={onClose} className="block p-2 rounded-lg hover:bg-[#f4f1ea] hover:text-[#2b4c3e] transition-colors">
                                Curated Gifts For Her
                            </Link>
                            <Link to="/forhim" onClick={onClose} className="block p-2 rounded-lg hover:bg-[#f4f1ea] hover:text-[#2b4c3e] transition-colors">
                                Curated Gifts For Him
                            </Link>
                        </div>
                    </div>

                    <Link
                        to="/gift-cards"
                        onClick={onClose}
                        className="mt-4 p-3 bg-[#f8f6f0] rounded-xl border border-[#ded8cb] block text-left hover:bg-[#efebe1] transition-colors"
                    >
                        <div className="flex items-center gap-2 text-[#2b4c3e] font-serif font-bold text-xs mb-1">
                            <FaGift /> Digital Gift Cards
                        </div>
                        <p className="text-[10px] text-gray-500 leading-tight">Instant email delivery with custom dedication note.</p>
                    </Link>
                </div>

                {/* Right Columns: 3 Gift Items */}
                <div className="col-span-9 grid grid-cols-3 gap-4">
                    {giftItems.map((item) => (
                        <Link
                            to={`/${item.id}`}
                            key={item.id}
                            onClick={onClose}
                            className="group block text-center"
                        >
                            <div className="w-full aspect-square bg-[#f5f2ea] rounded-xl overflow-hidden mb-3 p-2 flex items-center justify-center border border-gray-100 group-hover:border-[#a3c9a8] transition-all group-hover:shadow-md">
                                <HoverImage
                                    src={item.primaryImage}
                                    hoverSrc={item.hoverImg || item.primaryImage}
                                    alt={item.name}
                                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <p className="text-xs font-serif font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors line-clamp-1 mb-1">
                                {item.name}
                            </p>
                            <p className="text-xs font-bold text-gray-800">
                                ${item.price}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GiftSets;
