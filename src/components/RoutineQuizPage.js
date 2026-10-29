/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Interactive 3-step botanical diagnostic quiz recommending customized rituals.
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { store } from '../productsStore/Store';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaCheck, FaArrowRight, FaRedo, FaLeaf, FaShoppingBag, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const skinTypes = [
    { id: 'dry', title: 'Dry & Dehydrated', desc: 'Skin feels tight, flaky, or lacks natural sebum luster.' },
    { id: 'oily', title: 'Oily & Congested', desc: 'Prone to midday shine, enlarged pores, and occasional breakouts.' },
    { id: 'sensitive', title: 'Sensitive & Reactive', desc: 'Easily irritated, prone to redness, environmental reactivity.' },
    { id: 'balanced', title: 'Balanced & Normal', desc: 'Generally comfortable, seeking preventative anti-aging & vitality.' },
    { id: 'mature', title: 'Mature & Loss of Elasticity', desc: 'Seeking cellular firming, collagen synthesis, and fine line smoothing.' },
];

const goals = [
    { id: 'radiance', title: 'Luminous Glow & Radiance', desc: 'Brighten dullness and even out sun spots.' },
    { id: 'hydration', title: 'Deep Moisture & Barrier Repair', desc: 'Replenish intercellular lipids and restore dewiness.' },
    { id: 'clarifying', title: 'Pore Refining & Detox', desc: 'Balance excess sebum without drying or stripping skin.' },
    { id: 'rest', title: 'Restorative Sleep & Calm', desc: 'Relax nervous system and restore skin while slumbering.' },
];

const scents = [
    { id: 'citrus', title: 'Sun-Drenched Citrus', desc: 'Blood orange, bergamot, lemon verbena.' },
    { id: 'herbaceous', title: 'Wild Herbaceous & Sage', desc: 'Provence lavender, rosemary, blue tansy.' },
    { id: 'earthy', title: 'Earthy Cedar & Sandalwood', desc: 'Atlas cedar, vetiver, golden amber resin.' },
    { id: 'fragrance_free', title: '100% Fragrance-Free', desc: 'Pure cold-pressed botanicals without added essential oils.' },
];

