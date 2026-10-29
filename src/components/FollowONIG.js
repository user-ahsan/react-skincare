/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Curated social lifestyle feed with high-res community visuals and hover effects.
 */

import React from 'react';
import "../styles/FollowONIG.css";
import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";

const communityImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    tag: "@aurabotanics.by.ahsan"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    tag: "#AuraRitual"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    tag: "#PureBotanics"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    tag: "#CleanBeauty"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    tag: "#OrganicGlow"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    tag: "#SustainableApothecary"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1512290900672-1f02e604f326?auto=format&fit=crop&w=600&q=80",
    tag: "#RoseGoldRitual"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    tag: "#PlantPotency"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1567928805192-d35d641494b8?auto=format&fit=crop&w=600&q=80",
    tag: "#CoffeeScrubGlow"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    tag: "#ConsciousLuxury"
  }
];

const FollowONIG = () => {
  return (
    <div className='flex flex-col gap-6 mt-36 mb-28 w-full overflow-hidden'>
      <div className="text-center px-4">
        <span className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#2d4b3e] font-semibold mb-2">
          <FaInstagram className="text-base" /> Join Our Community
        </span>
        <h2 className='text-3xl font-serif text-[#162720] tracking-wider uppercase'>
          FOLLOW US ON INSTAGRAM
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Tag @aurabotanics.by.ahsan to be featured in our botanical gallery
        </p>
      </div>

      <div className='followOnInstaMarqueeConatiner mt-4'>
        <Marquee pauseOnHover={true} speed={55} gradient={false}>
          {communityImages.map((img) => (
            <div
              key={img.id}
              className="relative mx-3 group overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.tag}
                className='w-64 h-64 object-cover rounded-2xl carouselIMg transform group-hover:scale-105 transition-all duration-500'
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <FaInstagram className="text-3xl mb-2" />
                <span className="text-xs font-semibold tracking-wider">{img.tag}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FollowONIG;
