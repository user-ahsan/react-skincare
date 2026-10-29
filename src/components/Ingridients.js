/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master ingredients showcase featuring pure organic botanical icons.
 */

import React from 'react';
import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";

const ingredientsList = [
    { id: 1, img: ing1, title: "All Natural", desc: "100% Pure Plant Actives" },
    { id: 2, img: ing2, title: "Pure Flora", desc: "Cold-Pressed Extracts" },
    { id: 3, img: ing3, title: "Active Fruits", desc: "Antioxidant Rich" },
    { id: 4, img: ing4, title: "100% Vegan", desc: "Cruelty-Free Certified" },
    { id: 5, img: ing5, title: "Essential Oils", desc: "Steam-Distilled Aromatics" },
    { id: 6, img: ing6, title: "Botanicals", desc: "Wild-Harvested Herbs" },
];

const Ingridients = () => {
    return (
        <section className="py-20 px-6 bg-[#faf9f6] border-b border-[#ece7de] w-full">
            <div className="max-w-4xl mx-auto text-center mb-14">
                <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-2">
                    Apothecary Standards
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#162720] tracking-wide mb-3">
                    OUR CERTIFIED BOTANICAL INGREDIENTS
                </h2>
                <p className="text-sm text-gray-500 max-w-lg mx-auto">
                    Pure cold-pressed extracts, living phytonutrients, and zero synthetic fillers or irritants.
                </p>
            </div>

            {/* 6 Ingredients Grid: Perfectly Centered & Aligned */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
                {ingredientsList.map((item) => (
                    <div
                        key={item.id}
                        className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white border border-transparent hover:border-[#ded8cc] transition-all hover:shadow-md"
                    >
                        <div className="w-20 h-20 rounded-full bg-[#f4f1ea] group-hover:bg-[#eaf1ec] flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 shadow-inner">
                            <img
                                src={item.img}
                                className="w-12 h-12 object-contain"
                                alt={item.title}
                            />
                        </div>
                        <h3 className="font-serif font-bold text-sm text-[#192b23] mb-1">
                            {item.title}
                        </h3>
                        <p className="text-[11px] text-gray-500 font-sans leading-tight">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ingridients;
