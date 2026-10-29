/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Interactive real-time order tracking dashboard with visual milestone progress.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaSearch, FaBox, FaTruck, FaCheckCircle, FaClipboardCheck, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const sampleOrder = {
    orderId: "AB-2026-8941",
    customer: "Elena Rostova",
    status: "Out for Delivery",
    carrier: "USPS Carbon-Neutral Priority",
    trackingNumber: "9400 1118 9956 2026 8941 02",
    estimatedDelivery: "Tomorrow, by 4:00 PM EST",
    shippingAddress: "742 Evergreen Terrace, Springfield, OR 97477",
    items: [
        { name: "Botanical Foaming Cleanser (150ml)", qty: 1, price: 24 },
        { name: "Hydrating Chamomile Mist Toner (125ml)", qty: 2, price: 44 },
        { name: "Rose Gold Radiance Ritual Pack", qty: 1, price: 58 }
    ],
    total: 126.00,
    currentStep: 4 // 1 to 5
};

const OrderTrackingPage = () => {
    const [query, setQuery] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(true);
        if (query.trim().toUpperCase().includes("AB-") || query.trim().length > 3) {
            setTrackingResult({
                ...sampleOrder,
                orderId: query.trim().toUpperCase()
            });
        } else {
            setTrackingResult(sampleOrder);
        }
    };

    const handleTrySample = () => {
        setQuery("AB-2026-8941");
        setSearched(true);
        setTrackingResult(sampleOrder);
    };

    const steps = [
        { label: "Order Confirmed", icon: FaClipboardCheck, date: "Oct 27, 10:14 AM" },
        { label: "Cold-Pressed & Bottled", icon: FaLeaf, date: "Oct 27, 2:30 PM" },
        { label: "Purity & Quality Inspected", icon: FaBox, date: "Oct 28, 9:00 AM" },
        { label: "Out for Delivery", icon: FaTruck, date: "Today, 6:45 AM" },
        { label: "Delivered", icon: FaCheckCircle, date: "Pending" }
    ];

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Live Order Tracking" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-6 pt-12 pb-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Aura Botanics Dispatch
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                    Track Your Botanical Delivery
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Enter your Aura Botanics order number or carrier tracking ID to follow your organic ritual from our temperature-controlled apothecary to your doorstep.
                </p>

                {/* Tracking Input */}
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Enter Order ID (e.g. AB-2026-8941)..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#2b4c3e] bg-white text-sm shadow-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
                    >
                        Track Status
                    </button>
                </form>

                <button
                    type="button"
                    onClick={handleTrySample}
                    className="mt-3 text-xs text-[#2b4c3e] hover:underline font-medium"
                >
                    ⚡ Click to preview with demo order: <strong>AB-2026-8941</strong>
                </button>
            </div>

            {/* Tracking Result View */}
            {trackingResult && (
                <div className="max-w-5xl mx-auto px-6 pb-20 animate-fadeIn">
                    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl">
                        {/* Status Summary Banner */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-gray-100 gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="font-serif text-2xl font-bold text-gray-900">
                                        Order {trackingResult.orderId}
                                    </h2>
                                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                                        {trackingResult.status}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Carrier: <strong className="text-gray-800">{trackingResult.carrier}</strong> • Tracking #{' '}
                                    <span className="font-mono text-gray-700">{trackingResult.trackingNumber}</span>
                                </p>
                            </div>

                            <div className="md:text-right">
                                <span className="text-xs text-gray-400 uppercase tracking-wider block">Estimated Delivery</span>
                                <span className="font-serif text-lg font-bold text-[#1a2e26]">
                                    {trackingResult.estimatedDelivery}
                                </span>
                            </div>
                        </div>

                        {/* Visual Milestone Progress Timeline */}
                        <div className="py-12">
                            <div className="relative">
                                {/* Background Line */}
                                <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-1 bg-gray-200 -translate-y-1/2 z-0" />
                                <div
                                    className="hidden sm:block absolute top-1/2 left-8 h-1 bg-[#2b4c3e] -translate-y-1/2 z-0 transition-all duration-700"
                                    style={{ width: `${((trackingResult.currentStep - 1) / (steps.length - 1)) * 90}%` }}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-2 relative z-10">
                                    {steps.map((st, idx) => {
                                        const isPast = idx + 1 <= trackingResult.currentStep;
                                        const isCurrent = idx + 1 === trackingResult.currentStep;
                                        const Icon = st.icon;

                                        return (
                                            <div key={st.label} className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-2">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-base transition-all ${
                                                        isPast
                                                            ? 'bg-[#1a2e26] text-[#a3c9a8] shadow-md ring-4 ring-emerald-50'
                                                            : 'bg-gray-100 text-gray-400'
                                                    } ${isCurrent ? 'scale-110 ring-4 ring-emerald-200' : ''}`}
                                                >
                                                    <Icon />
                                                </div>
                                                <div>
                                                    <span className={`text-xs font-semibold block ${isPast ? 'text-gray-900' : 'text-gray-400'}`}>
                                                        {st.label}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 font-mono">
                                                        {st.date}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Order Details & Delivery Address */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 text-xs">
                            <div>
                                <h4 className="font-serif text-base text-gray-900 font-bold mb-3">Destination Address</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>{trackingResult.customer}</strong> <br />
                                    {trackingResult.shippingAddress}
                                </p>
                                <div className="mt-4 p-3 bg-[#faf9f6] rounded-xl border border-gray-200 text-gray-600">
                                    🌿 <strong>Carbon-Neutral Verification:</strong> This parcel is 100% offset via Ecologi reforestation credits.
                                </div>
                            </div>

                            <div>
                                <h4 className="font-serif text-base text-gray-900 font-bold mb-3">Parcel Contents</h4>
                                <ul className="divide-y divide-gray-100">
                                    {trackingResult.items.map((item, i) => (
                                        <li key={i} className="py-2 flex items-center justify-between">
                                            <span className="text-gray-700">
                                                {item.qty}x {item.name}
                                            </span>
                                            <span className="font-semibold text-gray-900">${item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-3 flex justify-between font-bold text-sm text-gray-900 border-t border-gray-100 mt-2">
                                    <span>Total Value:</span>
                                    <span>${trackingResult.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <SPFooter />
        </div>
    );
};

export default OrderTrackingPage;

