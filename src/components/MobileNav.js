/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Mobile responsive navigation bar with slide-out drawer menu.
 */

import React, { useState } from 'react';
import { FaShoppingBag, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNav = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const wishlistItems = useSelector((state) => state.cart.wishlist || []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const closeDrawer = () => setDrawerOpen(false);

    return (
        <div className="xl:hidden w-full fixed top-0 left-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e5e0d8] shadow-sm">
            {/* Top Bar Banner for Mobile */}
            <div className="bg-[#192b23] text-[#e8eee9] text-[10px] py-1.5 px-4 text-center tracking-widest uppercase font-medium">
                Free Express Shipping on Orders $50+ • Code <span className="text-[#a3c9a8] font-bold">AHSAN20</span>
            </div>

            <div className="px-5 h-16 flex items-center justify-between">
                {/* Hamburger Button */}
                <button
                    onClick={toggleDrawer}
                    className="p-2 text-xl text-[#192b23] focus:outline-none"
                    aria-label="Toggle navigation drawer"
                >
                    {drawerOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Brand Logo */}
                <Link to="/" onClick={closeDrawer} className="text-center">
                    <span className="text-lg font-serif tracking-[0.2em] font-semibold text-[#192b23] block">
                        AURA BOTANICS
                    </span>
                    <span className="text-[8px] tracking-[0.2em] text-[#6b7c72] uppercase font-sans -mt-1 block">
                        By Ahsan Sheikh
                    </span>
                </Link>

                {/* Right Action Icons */}
                <div className="flex items-center gap-3">
                    <Link to="/wishlist" onClick={closeDrawer} className="relative p-1">
                        <FaHeart className="text-lg text-[#2c3e34]" />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>

                    <Link to="/cart" onClick={closeDrawer} className="relative p-1">
                        <FaShoppingBag className="text-lg text-[#192b23]" />
                        <span className="absolute -top-1 -right-1 bg-[#192b23] text-[#a3c9a8] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            {totalQuantity}
                        </span>
                    </Link>
                </div>
            </div>

            {/* Slide-out Drawer */}
            {drawerOpen && (
                <div className="bg-[#faf9f6] border-b border-[#ded7cc] px-6 py-6 shadow-xl transition-all">
                    <nav className="flex flex-col space-y-4 text-sm font-medium tracking-wider text-[#22332a]">
                        <Link to="/" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>HOME</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/shop" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between text-emerald-900 font-bold">
                            <span>SHOP ALL CATALOG</span>
                            <span className="text-emerald-700">Explore</span>
                        </Link>
                        <Link to="/collections" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>COLLECTIONS & SETS</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/under20" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>UNDER $20 ESSENTIALS</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/under40" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>UNDER $40 BUNDLES</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/forher" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>GIFTS FOR HER</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/forhim" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>GIFTS FOR HIM</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/journal" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>WELLNESS JOURNAL</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/about" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>OUR STORY (AHSAN SHEIKH)</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/track-order" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>LIVE ORDER TRACKER</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/faq" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>HELP & FAQ</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                        <Link to="/contact" onClick={closeDrawer} className="py-1 border-b border-gray-100 flex items-center justify-between">
                            <span>CONTACT CONCIERGE</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                    </nav>

                    <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
                        <p>🌿 Handcrafted Botanical Luxury</p>
                        <p className="mt-1">Engineered by Ahsan Sheikh</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
