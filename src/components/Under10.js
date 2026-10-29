import React, { useState } from 'react';
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import {
    Breadcrumb,
    BreadcrumbItem,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import filterBtn from "../assets/filterBtn.png";
import { store } from "../productsStore/Store";
import HoverImage from 'react-hover-image/build';
import JournalSection from "./JournalSection";

import { FaShippingFast, FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";
import SPFooter from './SPFooter';

const Under10 = () => {
    const [filter, SetFilter] = useState(false);
    const [bodyLotionShow, SetBodyLotionShow] = useState(false);
    const [bodyScrubShow, SetBodyScrubShow] = useState(false);
    const [bodyWashShow, SetBodyWashShow] = useState(false);
    const [allShow, SetAllShow] = useState(true);

    const filterShowHandler = () => {
        SetFilter(!filter);
    };

    const bodyLotionHandler = () => {
        SetBodyLotionShow(true);
        SetAllShow(false);
        SetBodyScrubShow(false);
        SetBodyWashShow(false);
    };

    const bodyWashHandler = () => {
        SetBodyWashShow(true);
        SetAllShow(false);
        SetBodyLotionShow(false);
        SetBodyScrubShow(false);
    };

    const bodyScrubHandler = () => {
        SetBodyScrubShow(true);
        SetAllShow(false);
        SetBodyLotionShow(false);
        SetBodyWashShow(false);
    };

    const allShowHandler = () => {
        SetAllShow(true);
        SetBodyLotionShow(false);
        SetBodyScrubShow(false);
        SetBodyWashShow(false);
    };

    const bodyLotionProducts = store.filter(item => item.category === "bodyLotion" && item.price <= 10);
    const bodyWashProducts = store.filter(item => item.category === "bodyWash" && item.price <= 10);
    const bodyScrubProducts = store.filter(item => item.category === "bodyScrub" && item.price <= 10);

    const renderProductCard = (item) => (
        <div key={item.id} className='card w-96 bg-base-100 shadow-xl'>
            <Link to={`/${item.id}`}>
                <figure className="px-10 pt-10">
                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} alt={item.name} className="w-32 u20img" />
                </figure>
            </Link>
            <div className="card-body items-center text-center">
                <h2 className=" mb-1 fof text-lg font-semibold">{item.name}</h2>
                <Link to={`/${item.id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary knmBtn">Know More </button>
                        <p className='btnLine relative bg-black h-8'></p>
                        <h2 className=" text-xl mb-2 fof u20Price">${item.price}</h2>
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div className='u20MainParent fof '>
            <div className='u20Hold'>
                <img src={u20bg} alt="Gifts Under 10 Banner" className="u20Pic" />
            </div>

            <div className='u20HeadingHold gap-20 justify-center relative flex flex-col'>
                <p className='u20Heading'>Botanical Essentials Under $10 </p>
                <p className='u20Desc'> Explore Aura Botanics handcrafted 100% natural and vegan skincare and botanical haircare under $10.</p>
            </div>

            <div className='u20BreadCrumbHold absolute text-sm'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon />}>
                    <BreadcrumbItem>
                        <Link to={`/`}>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to={`/under10`}>Under 10</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='filterSortHold flex flex-row gap-8 absolute text-left'>
                <img src={filterBtn} alt="Filter Products" className=" w-36 cursor-pointer scale" onClick={filterShowHandler} />
            </div>

            <div className='filterOptionsHold relative'>
                {filter && (
                    <div className='flex rounded-xl gap-8 flex-col boxSh fof absolute '>
                        <p className='ml-12 scale cursor-pointer' onClick={bodyLotionHandler}> Body Lotion</p>
                        <p className='ml-12 scale cursor-pointer' onClick={bodyWashHandler}> Body Wash </p>
                        <p className='ml-12 scale cursor-pointer' onClick={bodyScrubHandler}> Body Scrub </p>
                        <p className='ml-12 scale cursor-pointer text-white' onClick={allShowHandler}> All Products </p>
                    </div>
                )}
            </div>

            {/* ALL PRODUCTS UNDER 10 */}
            {allShow && (
                <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                    {store
                        .filter(item => item.price <= 10 || (item.type && item.type.includes("all")))
                        .map(renderProductCard)}
                </div>
            )}

            {/* BODY LOTION */}
            {bodyLotionShow && (
                <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                    {bodyLotionProducts.map(renderProductCard)}
                </div>
            )}

            {/* BODY WASH */}
            {bodyWashShow && (
                <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                    {bodyWashProducts.map(renderProductCard)}
                </div>
            )}

            {/* BODY SCRUB */}
            {bodyScrubShow && (
                <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
                    {bodyScrubProducts.map(renderProductCard)}
                </div>
            )}

            <div className='u20Js relative'>
                <JournalSection />
            </div>

            <div className='u20Featyres relative'>
                <div className='u20FeaturesHold flex flex-row relative'>
                    <FaShippingFast className='w-16 h-20' />
                    <FaLock className='w-12 h-16' />
                    <BsCurrencyDollar className='w-16 h-20' />
                    <img src={better} alt="Satisfaction Guarantee" className="w-20" />
                </div>

                <div className='u20TextFeatureHold fof flex flex-row relative uppercase'>
                    <p> 2 DAY DELIVERY </p>
                    <p> secure checkout </p>
                    <p> royalty points </p>
                    <p> easy returns </p>
                </div>
            </div>

            <div className='relative u20footer'>
                <SPFooter />
            </div>
        </div>
    );
};

export default Under10;