const RoutineQuizPage = () => {
    const [step, setStep] = useState(1);
    const [selectedSkin, setSelectedSkin] = useState('dry');
    const [selectedGoal, setSelectedGoal] = useState('radiance');
    const [selectedScent, setSelectedScent] = useState('herbaceous');
    const [addedAll, setAddedAll] = useState(false);

    const dispatch = useDispatch();

    // Map selections to 3 tailored products from Store.js
    const getRecommendedProducts = () => {
        let p1 = store.find(p => p.id === "1") || store[0]; // Cleanser
        let p2 = store.find(p => p.id === "2") || store[1]; // Toner/Mist
        let p3;

        if (selectedGoal === 'radiance') {
            p3 = store.find(p => p.id === "24") || store.find(p => p.id === "13"); // Rosehip Glow
        } else if (selectedGoal === 'clarifying') {
            p3 = store.find(p => p.id === "84") || store.find(p => p.id === "8"); // Charcoal or Green Clay
        } else if (selectedGoal === 'rest') {
            p3 = store.find(p => p.id === "23") || store.find(p => p.id === "61"); // Lavender Sleep Elixir
        } else {
            p3 = store.find(p => p.id === "58") || store.find(p => p.id === "10"); // Overnight Ceramide
        }

        return [p1, p2, p3];
    };

    const recommended = getRecommendedProducts();
    const totalPrice = recommended.reduce((acc, p) => acc + (p.price || 0), 0);
    const discountedPrice = Math.round(totalPrice * 0.85); // 15% routine bundle discount

    const handleAddAllToCart = () => {
        recommended.forEach(p => {
            dispatch(cartActions.addItemToCart({
                id: p.id,
                price: p.price,
                title: p.name,
                image: p.primaryImage,
            }));
        });
        setAddedAll(true);
        setTimeout(() => setAddedAll(false), 4000);
    };

    const handleRestart = () => {
        setStep(1);
        setSelectedSkin('dry');
        setSelectedGoal('radiance');
        setSelectedScent('herbaceous');
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Botanical Routine Finder" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Hero Header */}
                <div className="text-center mb-10">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Apothecary Diagnostics • By Ahsan Sheikh
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        Discover Your Bespoke Botanical Ritual
                    </h1>
                    <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                        Answer 3 sensory questions about your skin profile and wellness targets. Our algorithm formulates a tailored 3-step morning and evening regimen.
                    </p>
                </div>

                {/* Progress Stepper */}
                <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12">
                    {[
                        { num: 1, label: 'Skin Profile' },
                        { num: 2, label: 'Ritual Goal' },
                        { num: 3, label: 'Sensory Scent' },
                        { num: 4, label: 'Your Routine' },
                    ].map(s => (
                        <div key={s.num} className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                                step === s.num
                                    ? 'bg-[#1a2e26] text-white shadow-md'
                                    : step > s.num
                                    ? 'bg-[#2b4c3e] text-[#a3c9a8]'
                                    : 'bg-gray-200 text-gray-500'
                            }`}>
                                {step > s.num ? <FaCheck className="text-[10px]" /> : s.num}
                            </div>
                            <span className="hidden sm:inline text-xs font-medium text-gray-600">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Step 1: Skin Profile */}
                {step === 1 && (
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm animate-fadeIn">
                        <h2 className="text-2xl font-serif text-[#162720] mb-2 text-center">
                            Step 1: How would you describe your skin right now?
                        </h2>
                        <p className="text-xs text-gray-500 text-center mb-8">
                            Select the closest description of your morning baseline condition.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {skinTypes.map(st => (
                                <button
                                    key={st.id}
                                    onClick={() => setSelectedSkin(st.id)}
                                    type="button"
                                    className={`p-5 rounded-2xl border text-left transition-all ${
                                        selectedSkin === st.id
                                            ? 'border-[#2b4c3e] bg-[#f4f7f4] shadow-md ring-2 ring-[#2b4c3e]/20'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-sm text-[#162720]">{st.title}</h3>
                                        {selectedSkin === st.id && <FaCheck className="text-[#2b4c3e] text-xs" />}
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">{st.desc}</p>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => setStep(2)}
                                type="button"
                                className="px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-md"
                            >
                                Next Step <FaArrowRight className="text-[10px]" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Primary Goal */}
                {step === 2 && (
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm animate-fadeIn">
                        <h2 className="text-2xl font-serif text-[#162720] mb-2 text-center">
                            Step 2: What is your primary wellness target?
                        </h2>
                        <p className="text-xs text-gray-500 text-center mb-8">
                            We will formulate targeted active bio-nutrients around this objective.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {goals.map(g => (
                                <button
                                    key={g.id}
                                    onClick={() => setSelectedGoal(g.id)}
                                    type="button"
                                    className={`p-5 rounded-2xl border text-left transition-all ${
                                        selectedGoal === g.id
                                            ? 'border-[#2b4c3e] bg-[#f4f7f4] shadow-md ring-2 ring-[#2b4c3e]/20'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-sm text-[#162720]">{g.title}</h3>
                                        {selectedGoal === g.id && <FaCheck className="text-[#2b4c3e] text-xs" />}
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setStep(1)}
                                type="button"
                                className="text-xs text-gray-500 hover:text-black font-medium"
                            >
                                ← Back
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                type="button"
                                className="px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-md"
                            >
                                Next Step <FaArrowRight className="text-[10px]" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Sensory Aroma */}
                {step === 3 && (
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d5] shadow-sm animate-fadeIn">
                        <h2 className="text-2xl font-serif text-[#162720] mb-2 text-center">
                            Step 3: What scent family relaxes you most?
                        </h2>
                        <p className="text-xs text-gray-500 text-center mb-8">
                            All aromas are derived 100% from living flowers, bark, and seeds — zero artificial perfumery.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {scents.map(sc => (
                                <button
                                    key={sc.id}
                                    onClick={() => setSelectedScent(sc.id)}
                                    type="button"
                                    className={`p-5 rounded-2xl border text-left transition-all ${
                                        selectedScent === sc.id
                                            ? 'border-[#2b4c3e] bg-[#f4f7f4] shadow-md ring-2 ring-[#2b4c3e]/20'
                                            : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-sm text-[#162720]">{sc.title}</h3>
                                        {selectedScent === sc.id && <FaCheck className="text-[#2b4c3e] text-xs" />}
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">{sc.desc}</p>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setStep(2)}
                                type="button"
                                className="text-xs text-gray-500 hover:text-black font-medium"
                            >
                                ← Back
                            </button>
                            <button
                                onClick={() => setStep(4)}
                                type="button"
                                className="px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-md"
                            >
                                Reveal My Bespoke Ritual <FaLeaf className="text-emerald-300 text-xs" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Results */}
                {step === 4 && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="bg-[#192b23] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#2b4c3e]">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2d4b3e] pb-6 mb-6">
                                <div>
                                    <span className="text-[10px] tracking-widest text-[#a3c9a8] uppercase font-bold block mb-1">
                                        Prescription Formulation #AB-{Date.now().toString().slice(-4)}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-serif">
                                        Your Custom 3-Step Botanical Ritual
                                    </h2>
                                </div>
                                <button
                                    onClick={handleRestart}
                                    type="button"
                                    className="text-xs text-[#a3c9a8] hover:text-white flex items-center gap-1.5 transition-colors"
                                >
                                    <FaRedo className="text-[10px]" /> Retake Diagnostic
                                </button>
                            </div>

                            <p className="text-xs text-[#b8cfbf] leading-relaxed mb-6">
                                Based on your <span className="text-white font-semibold">{selectedSkin}</span> profile and focus on <span className="text-white font-semibold">{selectedGoal}</span> with <span className="text-white font-semibold">{selectedScent}</span> botanicals, here is your synergistic 3-step morning-to-night sequence.
                            </p>

                            {/* 3 Step Product Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {recommended.map((p, idx) => (
                                    <div key={p.id} className="bg-[#22392f] rounded-2xl p-5 border border-[#2e4d3f] flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-widest text-[#a3c9a8] font-bold block mb-2">
                                                Step {idx + 1}: {idx === 0 ? 'Purify' : idx === 1 ? 'Hydrate' : 'Nourish'}
                                            </span>
                                            <div className="relative mb-4 overflow-hidden rounded-xl bg-white aspect-square">
                                                <img src={p.primaryImage} alt={p.name} className="w-full h-full object-cover" />
                                            </div>
                                            <h3 className="font-serif text-base text-white mb-1 line-clamp-1">{p.name}</h3>
                                            <p className="text-[11px] text-gray-300 mb-3 line-clamp-2">{p.descr}</p>
                                        </div>
                                        <div className="pt-3 border-t border-[#2e4d3f] flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-amber-300 text-xs">
                                                <FaStar /> <span className="text-white text-xs">5.0</span>
                                            </div>
                                            <span className="text-sm font-semibold text-white">${p.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bundle CTA */}
                            <div className="mt-8 pt-6 border-t border-[#2d4b3e] flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-serif text-white font-bold">${discountedPrice}</span>
                                        <span className="text-sm text-gray-400 line-through">${totalPrice}</span>
                                        <span className="text-xs bg-[#a3c9a8] text-[#13221c] font-bold px-2 py-0.5 rounded">
                                            Bundle & Save 15%
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-[#a8beae]">Includes complimentary carbon-neutral shipping & reusable organic cotton pouch.</p>
                                </div>

                                <button
                                    onClick={handleAddAllToCart}
                                    type="button"
                                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#a3c9a8] hover:bg-[#b8d8bc] text-[#13221c] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all transform active:scale-95"
                                >
                                    <FaShoppingBag />
                                    {addedAll ? 'Added 3 Items To Bag!' : 'Add Entire Routine To Bag'}
                                </button>
                            </div>

                            {addedAll && (
                                <div className="mt-4 p-3 bg-emerald-700/80 rounded-xl text-center text-xs text-white">
                                    Your 3-step ritual is ready in your bag! <Link to="/checkout" className="underline font-bold ml-1">Proceed to Checkout →</Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <SPFooter />
        </div>
    );
};

export default RoutineQuizPage;

