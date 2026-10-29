/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Luxury editorial press quotes ticker marquee on the storefront.
 */

import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

const pressQuotes = [
    { outlet: "Vogue", text: "The gold standard of green luxury skincare." },
    { outlet: "Harper's Bazaar", text: "Uncompromising apothecary craftsmanship in biophotonic glass." },
    { outlet: "Elle Magazine", text: "Best botanical restorative ritual formulation of 2026." },
    { outlet: "Vanity Fair", text: "Proves high luxury and carbon-negative ethics are one and the same." },
    { outlet: "Wallpaper*", text: "Masterpiece of aesthetic botanical design by Ahsan Sheikh." }
];

const PressMarquee = () => {
    return (
        <section className="py-6 bg-[#f4f1ea] border-y border-[#e2dbce] overflow-hidden">
            <Marquee speed={45} pauseOnHover={true} gradient={false}>
                <div className="flex items-center gap-12 text-[#243b2f]">
                    {pressQuotes.map((q, idx) => (
                        <div key={idx} className="flex items-center gap-3 whitespace-nowrap pl-6">
                            <span className="font-serif font-bold text-sm tracking-widest uppercase text-[#162720]">
                                {q.outlet}
                            </span>
                            <span className="text-xs italic text-gray-600">"{q.text}"</span>
                            <FaStar className="text-[#a3c9a8] text-[8px] ml-3" />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default PressMarquee;
