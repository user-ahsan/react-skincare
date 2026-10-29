/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Complete interactive catalog browser with category filters, price slider,
 * sorting, search query support, wishlist toggling, and quick add-to-cart.
 */

import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { store } from '../productsStore/Store';
import { FaHeart, FaRegHeart, FaStar, FaShoppingBag, FaSearch, FaCheck } from 'react-icons/fa';
import HoverImage from 'react-hover-image/build';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';

const ShopPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSearch = queryParams.get('search') || '';
    const initialCategory = queryParams.get('category') || 'All';

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.cart.wishlist || []);

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState(200);
    const [addedId, setAddedId] = useState(null);

    const categories = [
        'All',
        'Skincare',
        'Body Care',
        'Haircare',
        'Aromatherapy',
        'Tools',
        'Sun & Lip',
        'Grooming',
        'Bath & Body',
        'Gift Sets',
        'Wellness',
        'Travel'
    ];

    const filteredProducts = useMemo(() => {
        return store.filter((product) => {
            // Filter out social post thumbnails
            if (product.type === 'iGPosts') return false;

            // Search filter
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const matchName = product.name?.toLowerCase().includes(q);
                const matchDescr = product.descr?.toLowerCase().includes(q);
                const matchCat = product.category?.toLowerCase().includes(q);
                if (!matchName && !matchDescr && !matchCat) return false;
            }

            // Category filter
            if (selectedCategory !== 'All') {
                if (product.category !== selectedCategory) return false;
            }

            // Price filter
            if (product.price > priceRange) return false;

            return true;
        }).sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return (b.stars || 5) - (a.stars || 5);
            return 0; // featured default
        });
    }, [selectedCategory, searchQuery, sortBy, priceRange]);

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(cartActions.addItemToCart({
            id: product.id,
            price: product.price,
            title: product.name,
            image: product.primaryImage,
            category: product.category,
        }));
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const handleToggleWishlist = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(cartActions.toggleWishlist(product));
    };

    const isWishlisted = (id) => wishlist.some((item) => String(item.id) === String(id));

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            {/* Top Breadcrumb */}
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Shop All Catalog" />
                </div>
            </div>

            {/* Catalog Hero Banner */}
            <div className="max-w-7xl mx-auto px-6 py-10 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                    The Complete Apothecary
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-[#162720] font-normal tracking-wide">
                    Pure Botanical Collection
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm leading-relaxed">
                    Explore our curated portfolio of cold-pressed, wild-harvested skincare, nourishing hair care, and restorative wellness formulations engineered by Ahsan Sheikh.
                </p>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Control Filters Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Category Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-[#1a2e26] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search & Sort Controls */}
                    <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                        <div className="relative flex-1 sm:w-64">
                            <FaSearch className="absolute left-3.5 top-3 text-gray-400 text-xs" />
                            <input
                                type="text"
                                placeholder="Filter products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Sort:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 text-xs rounded-full border border-gray-200 bg-white focus:outline-none text-gray-700 cursor-pointer font-medium"
                            >
                                <option value="featured">Featured Rituals</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results count & Price Filter */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 mb-6 px-2">
                    <p>
                        Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> luxury botanical formulations
                    </p>
                    <div className="flex items-center gap-3 mt-3 sm:mt-0">
                        <span>Max Price: <strong className="text-gray-900">${priceRange}</strong></span>
                        <input
                            type="range"
                            min="10"
                            max="200"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="accent-[#2b4c3e] cursor-pointer"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                        <span className="text-4xl block mb-3">🌿</span>
                        <h3 className="text-xl font-serif text-gray-800 mb-2">No formulations match your filter</h3>
                        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                            Try adjusting your price range or search terms to uncover more organic treasures.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                                setPriceRange(70);
                            }}
                            className="px-6 py-2.5 rounded-full bg-[#1a2e26] text-white text-xs font-semibold tracking-wider hover:bg-[#2b4c3e] transition-colors"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => {
                            const wish = isWishlisted(product.id);
                            const isAdded = addedId === product.id;

                            return (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="relative">
                                        <Link to={`/${product.id}`} className="block overflow-hidden aspect-square bg-[#f5f4ef]">
                                            <HoverImage
                                                src={product.primaryImage}
                                                hoverSrc={product.hoverImg || product.primaryImage}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                alt={product.name}
                                            />
                                        </Link>

                                        {/* Wishlist Button */}
                                        <button
                                            onClick={(e) => handleToggleWishlist(product, e)}
                                            className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow hover:scale-110 transition-transform text-gray-700 hover:text-red-500 z-10"
                                            aria-label="Save to Wishlist"
                                        >
                                            {wish ? (
                                                <FaHeart className="text-red-500 text-sm" />
                                            ) : (
                                                <FaRegHeart className="text-sm" />
                                            )}
                                        </button>

                                        {/* Category Badge */}
                                        <span className="absolute top-3 left-3 bg-[#192b23]/80 backdrop-blur-sm text-[#a3c9a8] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium">
                                            {product.category || 'Skincare'}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex flex-col flex-grow justify-between">
                                        <div>
                                            <div className="flex items-center gap-1 text-amber-500 text-xs mb-1.5">
                                                {[...Array(product.stars || 5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                                <span className="text-gray-400 text-[10px] ml-1">
                                                    ({product.reviewsCount || Math.floor(Math.random() * 80 + 20)})
                                                </span>
                                            </div>

                                            <Link to={`/${product.id}`}>
                                                <h3 className="font-serif text-base text-gray-900 font-semibold group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                                    {product.name}
                                                </h3>
                                            </Link>

                                            <p className="text-gray-500 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                                                {product.descr || "Cold-pressed pure botanical formula delivering rich nutrients and lasting glow."}
                                            </p>
                                        </div>

                                        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-gray-400 block -mb-1">Price</span>
                                                <span className="text-lg font-serif font-bold text-[#192b23]">
                                                    ${product.price}
                                                </span>
                                            </div>

                                            <button
                                                onClick={(e) => handleAddToCart(product, e)}
                                                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 transition-all shadow-sm ${
                                                    isAdded
                                                        ? 'bg-emerald-600 text-white'
                                                        : 'bg-[#1a2e26] hover:bg-[#2b4c3e] text-white hover:shadow-md'
                                                }`}
                                            >
                                                {isAdded ? (
                                                    <>
                                                        <FaCheck className="text-[10px]" /> Added
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaShoppingBag className="text-[10px]" /> Add to Bag
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <SPFooter />
        </div>
    );
};

export default ShopPage;

