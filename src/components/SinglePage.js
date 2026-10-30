/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Single product detail view with interactive image gallery,
 * bio-compatible ingredient accordions, customer reviews, and wishlist integration.
 */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../productsStore/Store';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import BreadCrumb from './BreadCrumb';
import { AiFillStar } from "react-icons/ai";
import SinglePageFAQ from './SinglePageFAQ';
import AutoPlayMethods from './SingleAlsoLike';
import JournalSection from "./JournalSection";
import SearchBox from './SearchBox';
import Review1 from './Review1';
import { FaShippingFast, FaLock, FaHeart, FaRegHeart, FaCheck, FaLeaf, FaUndoAlt, FaShieldAlt } from "react-icons/fa";
import SPFooter from './SPFooter';
import { useToast } from '@chakra-ui/react';

const SinglePage = () => {
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const toast = useToast();
    const wishlist = useSelector((state) => state.cart.wishlist || []);

    const prodClicked = store.find((item) => String(item.id) === String(id)) || store[0];
    const { name, price, primaryImage, hoverImg, gallery, descr, volume, category } = prodClicked;

    const [activeImg, setActiveImg] = useState(primaryImage);
    const [quantity, setQuantity] = useState(1);

    const isWishlisted = wishlist.some((item) => String(item.id) === String(prodClicked.id));

    // Gallery images: use product gallery or curated fallback high-res stock images
    const galleryImages = gallery && gallery.length > 0 ? gallery : [
        primaryImage,
        hoverImg || primaryImage,
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ];

    const addItemToCartHandler = () => {
        for (let i = 0; i < quantity; i++) {
            dispatch(
                cartActions.addItemToCart({
                    id: prodClicked.id,
                    price,
                    title: name,
                    image: primaryImage,
                    category: category || "Skincare",
                })
            );
        }

        toast({
            title: 'Added to Bag',
            description: `${quantity}x ${name} added to your sacred ritual.`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    };

    const handleToggleWishlist = () => {
        dispatch(cartActions.toggleWishlist(prodClicked));
        toast({
            title: isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist',
            description: isWishlisted ? `${name} removed.` : `${name} saved to your favorites.`,
            status: 'info',
            duration: 2000,
            isClosable: true,
        });
    };

    const numOfRev = 5;
    const reviews = 384;

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            {/* Breadcrumb Navigation */}
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3]">
                <BreadCrumb name={name} />
            </div>

            {/* Product Hero Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Image Gallery (Col 7) */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
                        {/* Thumbnails Row on mobile / Column on desktop */}
                        <div className="order-2 md:order-1 flex md:flex-col gap-3 shrink-0">
                            {galleryImages.map((imgUrl, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setActiveImg(imgUrl)}
                                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all p-1 bg-white shadow-sm ${
                                        activeImg === imgUrl
                                            ? 'border-[#2b4c3e] ring-2 ring-[#a3c9a8]/30 scale-105'
                                            : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    <img
                                        src={imgUrl}
                                        alt={`${name} view ${idx + 1}`}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Featured Showcase Image */}
                        <div className="order-1 md:order-2 flex-1 bg-white rounded-3xl p-6 border border-[#e8e2d5] shadow-lg flex items-center justify-center min-h-[480px]">
                            <img
                                src={activeImg}
                                alt={name}
                                className="max-h-[480px] w-auto object-contain rounded-2xl transition-all duration-300 hover:scale-105 cursor-zoom-in"
                            />
                        </div>
                    </div>

                    {/* Right Column: Product Details & Purchase Controls (Col 5) */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                        {/* Category & Volume Pills */}
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2b4c3e] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                                {category || "Botanical Skincare"}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">
                                {volume || "150 ml / 5.1 fl oz"}
                            </span>
                        </div>

                        {/* Title & Price */}
                        <div>
                            <h1 className="font-serif text-3xl sm:text-4xl text-[#162720] tracking-tight leading-snug font-medium">
                                {name}
                            </h1>
                            <div className="flex items-baseline gap-4 mt-3">
                                <span className="font-serif text-3xl text-[#162720] font-bold">
                                    ${price}.00
                                </span>
                                <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1">
                                    <FaCheck className="text-[9px]" /> In Stock • Ready to Dispatch
                                </span>
                            </div>
                        </div>

                        {/* Star Rating Breakdown */}
                        <div className="flex items-center gap-3 pt-1 border-y border-gray-200 py-3">
                            <div className="flex text-amber-500 text-sm">
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            </div>
                            <span className="font-semibold text-xs text-gray-700">
                                {reviews} Verified Customer Reviews
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs text-emerald-800 font-medium">100% Satisfaction</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {descr || "Hand-formulated with cold-pressed certified organic botanicals to deeply nourish, soothe, and protect your living skin barrier. Packaged in biophotonic violet glass."}
                        </p>

                        {/* Loyalty points prompt */}
                        <div className="bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-100/80 flex items-center gap-2.5 text-xs text-emerald-900 font-medium">
                            <span className="text-emerald-700">✨</span>
                            <span>Earn <strong>50 Aura Loyalty Points</strong> ($5.00 reward credit) with this purchase.</span>
                        </div>

                        {/* Quantity & Add to Cart Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            {/* Quantity Selector */}
                            <div className="flex items-center justify-between border border-gray-300 rounded-full bg-white px-4 py-3 text-sm font-semibold w-full sm:w-32 shadow-sm">
                                <button
                                    type="button"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-gray-500 hover:text-black font-bold px-1"
                                >
                                    −
                                </button>
                                <span>{quantity}</span>
                                <button
                                    type="button"
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-gray-500 hover:text-black font-bold px-1"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Bag Button */}
                            <button
                                type="button"
                                onClick={addItemToCartHandler}
                                className="flex-1 w-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
                            >
                                ADD TO BAG • ${(price * quantity).toFixed(2)}
                            </button>

                            {/* Wishlist Button */}
                            <button
                                type="button"
                                onClick={handleToggleWishlist}
                                className="p-3.5 rounded-full border border-gray-300 hover:border-red-400 bg-white text-gray-600 hover:text-red-500 transition-colors shadow-sm shrink-0"
                                aria-label="Toggle Wishlist"
                            >
                                {isWishlisted ? <FaHeart className="text-red-500 text-lg" /> : <FaRegHeart className="text-lg" />}
                            </button>
                        </div>

                        {/* Shipping & Returns Quick Guarantee */}
                        <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaShippingFast className="text-[#2b4c3e]" />
                                <span>Free shipping over $50</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUndoAlt className="text-[#2b4c3e]" />
                                <span>30-Day Pure Glow Guarantee</span>
                            </div>
                        </div>

                        {/* Product Accordion (Formula, Ritual, Ingredients, Values) */}
                        <div className="pt-4">
                            <SinglePageFAQ />
                        </div>
                    </div>
                </div>
            </section>

            {/* You May Also Like Curated Slider */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-gray-200">
                <div className="text-center mb-10">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                        Complementary Formulations
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">
                        You May Also Like
                    </h2>
                </div>
                <div className="overflow-hidden">
                    <AutoPlayMethods />
                </div>
            </section>

            {/* Customer Reviews & Breakdown */}
            <section className="bg-[#f4f1ea]/60 py-16 border-y border-[#e5dfd3]">
                <Review1 starCalc={numOfRev} rev={reviews} />
                <SearchBox />
            </section>

            {/* Journal Editorial Preview */}
            <section className="py-16">
                <JournalSection />
            </section>

            {/* Trust & Craftsmanship Icons */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center p-4">
                        <FaShippingFast className="text-3xl text-[#2b4c3e] mb-2" />
                        <h4 className="font-serif font-bold text-sm text-gray-900 mb-1">Carbon-Free 2-Day Delivery</h4>
                        <p className="text-[11px] text-gray-500">Expedited climate-neutral dispatch</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <FaLock className="text-3xl text-[#2b4c3e] mb-2" />
                        <h4 className="font-serif font-bold text-sm text-gray-900 mb-1">256-Bit Secure Checkout</h4>
                        <p className="text-[11px] text-gray-500">Encrypted payment architecture</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <FaShieldAlt className="text-3xl text-[#2b4c3e] mb-2" />
                        <h4 className="font-serif font-bold text-sm text-gray-900 mb-1">30-Day Pure Glow Guarantee</h4>
                        <p className="text-[11px] text-gray-500">Hassle-free botanical returns</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <FaLeaf className="text-3xl text-[#2b4c3e] mb-2" />
                        <h4 className="font-serif font-bold text-sm text-gray-900 mb-1">Biophotonic Violet Glass</h4>
                        <p className="text-[11px] text-gray-500">100% recyclable solar protection</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <SPFooter />
        </div>
    );
};

export default SinglePage;
