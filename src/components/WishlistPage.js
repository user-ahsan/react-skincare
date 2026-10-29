/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Saved favorites & wishlist manager with quick add-to-cart and recommendations.
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { store } from '../productsStore/Store';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaTrash, FaShoppingBag, FaHeart, FaStar } from 'react-icons/fa';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.cart.wishlist || []);

    const handleAddToCart = (item) => {
        dispatch(cartActions.addItemToCart({
            id: item.id,
            price: item.price,
            title: item.name,
            image: item.primaryImage,
            category: item.category,
        }));
    };

    const handleRemoveFromWishlist = (id) => {
        dispatch(cartActions.removeFromWishlist(id));
    };

    const handleMoveAllToCart = () => {
        wishlist.forEach((item) => {
            dispatch(cartActions.addItemToCart({
                id: item.id,
                price: item.price,
                title: item.name,
                image: item.primaryImage,
                category: item.category,
            }));
        });
    };

    const recommendedProducts = store.filter((p) => p.isBestSeller && p.type !== 'iGPosts').slice(0, 4);

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="My Saved Rituals (Wishlist)" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
                    <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-1">
                            Sacred Self-Care
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-serif text-[#162720] tracking-wide">
                            My Saved Wishlist
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved in your personal collection
                        </p>
                    </div>

                    {wishlist.length > 0 && (
                        <button
                            onClick={handleMoveAllToCart}
                            className="px-6 py-2.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md flex items-center gap-2"
                        >
                            <FaShoppingBag className="text-xs" /> Move All to Cart
                        </button>
                    )}
                </div>

                {/* Wishlist Items Grid */}
                {wishlist.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto mb-16">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#2b4c3e] flex items-center justify-center text-2xl mx-auto mb-4">
                            <FaHeart />
                        </div>
                        <h2 className="text-2xl font-serif text-gray-800 mb-2">Your wishlist is currently empty</h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                            Explore our apothecary catalog and tap the heart icon on your favorite botanical formulations to save them for later.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block px-8 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                        >
                            Explore Entire Catalog
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                        {wishlist.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="relative aspect-square overflow-hidden bg-[#f5f4ef]">
                                    <Link to={`/${item.id}`}>
                                        <img
                                            src={item.primaryImage}
                                            alt={item.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </Link>
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                        className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 shadow hover:scale-110 transition-all"
                                        aria-label="Remove item"
                                    >
                                        <FaTrash className="text-xs" />
                                    </button>
                                </div>

                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                                            {[...Array(item.stars || 5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <Link to={`/${item.id}`}>
                                            <h3 className="font-serif text-base text-gray-900 font-semibold group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                                {item.name}
                                            </h3>
                                        </Link>
                                        <span className="text-xs text-gray-500">{item.category || "Skincare"}</span>
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-lg font-serif font-bold text-[#192b23]">
                                            ${item.price}
                                        </span>
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-[#1a2e26] hover:bg-[#2b4c3e] text-white flex items-center gap-1.5 transition-colors shadow-sm"
                                        >
                                            <FaShoppingBag className="text-[10px]" /> Add to Bag
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Recommended Best Sellers Section */}
                <div className="pt-12 border-t border-gray-200">
                    <div className="text-center mb-10">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-1">
                            Staff Recommendations
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif text-[#162720]">
                            Recommended by Ahsan Sheikh
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {recommendedProducts.map((p) => (
                            <Link
                                key={p.id}
                                to={`/${p.id}`}
                                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                            >
                                <img
                                    src={p.primaryImage}
                                    alt={p.name}
                                    className="w-full aspect-square object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform duration-500"
                                />
                                <h4 className="font-serif text-sm font-semibold text-gray-900 group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                    {p.name}
                                </h4>
                                <span className="text-sm font-bold text-[#1a2e26] block mt-1">${p.price}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default WishlistPage;
