/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Digital luxury gift concierge with interactive card preview and instant bag dispatch.
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaGift, FaShoppingBag, FaCheck, FaEnvelope, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const denominations = [25, 50, 100, 200, 500];

const GiftCardsPage = () => {
    const [amount, setAmount] = useState(100);
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderName, setSenderName] = useState('Ahsan Sheikh');
    const [message, setMessage] = useState('May these pure botanicals bring restorative calm to your sacred daily ritual.');
    const [deliveryDate, setDeliveryDate] = useState('Immediate Delivery via Email');
    const [added, setAdded] = useState(false);

    const dispatch = useDispatch();

    const handleAddGiftCard = (e) => {
        e.preventDefault();
        const giftId = 'GC-' + Date.now().toString().slice(-6);
        dispatch(cartActions.addItemToCart({
            id: giftId,
            price: amount,
            title: `Aura Botanics Luxury Digital Gift Card ($${amount})`,
            image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        }));
        setAdded(true);
        setTimeout(() => setAdded(false), 4000);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Digital Gift Concierge" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        The Art of Botanical Gifting
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        Aura Botanics Digital Gift Card
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Bestow the freedom of personal ritual selection. Delivered instantaneously via email with a custom personal message and no expiration date.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Interactive Card Preview */}
                    <div className="lg:col-span-5 sticky top-36">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#192b23] via-[#22392f] to-[#122019] text-white shadow-2xl border border-[#2b4c3e] relative overflow-hidden aspect-[1.58/1] flex flex-col justify-between">
                            {/* Decorative background watermark */}
                            <div className="absolute -right-10 -bottom-10 text-[180px] font-serif text-white/5 select-none pointer-events-none">
                                🌿
                            </div>

                            {/* Top row */}
                            <div className="flex items-start justify-between relative z-10">
                                <div>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#a3c9a8] font-bold block">
                                        E-Gift Certificate
                                    </span>
                                    <h3 className="font-serif text-xl tracking-wider text-white">AURA BOTANICS</h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-serif font-bold text-[#e6f4ea]">${amount}</span>
                                    <span className="block text-[9px] text-[#a3c9a8] uppercase tracking-widest">USD</span>
                                </div>
                            </div>

                            {/* Middle personalized note preview */}
                            <div className="relative z-10 my-auto py-2">
                                <p className="text-xs italic text-gray-300 font-serif leading-relaxed line-clamp-3">
                                    "{message || 'Your personalized greeting message will appear here...'}"
                                </p>
                            </div>

                            {/* Bottom row */}
                            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a8beae]">
                                <div>
                                    <span className="block text-[9px] uppercase tracking-widest text-gray-400">Recipient</span>
                                    <span className="text-white font-medium">{recipientName || 'Gift Recipient'}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-[9px] uppercase tracking-widest text-gray-400">From</span>
                                    <span className="text-white font-medium">{senderName || 'Ahsan Sheikh'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Perks beneath card */}
                        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
                            <div className="p-3 bg-white rounded-xl border border-gray-200">
                                <FaShieldAlt className="mx-auto text-[#2b4c3e] mb-1" />
                                <span className="font-medium text-[11px] block">Never Expires</span>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-gray-200">
                                <FaEnvelope className="mx-auto text-[#2b4c3e] mb-1" />
                                <span className="font-medium text-[11px] block">Instant Email</span>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-gray-200">
                                <FaGift className="mx-auto text-[#2b4c3e] mb-1" />
                                <span className="font-medium text-[11px] block">Store & Online</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Customization Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm">
                        <form onSubmit={handleAddGiftCard} className="space-y-6">
                            {/* Step 1: Select Denomination */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-3">
                                    1. Choose Card Denomination (USD)
                                </label>
                                <div className="grid grid-cols-5 gap-3">
                                    {denominations.map(val => (
                                        <button
                                            key={val}
                                            type="button"
                                            onClick={() => setAmount(val)}
                                            className={`py-3 rounded-xl font-serif text-lg font-bold transition-all ${
                                                amount === val
                                                    ? 'bg-[#1a2e26] text-white shadow-md ring-2 ring-[#2b4c3e]/30'
                                                    : 'border border-gray-200 hover:border-gray-400 text-gray-800'
                                            }`}
                                        >
                                            ${val}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Recipient Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-2">
                                        Recipient Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Charlotte DuPont"
                                        value={recipientName}
                                        onChange={(e) => setRecipientName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-2">
                                        Recipient Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="recipient@example.com"
                                        value={recipientEmail}
                                        onChange={(e) => setRecipientEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Step 3: Sender Name */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-2">
                                    Your Name (Sender) *
                                </label>
                                <input
                                    type="text"
                                    value={senderName}
                                    onChange={(e) => setSenderName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                    required
                                />
                            </div>

                            {/* Step 4: Personal Message */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-2">
                                    Personal Note / Dedication
                                </label>
                                <textarea
                                    rows="3"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    maxLength="180"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2b4c3e] text-sm leading-relaxed"
                                />
                                <span className="text-[10px] text-gray-400 block text-right">Max 180 characters</span>
                            </div>

                            {/* Step 5: Delivery Schedule */}
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold text-[#162720] mb-2 flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-gray-400" /> Delivery Timing
                                </label>
                                <select
                                    value={deliveryDate}
                                    onChange={(e) => setDeliveryDate(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#2b4c3e] text-sm bg-white"
                                >
                                    <option value="Immediate Delivery via Email">Deliver Immediately After Purchase</option>
                                    <option value="Christmas Morning">Schedule for Holiday Morning (Dec 25)</option>
                                    <option value="New Year Celebration">Schedule for New Year (Jan 1)</option>
                                    <option value="Weekend Surprise">Schedule for Saturday Morning</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-lg transform active:scale-95"
                            >
                                <FaShoppingBag />
                                {added ? 'Gift Card Added To Bag!' : `Add $${amount} Gift Card To Bag`}
                            </button>

                            {added && (
                                <div className="p-3 bg-emerald-800 text-white text-xs rounded-xl text-center flex items-center justify-center gap-2">
                                    <FaCheck className="text-emerald-300" /> Gift card prepared! <Link to="/cart" className="underline font-bold ml-1">View Bag & Checkout →</Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default GiftCardsPage;

