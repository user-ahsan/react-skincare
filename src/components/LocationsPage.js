/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Global boutique directory with interactive booking modal and amenity highlights.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCheck, FaTimes, FaCalendarAlt } from 'react-icons/fa';

const boutiques = [
    {
        id: 'nyc',
        name: 'New York Flagship Atelier',
        city: 'New York, USA',
        region: 'Americas',
        address: '92 Mercer Street, SoHo, NY 10012',
        phone: '+1 (212) 840-2910',
        hours: 'Mon–Sat: 10:00 AM – 7:00 PM | Sun: 11:00 AM – 6:00 PM',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
        amenities: ['Custom Blending Bar', 'Private Dermal Suites', 'Refill Station', 'Herbal Tea Lounge']
    },
    {
        id: 'london',
        name: 'London Mayfair Sanctuary',
        city: 'London, UK',
        region: 'Europe',
        address: '14 Mount Street, Mayfair, London W1K 2RF',
        phone: '+44 20 7946 0912',
        hours: 'Mon–Sat: 10:00 AM – 6:30 PM | Sun: 12:00 PM – 5:00 PM',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        amenities: ['Apothecary Dispensary', 'Scalp Therapy Suite', 'Refill Station', 'Concierge Gifting']
    },
    {
        id: 'paris',
        name: 'Paris Le Marais Atelier',
        city: 'Paris, France',
        region: 'Europe',
        address: '28 Rue des Francs-Bourgeois, 75003 Paris',
        phone: '+33 1 42 68 55 00',
        hours: 'Tue–Sat: 11:00 AM – 7:30 PM | Sun: 1:00 PM – 6:00 PM',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
        amenities: ['French Clay Tasting Bar', 'Bio-Facial Room', 'Certified Green Lab', 'Refill Station']
    },
    {
        id: 'tokyo',
        name: 'Tokyo Ginza Boutique',
        city: 'Tokyo, Japan',
        region: 'Asia-Pacific',
        address: '5-7-1 Ginza, Chuo City, Tokyo 104-0061',
        phone: '+81 3 5555 0143',
        hours: 'Daily: 11:00 AM – 8:00 PM',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        amenities: ['Matcha Botanical Bar', 'Aroma Sensing Room', 'Lymphatic Gua Sha Atelier', 'Refill Station']
    },
    {
        id: 'melbourne',
        name: 'Melbourne Gertrude Atelier',
        city: 'Melbourne, Australia',
        region: 'Asia-Pacific',
        address: '176 Gertrude Street, Fitzroy, VIC 3065',
        phone: '+61 3 9419 8830',
        hours: 'Mon–Sat: 10:00 AM – 6:00 PM | Sun: 11:00 AM – 5:00 PM',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        amenities: ['Kakadu Extraction Lab', 'Solar-Powered Atelier', 'Native Botanicals Garden', 'Refill Station']
    }
];

const LocationsPage = () => {
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [bookingBoutique, setBookingBoutique] = useState(null);
    const [bookedSuccess, setBookedSuccess] = useState(false);

    const filtered = selectedRegion === 'All'
        ? boutiques
        : boutiques.filter(b => b.region === selectedRegion);

    const handleBookSubmit = (e) => {
        e.preventDefault();
        setBookedSuccess(true);
        setTimeout(() => {
            setBookedSuccess(false);
            setBookingBoutique(null);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Global Boutiques & Ateliers" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Physical Sanctuaries
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        Our Global Ateliers
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Step into our calm botanical sanctuaries in SoHo, Mayfair, Le Marais, Ginza, and Fitzroy. Experience custom formulation blending, bottle refill bars, and certified herbalist skin diagnostics.
                    </p>
                </div>

                {/* Region Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {['All', 'Americas', 'Europe', 'Asia-Pacific'].map(region => (
                        <button
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                                selectedRegion === region
                                    ? 'bg-[#1a2e26] text-white shadow-md'
                                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                            }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* Boutiques List */}
                <div className="space-y-12">
                    {filtered.map(b => (
                        <div
                            key={b.id}
                            className="bg-white rounded-3xl overflow-hidden border border-[#e8e2d5] shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch"
                        >
                            <div className="lg:col-span-5 relative min-h-[280px]">
                                <img
                                    src={b.image}
                                    alt={b.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-[#192b23]/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                                    {b.city}
                                </div>
                            </div>

                            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-[#2b4c3e] uppercase tracking-widest mb-1">
                                        <FaMapMarkerAlt /> {b.region}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-serif text-[#162720] mb-4">
                                        {b.name}
                                    </h2>

                                    <div className="space-y-2 text-xs text-gray-600 mb-6">
                                        <p className="flex items-center gap-2">
                                            <strong className="text-black">Address:</strong> {b.address}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FaPhoneAlt className="text-gray-400 text-[10px]" /> {b.phone}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FaClock className="text-gray-400 text-[10px]" /> {b.hours}
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">
                                            Atelier Amenities
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {b.amenities.map((am, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-[#f4f7f4] border border-[#dce8df] text-[#1e3b2e] text-[11px] font-medium">
                                                    {am}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                                    <button
                                        onClick={() => setBookingBoutique(b)}
                                        className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
                                    >
                                        Book Private Consultation
                                    </button>
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent(b.name + ' ' + b.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-gray-600 hover:text-black underline underline-offset-4 font-medium"
                                    >
                                        Get Directions ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {bookingBoutique && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100">
                        <button
                            onClick={() => setBookingBoutique(null)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-black p-2"
                        >
                            <FaTimes />
                        </button>

                        <div className="mb-6">
                            <span className="text-[10px] uppercase tracking-widest text-[#2b4c3e] font-bold block">
                                Private Concierge
                            </span>
                            <h3 className="text-2xl font-serif text-[#162720]">
                                Book at {bookingBoutique.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                                Complimentary 45-minute bespoke skin diagnostic with custom apothecary blend formulation.
                            </p>
                        </div>

                        {bookedSuccess ? (
                            <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-2">
                                <FaCheck className="mx-auto text-2xl text-emerald-600" />
                                <h4 className="font-serif text-lg font-bold">Appointment Confirmed!</h4>
                                <p className="text-xs">
                                    A calendar invitation and preparatory questionnaire have been dispatched to your email.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleBookSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Your Full Name *</label>
                                    <input type="text" placeholder="Elena Rostova" required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Email Address *</label>
                                    <input type="email" placeholder="elena@example.com" required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Preferred Date</label>
                                        <input type="date" required className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#2b4c3e]" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Preferred Time</label>
                                        <select className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#2b4c3e] bg-white">
                                            <option>11:00 AM</option>
                                            <option>2:00 PM</option>
                                            <option>4:30 PM</option>
                                            <option>6:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                                >
                                    <FaCalendarAlt /> Confirm Private Consultation
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            <SPFooter />
        </div>
    );
};

export default LocationsPage;

