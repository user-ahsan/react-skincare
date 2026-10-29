/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Editorial single journal article exploring protective botanical hair care and scalp rituals.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/JournalPage.css";
import hair from "../assets/hair.jpeg";
import { FaShippingFast, FaLock, FaLeaf, FaArrowLeft } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import JournalPageFooter from './JournalPageFooter';

const JournalPage = () => {
    return (
        <div className='journalPageMainParent-1'>
            <div className='journalPageMainParent'>
                <div className="pt-6 pb-2">
                    <Link to="/journal" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#2d4b3e] font-semibold hover:underline">
                        <FaArrowLeft /> Back to All Articles
                    </Link>
                </div>

                <p className='sjText'>THE AURA BOTANICS JOURNAL</p>

                <div className='paraHold absolute'>
                    <p className='text-center'>
                        Discover the art of pure plant synergy through our eyes. Skincare rituals, holistic wellbeing, and sustainability insights curated by Ahsan Sheikh.
                    </p>
                </div>

                <p className='fof text-3xl font-medium text-center absolute aprilBlogHeading'>
                    Protective Botanical Haircare: Scalp Health, Elasticity & Seasonal Tips
                </p>

                <div className='hairImgHold'>
                    <img src={hair} className="hairImg" alt='Botanical haircare ritual' />
                </div>

                <div className='jhold flex flex-col absolute text-gray-700 leading-relaxed'>
                    <p className="text-xs uppercase tracking-widest text-[#2d4b3e] font-semibold mb-2">
                        Published by Ahsan Sheikh • 6 Min Read • Botanical Hair Care
                    </p>
                    <p className="mb-6">
                        We recently formulated our new Cold-Pressed Scalp Purifier regimen, which is all about deep follicular cleansing to remove years of synthetic build-up from heavy silicones, atmospheric micro-particulates, and oxidative stressors. To cultivate lustrous, resilient hair, treating your scalp as delicate facial skin is a non-negotiable step.
                        Our formula unites organic apple cider vinegar, wild peppermint, and sustainably wild-harvested sea kelp to restore the scalp microbiome.
                    </p>

                    <p className="mb-6">
                        <li className='text-left mb-2 fof text-xl font-bold text-[#1a2e26] list-none'>
                            1. MINIMIZE HEAT & ELEVATE COLD-PRESSED SHIELDS
                        </li>
                        Have hot styling tools become a daily crutch? Thermal styling above 300°F alters the molecular matrix of alpha-keratin into brittle beta-keratin, permanently weakening the hair shaft's natural elasticity.
                        We recommend air-drying with a micro-fiber wrap and applying two drops of our Botanical Silk Serum to damp ends before sleep to lock in moisture naturally.
                    </p>

                    <p className="mb-6">
                        <li className='text-left mb-2 fof text-xl font-bold text-[#1a2e26] list-none'>
                            2. CIRCULATORY SCALP MASSAGE RITUAL
                        </li>
                        Spend 3 mindful minutes each evening performing fingertip pressure-point massage along the occipital crest and crown.
                        Pairing this gentle mechanical stimulation with rosemary and jojoba seed oil encourages nutrient delivery to the root while calming the sympathetic nervous system before sleep.
                    </p>

                    <p className="mb-6">
                        <li className='text-left mb-2 fof text-xl font-bold text-[#1a2e26] list-none'>
                            3. SLEEP ON ORGANIC MULBERRY SILK
                        </li>
                        Standard cotton pillowcases absorb the lipid moisture from your hair cuticles and generate abrasive friction as you toss.
                        Switching to pure OEKO-TEX certified mulberry silk prevents micro-tears, eliminates morning bedhead friction, and protects both hair cuticle health and facial hydration.
                    </p>

                    <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100 my-4 text-sm text-emerald-900">
                        <span className="font-bold block mb-1">Founder's Note:</span>
                        "Your hair is an energetic extension of your internal wellbeing. Treat your scalp with the same gentle, bio-compatible reverence as you would your face."
                        <span className="block mt-2 font-serif italic">— Ahsan Sheikh, Founder & Lead Engineer</span>
                    </div>
                </div>

                <div className='footerFeatures3 flex flex-row absolute'>
                    <FaShippingFast className=' w-24 h-20 widthHeight text-[#2b4c3e]' />
                    <FaLock className='w-14 h-16 widthHeight text-[#2b4c3e]' />
                    <BsCurrencyDollar className='w-24 h-20 widthHeight text-[#2b4c3e]' />
                    <FaLeaf className="w-16 h-16 widthHeight text-[#2b4c3e]" />
                </div>

                <div className='footerFeatures3TextHold fof flex flex-row absolute uppercase'>
                    <p> Carbon-Free Delivery </p>
                    <p> 256-bit Secure Checkout </p>
                    <p> 30-Day Money Back </p>
                    <p> 100% Certified Organic </p>
                </div>

                <div className='jfHold absolute'>
                    <JournalPageFooter />
                </div>
            </div>
        </div>
    );
};

export default JournalPage;
