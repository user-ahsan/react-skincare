/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Shipping, returns, and carbon-neutral logistics policies.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaLeaf, FaTruck, FaBoxOpen } from 'react-icons/fa';

const ShippingPolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Shipping & Returns Policy" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-10 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Transparent Logistics
                    </span>
                    <h1 className="text-4xl font-serif text-[#162720] tracking-wide mb-2">
                        Shipping & Returns
                    </h1>
                    <p className="text-xs text-gray-500">Fast, 100% Carbon-Neutral Dispatch by Ahsan Sheikh</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm">
                        <FaLeaf className="mx-auto text-2xl text-[#2b4c3e] mb-2" />
                        <h2 className="font-serif font-bold text-sm mb-1">Carbon-Neutral</h2>
                        <p className="text-[11px] text-gray-500">Every parcel emission 100% offset via mangrove reforestation.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm">
                        <FaTruck className="mx-auto text-2xl text-[#2b4c3e] mb-2" />
                        <h2 className="font-serif font-bold text-sm mb-1">Free Over $50</h2>
                        <p className="text-[11px] text-gray-500">Complimentary priority dispatch on all qualifying orders.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm">
                        <FaBoxOpen className="mx-auto text-2xl text-[#2b4c3e] mb-2" />
                        <h2 className="font-serif font-bold text-sm mb-1">30-Day Guarantee</h2>
                        <p className="text-[11px] text-gray-500">Hassle-free botanical returns or full refund guarantee.</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d5] shadow-sm space-y-8 text-xs text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">1. Delivery Tiers & Timelines</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 text-[#162720]">
                                        <th className="py-2.5 font-semibold">Tier</th>
                                        <th className="py-2.5 font-semibold">Transit Time</th>
                                        <th className="py-2.5 font-semibold">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="py-2.5 font-medium text-black">Standard Carbon-Neutral</td>
                                        <td className="py-2.5">3–5 Business Days</td>
                                        <td className="py-2.5">Free over $50 ($5.00 flat under $50)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-medium text-black">Priority 2-Day Air</td>
                                        <td className="py-2.5">2 Business Days</td>
                                        <td className="py-2.5">$12.00</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-medium text-black">Next-Day Apothecary Express</td>
                                        <td className="py-2.5">1 Business Day (Order by 1 PM)</td>
                                        <td className="py-2.5">$25.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">2. Biophotonic Protective Packaging</h2>
                        <p>
                            All glass vessels are wrapped in 100% post-consumer FSC-certified unbleached corrugated honeycomb paper. We never use plastic bubble wrap or styrofoam peanuts. Our amber and violet bottles protect active formulations against heat spikes during transport.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">3. 30-Day Ritual Satisfaction Guarantee</h2>
                        <p>
                            If a botanical formulation does not harmonize with your skin within 30 days, simply contact our concierge team at <a href="mailto:ahsansheikhoffice@gmail.com" className="text-[#2b4c3e] underline font-semibold">ahsansheikhoffice@gmail.com</a>. We will provide a pre-paid return label and issue a full refund to your original payment method.
                        </p>
                    </section>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default ShippingPolicyPage;
