/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Hero brand values and pillars showcase with pure botanical guarantees.
 */

import React from 'react';
import "../styles/HeroSection.css";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>
            <p className='text-4xl mt-20 text-center welcomStore font-serif tracking-wide text-[#162720]'>
                WELCOME TO AURA BOTANICS
            </p>
            <br />
            <br />

            <p className='heroDescription relative text-xl flex flex-wrap text-gray-700 leading-relaxed font-sans'>
                The conscious luxury skincare house setting a transformative standard. Handcrafted organic formulations engineered to restore your natural glow and awaken cellular vitality.
            </p>

            <div className='heroPicHold flex flex-row '>
                <img src={one} className=" w-20" alt="Powered By Nature" />
                <img src={two} className=" w-20" alt="Exceptional Quality" />
                <img src={three} className=" w-20" alt="Skin First Formulas" />
            </div>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold font-serif text-[#1a2e26]'>
                <p> Powered By Nature </p>
                <p> Clinical Plant Efficacy </p>
                <p> Pure Biophotonic Purity </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal text-gray-600'>
                <p> 100% certified organic, cold-pressed <br /> botanicals and wild herbs. </p>
                <p> Dermatologist-approved barrier repair <br /> without synthetic additives. </p>
                <p> Packaged in zero-waste violet glass <br /> to preserve living nutrients. </p>
            </div>
        </div>
    );
};

export default HeroSection;
