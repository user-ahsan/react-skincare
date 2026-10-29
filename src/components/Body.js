/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Interactive mega-menu tab component showcasing Body, Hair, Travel, and New categories.
 */

import React, { useState } from 'react';
import "../styles/Body.css";
import { store } from '../productsStore/Store';
import HoverImage from "react-hover-image/build";
import { Link } from 'react-router-dom';

const Body = () => {
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const showHandler = () => {
        setShow(true);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    };

    const showHandler2 = () => {
        setShow(false);
        setShow2(true);
        setShow3(false);
        setShow4(false);
    };

    const showHandler3 = () => {
        setShow(false);
        setShow2(false);
        setShow3(true);
        setShow4(false);
    };

    const showHandler4 = () => {
        setShow(false);
        setShow2(false);
        setShow3(false);
        setShow4(true);
    };

    const dontShowHandler = () => {
        setShow(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
    };

    return (
        <div>
            <div className='categoryHold flex flex-col gap-14 font-normal absolute left-16 top-11'>
                <div className='bodyHold lineHeight w-56 w56rem cursor-pointer' onMouseEnter={showHandler}>
                    <p className={`font-semibold hover-underline-animation ${show ? 'text-[#2b4c3e]' : ''}`}>BODY</p>
                </div>

                <div className='hairHold lineHeight w-56 cursor-pointer' onMouseEnter={showHandler2}>
                    <p className={`font-semibold hover-underline-animation ${show2 ? 'text-[#2b4c3e]' : ''}`}>HAIR</p>
                </div>

                <div className='travelHold w-52 lineHeight cursor-pointer' onMouseEnter={showHandler3}>
                    <p className={`font-semibold hover-underline-animation ${show3 ? 'text-[#2b4c3e]' : ''}`}>TRAVEL</p>
                </div>

                <div className='newHold lineHeight cursor-pointer' onMouseEnter={showHandler4}>
                    <p className={`font-semibold hover-underline-animation ${show4 ? 'text-[#2b4c3e]' : ''}`}>NEW</p>
                </div>
            </div>

            {show && (
                <div className='z-50 bodyContent color text-base' onMouseLeave={dontShowHandler}>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Body Wash</Link>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Body Scrub</Link>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Body Lotions</Link>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Body Oil</Link>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Hand Wash</Link>
                    <Link to="/collections/body" className="block hover:text-[#2b4c3e] transition-colors">Hand Creams</Link>

                    <div className='bodyTypeHold flex'>
                        {store.filter(item => item.type === "navbar-BodyType").map((item) => (
                            <Link to={`/${item.id}`} key={item.id}>
                                <div className="bodyTypeIndivitual group">
                                    <HoverImage
                                        src={item.primaryImage}
                                        hoverSrc={item.hoverImg}
                                        className="rounded-xl bodyTypeImage shadow-sm group-hover:shadow-md transition-shadow"
                                        alt={item.name}
                                    />
                                    <p className='text-center fs bodyTypeName font-medium mt-2'> {item.name} </p>
                                    <p className='text-center text-xs text-gray-500'>${item.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {show2 && (
                <div className='z-50 hairContent flex flex-col' onMouseLeave={dontShowHandler}>
                    <div className='hairTypeCategoryONE flex flex-col gap-8'>
                        <p className='font-bold text-xl'>CATEGORY</p>
                        <Link to="/collections/haircare" className="hover:text-[#2b4c3e]">Botanical Shampoos</Link>
                        <Link to="/collections/haircare" className="hover:text-[#2b4c3e]">Nourishing Conditioners</Link>
                        <Link to="/collections/haircare" className="hover:text-[#2b4c3e]">Scalp Treatments</Link>
                    </div>

                    <div className='hairTypeCategoryTWO flex-col flex gap-10'>
                        <p className='font-bold'>HAIR CONCERN</p>
                        <p>Deep Cleanse</p>
                        <p>Moisture Repair</p>
                        <p>Dry & Damaged</p>
                        <p>Volume & Lift</p>
                        <p>Normal & Color-Treated</p>
                    </div>

                    <div className='hairImageHold flex flex-row gap-10'>
                        <img
                            src='https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80'
                            className='rounded-xl w-52 h-44 object-cover shadow-sm'
                            alt="Botanical Haircare"
                        />
                        <img
                            src='https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80'
                            className='rounded-xl w-52 h-44 object-cover shadow-sm'
                            alt="Sustainable Routine"
                        />
                    </div>

                    <div className='hairTextHold flex flex-row relative font-semibold text-xs'>
                        <p className='flex flex-row flex-wrap w-56'>Pure Haircare: Why Cold-Pressed Extracts Win</p>
                        <p className='flex flex-row flex-wrap w-56'>Holistic scalp wellbeing with Ahsan Sheikh</p>
                    </div>
                </div>
            )}

            {show3 && (
                <div className='z-50 travelContent' onMouseLeave={dontShowHandler}>
                    <div className='flex flex-row'>
                        <div className='TravelStoreHold flex flex-row gap-16'>
                            {store.filter(item => item.type === "navbar-TravelType").map((item) => (
                                <Link to={`/${item.id}`} key={item.id}>
                                    <div className="TravelIndivitual group">
                                        <HoverImage
                                            src={item.primaryImage}
                                            hoverSrc={item.hoverImg}
                                            className="rounded-xl w-40 h-40 object-cover shadow-sm group-hover:shadow-md transition-shadow"
                                            alt={item.name}
                                        />
                                        <p className='font-semibold text-sm px mt-2'> {item.name} </p>
                                        <p className='text-sm font-medium text-center text-[#2b4c3e]'> ${item.price} </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {show4 && (
                <div className='newContent relative left-72 text-base text-gray-500 top-16' onMouseLeave={dontShowHandler}>
                    <div className='newCategoryHold flex flex-col gap-9'>
                        <p className='font-bold text-xl text-gray-800'>CATEGORY</p>
                        <Link to="/collections/skincare" className="hover:text-[#2b4c3e]">Brightening Range</Link>
                        <Link to="/collections/skincare" className="hover:text-[#2b4c3e]">Facial Masques</Link>
                        <Link to="/collections/skincare" className="hover:text-[#2b4c3e]">Rosehip Elixirs</Link>
                        <Link to="/shop" className="hover:text-[#2b4c3e] font-semibold text-black">Shop All New Arrivals →</Link>
                    </div>

                    <div className='newTypeHold relative flex flex-row gap-10'>
                        {store.filter(item => item.type === "navbar-NewType").map((item) => (
                            <Link to={`/${item.id}`} key={item.id}>
                                <div className='newIndivitual group'>
                                    <HoverImage
                                        src={item.primaryImage}
                                        hoverSrc={item.hoverImg}
                                        className="rounded-xl w-40 h-40 object-cover shadow-sm group-hover:shadow-md transition-shadow"
                                        alt={item.name}
                                    />
                                    <p className='font-semibold text-center text-sm px mt-2 text-gray-800'> {item.name} </p>
                                    <p className='text-sm font-medium text-center text-[#2b4c3e]'> ${item.price} </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Body;
