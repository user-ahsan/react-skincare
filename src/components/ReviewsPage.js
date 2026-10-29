/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Customer testimonials, verified reviews breakdown, and review submission modal.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaStar, FaCheckCircle, FaFilter, FaPen } from 'react-icons/fa';

const sampleReviews = [
    {
        id: 1,
        name: "Kaori Tanaka",
        location: "Tokyo, Japan",
        date: "October 2026",
        rating: 5,
        title: "Transcendent botanical purity and immediate glow",
        comment: "I have sensitive rosacea-prone skin that reacts harshly to synthetic chemicals. Aura Botanics completely transformed my skin barrier. The Foaming Cleanser combined with the Chamomile Mist is pure heaven.",
        product: "Botanical Foaming Cleanser",
        verified: true
    },
    {
        id: 2,
        name: "Claire Montgomery",
        location: "New York, USA",
        date: "October 2026",
        rating: 5,
        title: "The Rose Gold pack is the most luxurious gift set I have ever unboxed",
        comment: "The heavy violet glass bottles, the delicate rosewater aroma, and the quick-absorbing body oil make this a daily spa ritual. Ahsan Sheikh and the team have created something truly extraordinary here.",
        product: "Rose Gold Radiance Ritual Pack",
        verified: true
    },
    {
        id: 3,
        name: "Julian Moreau",
        location: "Paris, France",
        date: "September 2026",
        rating: 5,
        title: "Unmatched scalp clarity and density",
        comment: "I've struggled with flaky winter scalp for years. The Rosemary & Scalp Purifier cleared all build-up within three washes. Plus, knowing it's 100% organic and carbon-neutral makes me a customer for life.",
        product: "Clarifying Eucalyptus Scalp Purifier",
        verified: true
    },
    {
        id: 4,
        name: "Elena Rostova",
        location: "Melbourne, Australia",
        date: "September 2026",
        rating: 5,
        title: "Aromatherapeutic perfection that actually works",
        comment: "The Lavender Deep Sleep elixir knocked out my evening stress. My skin feels plumper every morning. Fast shipping and gorgeous eco-friendly packaging.",
        product: "Pure Lavender Deep Sleep Elixir",
        verified: true
    },
    {
        id: 5,
        name: "Marcus Vance",
        location: "Austin, Texas",
        date: "August 2026",
        rating: 4,
        title: "Great invigorating body scrub",
        comment: "The Coffee Bean Scrub smells like fresh espresso and leaves my skin exceptionally soft. Best body scrub I've tried.",
        product: "Organic Coffee Bean Body Scrub",
        verified: true
    }
];

const ReviewsPage = () => {
    const [selectedRating, setSelectedRating] = useState('All');
    const [modalOpen, setModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [newReview, setNewReview] = useState({
        name: '',
        title: '',
        comment: '',
        product: 'Botanical Foaming Cleanser',
        rating: 5
    });

    const filteredReviews = sampleReviews.filter((r) => {
        if (selectedRating === 'All') return true;
        return r.rating === Number(selectedRating);
    });

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setModalOpen(false);
            setNewReview({
                name: '',
                title: '',
                comment: '',
                product: 'Botanical Foaming Cleanser',
                rating: 5
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Verified Community Reviews" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Verified Customer Feedback
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                    Real Experiences. Living Glow.
                </h1>
                <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                    Over 50,000 customers worldwide trust Aura Botanics for clean, biocompatible botanical self-care.
                </p>
            </div>

            {/* Score Summary & Write Review Button */}
            <div className="max-w-5xl mx-auto px-6 mb-12">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6 text-center sm:text-left">
                        <div className="text-center">
                            <span className="text-5xl sm:text-6xl font-serif font-bold text-[#1a2e26]">4.9</span>
                            <div className="flex items-center justify-center text-amber-500 text-sm mt-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <span className="text-[11px] text-gray-400 mt-1 block">Based on 1,840+ reviews</span>
                        </div>

                        <div className="hidden sm:block h-20 w-px bg-gray-200" />

                        <div className="text-xs space-y-1.5 text-gray-500">
                            <div className="flex items-center gap-2">
                                <span>5 Stars</span>
                                <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[94%]" />
                                </div>
                                <span className="font-semibold text-gray-800">94%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>4 Stars</span>
                                <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[5%]" />
                                </div>
                                <span className="font-semibold text-gray-800">5%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>3 Stars</span>
                                <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[1%]" />
                                </div>
                                <span className="font-semibold text-gray-800">1%</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center gap-2"
                    >
                        <FaPen className="text-[10px]" /> Write a Review
                    </button>
                </div>
            </div>

            {/* Filter Pills */}
            <div className="max-w-5xl mx-auto px-6 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-gray-500 font-semibold uppercase tracking-wider mr-2">Filter:</span>
                    {['All', '5', '4'].map((star) => (
                        <button
                            key={star}
                            onClick={() => setSelectedRating(star)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedRating === star
                                    ? 'bg-[#1a2e26] text-white shadow-sm'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {star === 'All' ? 'All Reviews' : `${star} Stars`}
                        </button>
                    ))}
                </div>
                <span className="text-xs text-gray-400">Showing {filteredReviews.length} verified reviews</span>
            </div>

            {/* Reviews Cards */}
            <div className="max-w-5xl mx-auto px-6 pb-24 space-y-6">
                {filteredReviews.map((r) => (
                    <div
                        key={r.id}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-serif font-bold text-gray-900 text-base">{r.name}</h3>
                                    {r.verified && (
                                        <span className="flex items-center gap-1 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                                            <FaCheckCircle className="text-emerald-600" /> Verified Buyer
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs text-gray-400">{r.location} • {r.date}</span>
                            </div>

                            <div className="flex items-center gap-1 text-amber-500 text-sm">
                                {[...Array(r.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <span className="text-xs font-semibold text-[#2b4c3e] uppercase tracking-wider block mb-1">
                                Product: {r.product}
                            </span>
                            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
                                "{r.title}"
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {r.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Write Review Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                            <h3 className="font-serif text-xl font-bold text-gray-900">Share Your Experience</h3>
                            <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-black">✕</button>
                        </div>

                        {submitted ? (
                            <div className="text-center py-8 text-emerald-800 text-sm">
                                <FaCheckCircle className="text-3xl text-emerald-600 mx-auto mb-2" />
                                <strong>Thank you for your review!</strong> <br />
                                Your feedback has been submitted to the moderation team.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        placeholder="e.g. Kaori Tanaka"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Review Headline</label>
                                    <input
                                        type="text"
                                        required
                                        value={newReview.title}
                                        onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                                        placeholder="e.g. My new holy grail ritual"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Your Detailed Feedback</label>
                                    <textarea
                                        rows="4"
                                        required
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                        placeholder="How did this botanical formulation feel on your skin?"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm leading-relaxed"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold uppercase tracking-wider text-xs transition-colors shadow-md"
                                >
                                    Submit Verified Review
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

export default ReviewsPage;
