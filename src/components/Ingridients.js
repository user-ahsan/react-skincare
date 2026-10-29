/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master ingredients showcase featuring pure organic botanical icons.
 */

import React from 'react';
import "../styles/Ingridients.css";

import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";

const Ingridients = () => {
    return (
        <div className='ingMainParent'>
            <div className="text-center mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                    Apothecary Standards
                </span>
                <h2 className='text-4xl ogtext font-serif font-medium text-center text-[#162720]'>
                    OUR CERTIFIED BOTANICAL INGREDIENTS
                </h2>
                <p className="text-xs text-gray-500 max-w-md mx-auto mt-2">
                    Pure cold-pressed extracts, living phytonutrients, and zero synthetic fillers.
                </p>
            </div>

            <div className='ingImgHold flex flex-row gap-36 justify-center'>
                <img src={ing1} className="zoom2" alt="100% All Natural Botanicals" />
                <img src={ing2} className="zoom2" alt="Cold-Pressed Vegetable Extracts" />
                <img src={ing3} className="zoom2" alt="Antioxidant Fruit Actives" />
                <img src={ing4} className="zoom2" alt="100% Vegan & Cruelty-Free" />
                <img src={ing5} className="zoom2" alt="Pure Steam-Distilled Essential Oils" />
                <img src={ing6} className="zoom2" alt="Wild-Harvested Botanical Herbs" />
            </div>

            <div className='ingTextHold flex flex-row gap-32 justify-center font-serif text-sm font-semibold text-[#1a2e26]'>
                <p>All Natural</p>
                <p>Pure Flora</p>
                <p>Active Fruits</p>
                <p>100% Vegan</p>
                <p>Essential Oils</p>
                <p>Botanicals</p>
            </div>

            <br /><br /><br /><br />
        </div>
    );
};

export default Ingridients;
