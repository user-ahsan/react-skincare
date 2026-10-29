/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Editorial wellness journal showcase on the homepage linking to deep articles.
 */

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

const journalArticles = [
  {
    slug: "april",
    title: "Protective Botanical Haircare: Scalp Health & Ancient Density Rituals",
    excerpt: "Why cold-pressed rosemary and apple cider vinegar tonics revitalize follicular vitality.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    author: "Ahsan Sheikh",
    tag: "Scalp Health"
  },
  {
    slug: "daily-skincare-ritual",
    title: "The 5-Step Morning to Night Botanical Skincare Ritual",
    excerpt: "A restorative guide to layering cold-pressed phyto-actives for long-lasting cellular radiance.",
    image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read",
    author: "Ahsan Sheikh",
    tag: "Skin Barrier"
  }
];

const JournalSection = () => {
  return (
    <section className="w-full bg-[#f4f1ea] py-20 px-6 border-b border-[#ece7de]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Journal Vision & CTA */}
        <div className="lg:col-span-4 space-y-5">
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold">
            <FaBookOpen className="text-sm" /> The Aura Journal
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#162720] leading-tight">
            Holistic Wellness & Clean Botanical Science
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Immerse yourself in our apothecary sanctuary. From seasonal skincare rituals and cold-pressed botanical studies to sustainable living philosophies curated by Ahsan Sheikh and our botanical chemists.
          </p>

          <div className="pt-2">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#192b23] hover:bg-[#2b4c3e] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:shadow-lg transform active:scale-95"
            >
              <span>Explore The Journal</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Right Columns: 2 Featured Editorial Cards (100% Centered & Visible) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {journalArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/journal/${article.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e5dfd3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e4dc]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#192b23]">
                  {article.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span>{article.readTime}</span>
                    <span>By {article.author}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#192b23] group-hover:text-[#2b4c3e] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#2b4c3e]">
                  <span>Read Article</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
