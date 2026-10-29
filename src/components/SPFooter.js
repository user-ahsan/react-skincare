/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Premium luxury e-commerce footer component with brand story, newsletter,
 * social links, and engineering attribution.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCheckCircle, FaLeaf } from 'react-icons/fa';

const SPFooter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() && email.includes('@')) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    return (
        <footer className="bg-[#192b23] text-[#e8eee9] pt-16 pb-10 border-t border-[#2d463b] w-full font-sans">
            {/* Top Newsletter & Brand Mission Banner */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14">
                <div className="bg-[#22392f] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#2d4b3e] shadow-xl">
                    <div className="text-center lg:text-left max-w-xl">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-[#a3c9a8] mb-2 font-medium tracking-widest text-xs uppercase">
                            <FaLeaf /> 100% Pure Botanical Formulations
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-2">
                            Unlock 20% Off Your First Ritual
                        </h3>
                        <p className="text-[#b5c7bc] text-sm leading-relaxed">
                            Subscribe to the Aura Botanics wellness journal for exclusive seasonal drops, skincare formulations, and sustainability reports by Ahsan Sheikh.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-5 py-3 rounded-full bg-[#162720] border border-[#3b594b] text-white placeholder-gray-400 focus:outline-none focus:border-[#a3c9a8] text-sm min-w-[260px]"
                            required
                        />
                        <button
                            type="submit"
                            className="px-7 py-3 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg transform active:scale-95"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {subscribed && (
                    <div className="mt-4 p-3 bg-emerald-800/80 text-emerald-100 rounded-lg text-center text-sm flex items-center justify-center gap-2">
                        <FaCheckCircle className="text-emerald-300" /> Welcome to the family! Use promo code <span className="font-bold underline">AHSAN20</span> at checkout for 20% off.
                    </div>
                )}
            </div>

            {/* Navigation Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-14 text-sm">
                {/* Column 1: Brand Info */}
                <div className="col-span-2 lg:col-span-2 pr-4">
                    <Link to="/" className="inline-block mb-4">
                        <span className="text-2xl font-serif tracking-widest text-white font-medium uppercase">
                            AURA BOTANICS
                        </span>
                        <span className="block text-[10px] tracking-widest text-[#a3c9a8] uppercase font-sans">
                            Pure Organic Luxury • by Ahsan Sheikh
                        </span>
                    </Link>
                    <p className="text-[#a8beae] text-xs leading-relaxed mb-6 max-w-sm">
                        Consciously formulated in small batches with certified organic, wild-harvested botanicals. Packaged in 100% recyclable biophotonic glass. Zero artificial fragrances, parabens, or animal testing.
                    </p>
                    <div className="flex gap-3 text-lg">
                        <a
                            href="https://github.com/user-ahsan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#22392f] hover:bg-[#a3c9a8] hover:text-[#13221c] flex items-center justify-center text-[#b8cfbf] transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:ahsansheikhoffice@gmail.com"
                            className="w-9 h-9 rounded-full bg-[#22392f] hover:bg-[#a3c9a8] hover:text-[#13221c] flex items-center justify-center text-[#b8cfbf] transition-colors"
                            aria-label="Email Ahsan Sheikh"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#22392f] hover:bg-[#a3c9a8] hover:text-[#13221c] flex items-center justify-center text-[#b8cfbf] transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#22392f] hover:bg-[#a3c9a8] hover:text-[#13221c] flex items-center justify-center text-[#b8cfbf] transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Column 2: Collections */}
                <div>
                    <h4 className="text-white font-serif text-sm font-bold tracking-[0.2em] uppercase pb-2.5 mb-4 border-b border-[#355745] flex items-center justify-between">
                        <span>COLLECTIONS</span>
                        <span className="text-[#a3c9a8] text-xs">🌿</span>
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                BY CATEGORY
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/collections/skincare" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Face & Skincare</Link></li>
                                <li><Link to="/collections/body" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Botanical Body Wash</Link></li>
                                <li><Link to="/collections/haircare" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Pure Scalp & Hair</Link></li>
                                <li><Link to="/collections/aromatherapy" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Aromatherapy Living</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                CURATED SETS
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/collections/gift-sets" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Luxury Gift Boxes</Link></li>
                                <li><Link to="/under20" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Under $20 Essentials</Link></li>
                                <li><Link to="/under40" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Under $40 Bundles</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 3: The Brand */}
                <div>
                    <h4 className="text-white font-serif text-sm font-bold tracking-[0.2em] uppercase pb-2.5 mb-4 border-b border-[#355745] flex items-center justify-between">
                        <span>THE BRAND</span>
                        <span className="text-[#a3c9a8] text-xs">🌸</span>
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                APOTHECARY STORY
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/about" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Philosophy & Story</Link></li>
                                <li><Link to="/ingredients" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Botanical Glossary (A–Z)</Link></li>
                                <li><Link to="/locations" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Global Boutique Ateliers</Link></li>
                                <li><Link to="/sustainability" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Sustainability Pledge</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                EDITORIAL & CULTURE
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/journal" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Wellness Journal</Link></li>
                                <li><Link to="/press" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Press & Media Kit</Link></li>
                                <li><Link to="/reviews" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Verified Reviews</Link></li>
                                <li><Link to="/careers" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Atelier Careers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 4: Client Services & Rituals */}
                <div>
                    <h4 className="text-white font-serif text-sm font-bold tracking-[0.2em] uppercase pb-2.5 mb-4 border-b border-[#355745] flex items-center justify-between">
                        <span>CLIENT CARE</span>
                        <span className="text-[#a3c9a8] text-xs">✨</span>
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                RITUAL CONCIERGE
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/quiz" className="text-white bg-[#2b4c3e] px-2.5 py-1 rounded-md text-[11px] font-bold hover:bg-[#396351] inline-flex items-center gap-1.5 transition-all shadow-sm"><span className="text-[#a3c9a8]">★</span> Routine Quiz (15% Off)</Link></li>
                                <li><Link to="/rewards" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> VIP Rewards Circle</Link></li>
                                <li><Link to="/gift-cards" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Digital Gift Cards</Link></li>
                                <li><Link to="/track-order" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Live Order Tracker</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[#a3c9a8] tracking-widest uppercase block mb-1.5">
                                HELP & POLICIES
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li><Link to="/faq" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Help Center & FAQ</Link></li>
                                <li><Link to="/shipping-policy" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Shipping & Returns</Link></li>
                                <li><Link to="/contact" className="text-[#d8e8dc] hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all font-medium"><span className="text-[#a3c9a8] text-[9px]">•</span> Contact Concierge</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Attribution */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#263e32] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8ca392]">
                <div className="flex items-center gap-2 text-center md:text-left">
                    <span>© {new Date().getFullYear()} Aura Botanics LLC. All rights reserved.</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-[#a3c9a8] font-medium flex items-center gap-1">
                        Designed & Engineered with <FaHeart className="text-red-400 text-[10px]" /> by Ahsan Sheikh
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <span className="text-[11px] text-[#7d9583]">ahsansheikhoffice@gmail.com</span>
                    <Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link>
                    <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link to="/terms" className="hover:underline">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default SPFooter;
