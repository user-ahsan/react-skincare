/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Best sellers mega-menu dropdown showcasing top-rated formulations.
 */

import React from 'react';
import { store } from '../productsStore/Store';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const BestSellers = ({ onClose }) => {
  const bestSellers = store
    .filter((item) => item.type === "bestSeller" || item.isBestSeller)
    .slice(0, 4);

  return (
    <div className="w-[840px] bg-white rounded-2xl shadow-2xl p-6 border border-[#e5dfd3] relative z-50">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#2b4c3e] font-bold block">
            Most Loved Formulations
          </span>
          <h3 className="text-base font-serif font-bold text-[#192b23]">
            Curated Best Sellers
          </h3>
        </div>
        <Link
          to="/shop?category=Skincare"
          onClick={onClose}
          className="text-xs text-[#2b4c3e] hover:underline font-semibold flex items-center gap-1"
        >
          View All Best Sellers →
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {bestSellers.map((item) => (
          <Link
            to={`/${item.id}`}
            key={item.id}
            onClick={onClose}
            className="group block text-center"
          >
            <div className="w-full aspect-square bg-[#f5f2ea] rounded-xl overflow-hidden mb-3 p-2 flex items-center justify-center border border-gray-100 group-hover:border-[#a3c9a8] transition-all group-hover:shadow-md">
              <HoverImage
                src={item.primaryImage}
                hoverSrc={item.hoverImg || item.primaryImage}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-amber-500 mb-1">
              <FaStar />
              <span className="text-gray-500 font-medium">({item.stars || 5}.0)</span>
            </div>
            <p className="text-xs font-serif font-semibold text-[#192b23] group-hover:text-[#2b4c3e] transition-colors line-clamp-1 mb-1">
              {item.name}
            </p>
            <p className="text-xs font-bold text-gray-800">
              ${item.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
