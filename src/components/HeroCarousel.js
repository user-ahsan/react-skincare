/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Hero carousel featuring custom bespoke luxury banners and action CTAs.
 */

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLeaf } from "react-icons/fa";

const slides = [
  {
    id: 1,
    tag: "Apothecary Atelier • By Ahsan Sheikh",
    title: "Pure Botanical Nutrition For Living Glow",
    subtitle: "Cold-pressed certified organic skincare and wild-harvested restorative elixirs.",
    ctaText: "Shop Best Sellers",
    ctaLink: "/shop",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 2,
    tag: "Conscious Green Science",
    title: "Nourish Your Skin As Nature Intended",
    subtitle: "Zero artificial fragrances, parabens, sulfates, or micro-plastics.",
    ctaText: "Explore Skincare",
    ctaLink: "/collections/skincare",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 3,
    tag: "Mindful Body & Scalp Sanctuary",
    title: "Elevate Your Sacred Daily Ritual",
    subtitle: "French lavender crystals, organic coffee scrubs, and botanical scalp detoxifiers.",
    ctaText: "Discover Collections",
    ctaLink: "/collections",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85"
  },
  {
    id: 4,
    tag: "Earth Regeneration",
    title: "Sustainable Luxury In Biophotonic Glass",
    subtitle: "100% recyclable amber vessels & one tree planted for every ritual ordered.",
    ctaText: "Our Sustainability Story",
    ctaLink: "/sustainability",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1920&q=85"
  }
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: true,
      dots: true,
    };

    return (
      <div className="carousel-contain mt-24 mb-10 w-full overflow-hidden">
        <Slider {...settings}>
          {slides.map((s) => (
            <div key={s.id} className="relative">
              <div className="relative h-[480px] sm:h-[560px] md:h-[620px] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111f18]/90 via-[#182921]/60 to-transparent" />
                <div className="absolute inset-0 bg-black/10" />

                {/* Banner Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 w-full">
                    <div className="max-w-2xl text-white space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#192b23]/80 backdrop-blur-md border border-[#2e4c3e] text-[#a3c9a8] text-[11px] font-semibold tracking-widest uppercase">
                        <FaLeaf /> {s.tag}
                      </div>

                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide">
                        {s.title}
                      </h1>

                      <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed font-sans font-light">
                        {s.subtitle}
                      </p>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          to={s.ctaLink}
                          className="px-8 py-3.5 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#111f18] font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform active:scale-95"
                        >
                          {s.ctaText} <FaArrowRight className="text-[10px]" />
                        </Link>
                        <Link
                          to="/about"
                          className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-xs tracking-widest uppercase transition-all"
                        >
                          Founder Story
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
