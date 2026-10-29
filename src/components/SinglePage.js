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
import "../styles/SinglePage.css";
import { AiFillStar } from "react-icons/ai";
import SinglePageFAQ from './SinglePageFAQ';
import AutoPlayMethods from './SingleAlsoLike';
import JournalSection from "./JournalSection";
import SearchBox from './SearchBox';
import Review1 from './Review1';
import { FaShippingFast, FaLock, FaHeart, FaRegHeart, FaCheck } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import SPFooter from './SPFooter';
import { GiCardboardBoxClosed } from "react-icons/gi";
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
        <div className='singlePageMainParent relative top-36 bg-[#faf9f6] pb-24'>
            <div className="bgGrey h-14 sinLih border-b border-gray-200">
                <BreadCrumb name={name} />
            </div>

            {/* Main Product Showcase Picture */}
            <figure className='singlePageMainPicHold relative'>
                <img
                    src={activeImg}
                    alt={name}
                    className="w-48 cursor-pointer rounded-2xl object-cover singlePageMainPic shadow-md"
                />
            </figure>

            {/* Dynamic Interactive Gallery Side Thumbnails */}
            <div className='sideImageHold flex flex-col relative gap-4'>
                {galleryImages.slice(0, 2).map((imgUrl, idx) => (
                    <img
                        key={idx}
                        src={imgUrl}
                        alt={`${name} angle ${idx + 1}`}
                        className={`w-32 h-32 cursor-pointer object-cover rounded-xl border-2 transition-all shadow-sm ${
                            activeImg === imgUrl ? 'border-[#2b4c3e] scale-105' : 'border-transparent hover:border-gray-300'
                        }`}
                        onClick={() => setActiveImg(imgUrl)}
                    />
                ))}
            </div>

            {/* Bottom Gallery Thumbnails */}
            <div className='bottomImgHold flex flex-row relative gap-4'>
                {galleryImages.slice(2, 4).map((imgUrl, idx) => (
                    <img
                        key={idx}
                        src={imgUrl}
                        alt={`${name} thumbnail ${idx + 1}`}
                        className={`w-32 h-32 cursor-pointer object-cover rounded-xl border-2 transition-all shadow-sm ${
                            activeImg === imgUrl ? 'border-[#2b4c3e] scale-105' : 'border-transparent hover:border-gray-300'
                        }`}
                        onClick={() => setActiveImg(imgUrl)}
                    />
                ))}
            </div>

            {/* Product Title, Volume & Price */}
            <div className='namePriceSP relative fof flex flex-col gap-2'>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2b4c3e] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        {category || "Botanical Skincare"}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                        {volume || "150 ml / 5.1 fl oz"}
                    </span>
                </div>
                <h1 className='font-serif font-bold text-3xl text-gray-900'> {name} </h1>
                <p className='text-2xl font-serif text-[#162720] font-bold'> ${price}.00 </p>
                <p className="text-xs text-gray-600 max-w-sm leading-relaxed mt-1">
                    {descr || "Hand-formulated with cold-pressed certified organic botanicals to deeply nourish, soothe, and protect your living skin barrier."}
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold mt-1">
                    <FaCheck className="text-[10px] text-emerald-600" /> In Stock • Ships within 24h in Biophotonic Glass
                </div>
            </div>

            <p className='relative singleLinetop text-gray-200'>
                ___________________________________________________________________
            </p>

            {/* Star Rating Breakdown */}
            <div className='relative gap-2 flex starHold items-center'>
                <div className='flex text-amber-500 text-sm'>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
                <p className='font-semibold text-xs text-gray-600 ml-2'>
                    {reviews} Verified Customer Reviews
                </p>
            </div>

            {/* Loyalty Prompt */}
            <p className='font-semibold text-xs tracking-wider uppercase relative loyalty text-emerald-900'>
                ✨ Earn 50 Aura Botanics Loyalty Points with this order
            </p>

            {/* Add to Cart & Wishlist Controls */}
            <div className='spBtnHold relative flex items-center gap-4'>
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-full bg-white px-3 py-2 text-sm font-semibold">
                    <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-2 text-gray-500 hover:text-black"
                    >
                        −
                    </button>
                    <span className="px-3">{quantity}</span>
                    <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-2 text-gray-500 hover:text-black"
                    >
                        +
                    </button>
                </div>

                <button
                    className='spAddTOCart bg-[#1a2e26] hover:bg-[#2b4c3e] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg'
                    onClick={addItemToCartHandler}
                >
                    ADD TO BAG • ${(price * quantity).toFixed(2)}
                </button>

                {/* Wishlist Button */}
                <button
                    onClick={handleToggleWishlist}
                    className="p-3.5 rounded-full border border-gray-300 hover:border-red-400 bg-white text-gray-600 hover:text-red-500 transition-colors shadow-sm"
                    aria-label="Wishlist"
                >
                    {isWishlisted ? <FaHeart className="text-red-500 text-base" /> : <FaRegHeart className="text-base" />}
                </button>
            </div>

            {/* Product Accordion */}
            <div className="relative mt-8 max-w-xl left-[48rem]">
                <SinglePageFAQ />
            </div>

            <p className='fof text-4xl spText absolute text-center font-serif text-gray-900'>
                YOU MAY ALSO LIKE
            </p>
            <AutoPlayMethods />

            {/* Reviews Section */}
            <Review1 starCalc={numOfRev} rev={reviews} />

            {/* Search Box / Keyword Filtered Reviews */}
            <SearchBox />

            <div className='jsParent'>
                <JournalSection />
            </div>

            {/* Shipping & Trust Icons */}
            <div className='footerFeatures2 flex flex-row absolute text-[#2b4c3e]'>
                <FaShippingFast className='w-16 h-20 sv' />
                <FaLock className='w-12 h-16 sv2' />
                <BsCurrencyDollar className='w-16 h-20 sv' />
                <GiCardboardBoxClosed className='w-16 h-20 sv' />
            </div>

            <div className='footerFeatures2TextHold fof flex flex-row absolute uppercase text-xs text-gray-600'>
                <p> Carbon-Free 2-Day Delivery </p>
                <p> 256-bit Secure Checkout </p>
                <p> 30-Day Money Back </p>
                <p className='ml'> 100% Recyclable Glass </p>
            </div>

            <div className='spfooterHold absolute w-full'>
                <SPFooter />
            </div>
        </div>
    );
};

export default SinglePage;
