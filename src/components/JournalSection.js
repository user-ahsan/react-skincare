/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Editorial wellness journal showcase on the homepage linking to deep articles.
 */

import React from "react";
import "../styles/JournalSection.css";
import { Link } from "react-router-dom";

const JournalSection = () => {
  return (
    <div className="jsMainParent mt-28">
      <div className="jsLeft">
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-[#2d4b3e] font-bold">
            The Aura Journal
          </span>
          <h2 className="text-3xl font-serif text-[#162720] mt-1">
            Holistic Wellness & Clean Beauty
          </h2>
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
          Immerse yourself in our botanical sanctuary. From seasonal skincare
          rituals and cold-pressed botanical ingredient studies to sustainable
          living philosophies curated by Ahsan Sheikh and our apothecary
          herbalists.
        </p>

        <Link to="/journal">
          <button className="readBtn mt-6 bg-[#1a2e26] hover:bg-[#2b4c3e] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md">
            READ THE JOURNAL
          </button>
        </Link>
      </div>

      <div className="jsRight flex flex-row gap-8">
        <Link to="/journal/april" className="group">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
              alt="Protective Haircare & Scalp Health"
              className="jsImg rounded-xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-3 font-serif font-semibold text-sm text-[#192b23] group-hover:text-emerald-700 transition-colors">
            PROTECTIVE BOTANICAL HAIRCARE: SCALP HEALTH & RITUALS
          </p>
          <span className="text-[11px] text-gray-400">
            5 min read • By Ahsan Sheikh
          </span>
        </Link>

        <Link to="/journal/daily-skincare-ritual" className="group">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80"
              alt="Morning to Night Skincare Ritual"
              className="jsImg rounded-xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="mt-3 font-serif font-semibold text-sm text-[#192b23] group-hover:text-emerald-700 transition-colors">
            THE 5-STEP MORNING TO NIGHT BOTANICAL SKINCARE RITUAL
          </p>
          <span className="text-[11px] text-gray-400">
            7 min read • Editorial
          </span>
        </Link>
      </div>
    </div>
  );
};

export default JournalSection;
