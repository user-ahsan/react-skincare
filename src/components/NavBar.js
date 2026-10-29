/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master desktop navigation header with animated announcement banner,
 * mega-menu dropdowns, live cart/wishlist counters, and brand identity.
 */

import React, { useState } from 'react';
import "../styles/Navbar.css";
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';
import { FaShoppingBag, FaHeart, FaSearch, FaLeaf } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [showExperiences, setShowExperiences] = useState(false);
    const [quickSearch, setQuickSearch] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const wishlistItems = useSelector((state) => state.cart.wishlist || []);
    const navigate = useNavigate();

    const showHandler = () => {
        setShow(true);
        setShow2(false);
        setShow3(false);
        setShowExperiences(false);
    };

    const showHandler2 = () => {
        setShow2(true);
        setShow(false);
        setShow3(false);
        setShowExperiences(false);
    };

    const showHandler3 = () => {
        setShow3(true);
        setShow(false);
        setShow2(false);
        setShowExperiences(false);
    };

    const showExperiencesHandler = () => {
        setShowExperiences(true);
        setShow(false);
        setShow2(false);
        setShow3(false);
    };

    const dontShowHandler = () => {
        setShow(false);
        setShow2(false);
        setShow3(false);
        setShowExperiences(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (quickSearch.trim()) {
            navigate(`/shop?search=${encodeURIComponent(quickSearch.trim())}`);
            setSearchOpen(false);
            setQuickSearch("");
        }
    };

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e5e0d8] shadow-sm">
            {/* Top Luxury Announcement Strip */}
            <div className="bg-[#192b23] text-[#e8eee9] text-[11px] py-2 px-4 tracking-widest uppercase font-medium flex items-center justify-between">
                <div className="hidden md:flex items-center gap-2">
                    <FaLeaf className="text-[#a3c9a8] text-[10px]" />
                    <span>Pure Organic Luxury Skincare • Certified Carbon Neutral</span>
                </div>
                <div className="mx-auto md:mx-0 flex items-center gap-3">
                    <span>Complimentary Express Shipping on Orders Over $50</span>
                    <span className="hidden sm:inline text-[#a3c9a8] font-bold">•</span>
                    <span className="hidden sm:inline bg-[#2b4c3e] px-2 py-0.5 rounded text-[10px] text-white">Use Code AHSAN20</span>
                </div>
                <div className="hidden lg:flex items-center gap-4 text-[10px]">
                    <Link to="/quiz" className="hover:text-white transition-colors text-[#a3c9a8] font-bold">Ritual Quiz</Link>
                    <span>•</span>
                    <Link to="/rewards" className="hover:text-white transition-colors">Rewards Circle</Link>
                    <span>•</span>
                    <Link to="/locations" className="hover:text-white transition-colors">Boutiques</Link>
                    <span>•</span>
                    <Link to="/track-order" className="hover:text-white transition-colors">Track Order</Link>
                    <span>•</span>
                    <Link to="/contact" className="hover:text-white transition-colors">Concierge</Link>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between" role="banner">
                {/* Brand Logo & Tagline */}
                <Link to="/" className="flex flex-col group py-1" onClick={dontShowHandler}>
                    <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#192b23] flex items-center justify-center text-[#a3c9a8] text-sm font-serif">
                            🌿
                        </span>
                        <span className="text-2xl font-serif tracking-[0.2em] font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors">
                            AURA BOTANICS
                        </span>
                    </div>
                    <span className="text-[9px] tracking-[0.25em] text-[#6b7c72] uppercase font-sans pl-9 -mt-1 font-medium">
                        Pure Botanicals • By Ahsan Sheikh
                    </span>
                </Link>

                {/* Primary Navigation Menu */}
                <nav className="hidden xl:flex items-center space-x-7 text-xs font-semibold tracking-widest text-[#2c3e34]" role="navigation">
                    <div className="relative py-7 cursor-pointer" onMouseEnter={showHandler}>
                        <span className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors">
                            BEST SELLERS
                        </span>
                        {show && (
                            <div className="absolute top-20 left-0 w-auto bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-50 animate-fadeIn" onMouseLeave={dontShowHandler}>
                                <BestSellers />
                            </div>
                        )}
                    </div>

                    <div className="relative py-7 cursor-pointer" onMouseEnter={showHandler2}>
                        <span className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors">
                            GIFT SETS
                        </span>
                        {show2 && (
                            <div className="absolute top-20 left-0 w-auto bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-50 animate-fadeIn" onMouseLeave={dontShowHandler}>
                                <GiftSets />
                            </div>
                        )}
                    </div>

                    <div className="relative py-7 cursor-pointer" onMouseEnter={showHandler3}>
                        <span className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors">
                            SHOP RANGE
                        </span>
                        {show3 && (
                            <div className="absolute top-20 -left-20 w-[720px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-50 animate-fadeIn" onMouseLeave={dontShowHandler}>
                                <Body />
                            </div>
                        )}
                    </div>

                    <Link to="/shop" className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors" onClick={dontShowHandler}>
                        CATALOG
                    </Link>

                    <Link to="/collections" className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors" onClick={dontShowHandler}>
                        COLLECTIONS
                    </Link>

                    {/* Experiences & Services Mega Dropdown */}
                    <div className="relative py-7 cursor-pointer" onMouseEnter={showExperiencesHandler}>
                        <span className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors flex items-center gap-1">
                            EXPERIENCES
                            <span className="text-[9px]">▾</span>
                        </span>
                        {showExperiences && (
                            <div className="absolute top-20 -left-12 w-80 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 z-50 animate-fadeIn" onMouseLeave={dontShowHandler}>
                                <div className="space-y-3 text-left">
                                    <Link to="/quiz" onClick={dontShowHandler} className="block p-3 rounded-xl hover:bg-[#f4f1ea] transition-all">
                                        <div className="font-serif font-bold text-[#192b23] text-sm flex items-center justify-between">
                                            <span>🌿 Diagnostic Routine Finder</span>
                                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-sans font-bold">15% OFF</span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-1 font-normal normal-case">Tailored 3-step botanical prescription for your skin type.</p>
                                    </Link>

                                    <Link to="/ingredients" onClick={dontShowHandler} className="block p-3 rounded-xl hover:bg-[#f4f1ea] transition-all">
                                        <div className="font-serif font-bold text-[#192b23] text-sm">
                                            🌸 Botanical Glossary
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-1 font-normal normal-case">A-Z transparency on cold-pressed active phytonutrients.</p>
                                    </Link>

                                    <Link to="/rewards" onClick={dontShowHandler} className="block p-3 rounded-xl hover:bg-[#f4f1ea] transition-all">
                                        <div className="font-serif font-bold text-[#192b23] text-sm">
                                            👑 The Botanical Circle
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-1 font-normal normal-case">VIP tiers, birthday gifts & loyalty points rewards.</p>
                                    </Link>

                                    <Link to="/gift-cards" onClick={dontShowHandler} className="block p-3 rounded-xl hover:bg-[#f4f1ea] transition-all">
                                        <div className="font-serif font-bold text-[#192b23] text-sm">
                                            🎁 Luxury Digital Gift Cards
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-1 font-normal normal-case">Curated amounts with personalized notes & instant delivery.</p>
                                    </Link>

                                    <Link to="/locations" onClick={dontShowHandler} className="block p-3 rounded-xl hover:bg-[#f4f1ea] transition-all border-t border-gray-100 pt-3">
                                        <div className="font-serif font-bold text-[#192b23] text-sm">
                                            📍 Boutique Ateliers
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-1 font-normal normal-case">Book a skin consultation in SoHo, Mayfair, Paris & Tokyo.</p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/journal" className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors" onClick={dontShowHandler}>
                        JOURNAL
                    </Link>

                    <Link to="/about" className="hover:text-[#192b23] hover:underline underline-offset-8 transition-colors" onClick={dontShowHandler}>
                        OUR STORY
                    </Link>
                </nav>

                {/* Right Action Icons: Search, Wishlist, Cart */}
                <div className="flex items-center gap-5 text-[#192b23]">
                    {/* Search trigger & popup */}
                    <div className="relative">
                        {searchOpen ? (
                            <form onSubmit={handleSearchSubmit} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search botanicals..."
                                    value={quickSearch}
                                    onChange={(e) => setQuickSearch(e.target.value)}
                                    autoFocus
                                    className="px-3 py-1.5 text-xs rounded-full border border-[#2b4c3e] focus:outline-none w-44 bg-white shadow-inner"
                                />
                                <button type="button" onClick={() => setSearchOpen(false)} className="ml-2 text-xs text-gray-500 hover:text-black">
                                    ✕
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="p-2 rounded-full hover:bg-emerald-50 transition-colors"
                                aria-label="Search Catalog"
                            >
                                <FaSearch className="text-base text-[#2c3e34]" />
                            </button>
                        )}
                    </div>

                    {/* Wishlist Link */}
                    <Link
                        to="/wishlist"
                        className="relative p-2 rounded-full hover:bg-emerald-50 transition-colors"
                        aria-label="Wishlist"
                        onClick={dontShowHandler}
                    >
                        <FaHeart className="text-lg text-[#2c3e34] hover:text-red-500 transition-colors" />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Cart Bag Link */}
                    <Link
                        to="/cart"
                        className="relative p-2 rounded-full hover:bg-emerald-50 transition-colors flex items-center gap-2"
                        aria-label="Shopping Cart"
                        onClick={dontShowHandler}
                    >
                        <FaShoppingBag className="text-xl text-[#192b23]" />
                        <span className="bg-[#192b23] text-[#a3c9a8] text-[11px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center shadow-sm">
                            {totalQuantity}
                        </span>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
