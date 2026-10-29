/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Curated collections showcase highlighting Skincare, Body, Haircare,
 * Gift Sets, and Wellness rituals with editorial imagery.
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { store } from '../productsStore/Store';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import HoverImage from 'react-hover-image/build';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

const collectionDefinitions = [
    {
        slug: "skincare",
        title: "Facial Skincare & Elixirs",
        category: "Skincare",
        subtitle: "Pure Bio-Compatible Nutrition",
        description: "Cold-pressed rosehip seed oils, antioxidant mist toners, and detoxifying green clay masques designed to nourish the skin barrier without synthetic irritants.",
        banner: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80"
    },
    {
        slug: "body",
        title: "Botanical Body Sanctuary",
        category: "Body Care",
        subtitle: "Velvet Cleansers & Exfoliants",
        description: "Organic Arabica coffee scrubs, crushed walnut polishes, and virgin coconut body washes to revitalize every inch of your skin from neck to toe.",
        banner: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1600&q=80"
    },
    {
        slug: "haircare",
        title: "Holistic Scalp & Hair Health",
        category: "Haircare",
        subtitle: "Follicular Vitality",
        description: "Apple cider vinegar scalp detoxifiers, rosemary density drops, and cold-pressed argan masques to resurrect stressed strands and preserve natural elasticity.",
        banner: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1600&q=80"
    },
    {
        slug: "gift-sets",
        title: "Curated Luxury Gift Boxes",
        category: "Gift Sets",
        subtitle: "Artisanal Elegance",
        description: "Hand-assembled in recyclable biophotonic gift packaging. The ultimate expression of clean luxury for someone extraordinary or your own sacred self-care ritual.",
        banner: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80"
    },
    {
        slug: "wellness",
        title: "Restorative Aromatherapy & Wellness",
        category: "Wellness",
        subtitle: "Mindful Inner Equilibrium",
        description: "French lavender bath crystals, calming sleeping drops, and pure essential oil roll-ons formulated to restore tranquility to modern hurried lives.",
        banner: "https://images.unsplash.com/photo-1512290900672-1f02e604f326?auto=format&fit=crop&w=1600&q=80"
    }
];

const CollectionsPage = () => {
    const { category } = useParams();
    const dispatch = useDispatch();

    const activeCollection = collectionDefinitions.find(
        (c) => c.slug.toLowerCase() === (category || '').toLowerCase()
    ) || collectionDefinitions[0];

    const currentCategoryName = category ? activeCollection.category : null;

    const displayProducts = currentCategoryName
        ? store.filter((p) => p.category === currentCategoryName && p.type !== 'iGPosts')
        : store.filter((p) => (p.isFeatured || p.isBestSeller) && p.type !== 'iGPosts');

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        dispatch(cartActions.addItemToCart({
            id: product.id,
            price: product.price,
            title: product.name,
            image: product.primaryImage,
            category: product.category,
        }));
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name={category ? activeCollection.title : "All Curated Collections"} />
                </div>
            </div>

            {/* Collection Tabs Header */}
            <div className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                    Curated Rituals
                </span>
                <h1 className="text-4xl md:text-5xl font-serif text-[#162720] tracking-wide mb-6">
                    {category ? activeCollection.title : "Signature Apothecary Collections"}
                </h1>

                {/* Collection Selector Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    <Link
                        to="/collections"
                        className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                            !category
                                ? 'bg-[#1a2e26] text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        All Collections
                    </Link>
                    {collectionDefinitions.map((col) => (
                        <Link
                            key={col.slug}
                            to={`/collections/${col.slug}`}
                            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                                category === col.slug
                                    ? 'bg-[#1a2e26] text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {col.title.split(' ')[0]}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Hero Banner for Active Collection */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[360px] flex items-center">
                    <img
                        src={activeCollection.banner}
                        alt={activeCollection.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111f18]/90 via-[#192b23]/70 to-transparent" />
                    <div className="relative z-10 p-8 sm:p-14 max-w-xl text-white">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#a3c9a8] font-bold block mb-2">
                            {activeCollection.subtitle}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4">
                            {activeCollection.title}
                        </h2>
                        <p className="text-sm text-gray-200 leading-relaxed mb-6">
                            {activeCollection.description}
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block px-6 py-3 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                        >
                            Explore Entire Catalog →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Products in this Collection */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-serif text-gray-900">
                            {category ? `${activeCollection.title} Products` : "Featured Rituals"}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                            {displayProducts.length} formulations crafted with 100% active botanicals
                        </p>
                    </div>
                    <Link to="/shop" className="text-xs font-semibold tracking-wider text-[#2b4c3e] hover:underline uppercase">
                        View All In Store →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {displayProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <Link to={`/${product.id}`} className="block overflow-hidden aspect-square bg-[#f5f4ef]">
                                <HoverImage
                                    src={product.primaryImage}
                                    hoverSrc={product.hoverImg || product.primaryImage}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    alt={product.name}
                                />
                            </Link>

                            <div className="p-5 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                                        {[...Array(product.stars || 5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <Link to={`/${product.id}`}>
                                        <h4 className="font-serif text-base text-gray-900 font-semibold group-hover:text-[#2b4c3e] transition-colors line-clamp-1">
                                            {product.name}
                                        </h4>
                                    </Link>
                                    <p className="text-gray-500 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                                        {product.descr || "Cold-pressed pure botanical formula delivering rich nutrients and lasting glow."}
                                    </p>
                                </div>

                                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-lg font-serif font-bold text-[#192b23]">
                                        ${product.price}
                                    </span>
                                    <button
                                        onClick={(e) => handleAddToCart(product, e)}
                                        className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-[#1a2e26] hover:bg-[#2b4c3e] text-white flex items-center gap-1.5 transition-colors shadow-sm"
                                    >
                                        <FaShoppingBag className="text-[10px]" /> Add to Bag
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default CollectionsPage;

