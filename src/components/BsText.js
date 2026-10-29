/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Section heading for best sellers showcase.
 */

import React from 'react';

const BsText = () => {
    return (
        <div className="text-center mt-20 mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-1">
                Customer Favorites
            </span>
            <h2 className='text-4xl font-serif font-semibold text-center text-[#162720]'>
                OUR BEST SELLERS
            </h2>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mt-2">
                Award-winning certified organic rituals formulated by Ahsan Sheikh
            </p>
        </div>
    );
};

export default BsText;
