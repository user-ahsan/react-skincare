/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Mobile responsive journal single view.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const MobileJournalSinglePage = () => {
    return (
        <div className="p-4 bg-[#faf9f6]">
            <Link to="/journal" className="text-xs uppercase text-emerald-800 font-bold mb-4 block">
                ← Back to Journal
            </Link>
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Aura Botanics Botanical Care Standards
            </h1>
            <p className="text-xs text-gray-500 mb-4">By Ahsan Sheikh • Pure Organic Formulations</p>
            <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                alt="Aura Botanics"
                className="w-full rounded-xl mb-4"
            />
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Every bottle from Aura Botanics represents our unyielding commitment to purity, sustainability, and clinical plant efficacy. Hand-formulated and tested under rigorous green chemistry protocols.
            </p>
        </div>
    );
};

export default MobileJournalSinglePage;
