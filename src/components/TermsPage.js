/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Terms of service and purchase conditions for Aura Botanics.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Terms of Service" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-10 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Legal Agreement
                    </span>
                    <h1 className="text-4xl font-serif text-[#162720] tracking-wide mb-2">
                        Terms of Service
                    </h1>
                    <p className="text-xs text-gray-500">Effective Date: October 2026 | Engineered by Ahsan Sheikh</p>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d5] shadow-sm space-y-8 text-xs text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or shopping at Aura Botanics, you agree to be bound by these Terms of Service and all applicable local, national, and international trade laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">2. Botanical Formulations & Patch Testing</h2>
                        <p>
                            Our formulations are handcrafted with 100% active organic extracts and unrefined cold-pressed seed oils. While free from synthetic irritants and artificial fragrances, wild plant extracts can occasionally trigger sensitivities in certain individuals. We strongly recommend performing a 24-hour patch test on the inner forearm prior to full ritual application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">3. Pricing & Currency</h2>
                        <p>
                            All product prices are quoted in USD unless otherwise specified. Aura Botanics reserves the right to modify prices, update promotional codes (e.g. AHSAN20, AHSAN30), or discontinue seasonal batches without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">4. Intellectual Property</h2>
                        <p>
                            All brand assets, software architecture, photography, formulation descriptions, and editorial articles are the exclusive intellectual property of Ahsan Sheikh and Aura Botanics LLC. All rights reserved.
                        </p>
                    </section>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default TermsPage;

